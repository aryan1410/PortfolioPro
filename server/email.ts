import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactEmailFallback } from './email_fallback';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if Python email credentials are available
function checkEmailCredentials(): boolean {
  return !!(process.env.EMAIL_ADDRESS && process.env.EMAIL_PASSWORD);
}

interface ContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  // Check if credentials are available
  if (!checkEmailCredentials()) {
    console.log('📧 Email credentials not configured. Skipping email send.');
    console.log('💡 To enable email sending, set EMAIL_ADDRESS and EMAIL_PASSWORD environment variables.');
    return false;
  }

  // Try Python email first, fallback to Node.js implementation
  const pythonSuccess = await sendPythonEmail(params);
  
  if (pythonSuccess) {
    return true;
  } else {
    console.log('🔄 Python email failed, trying Node.js fallback...');
    return await sendContactEmailFallback(params);
  }
}

async function sendPythonEmail(params: ContactEmailParams): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const pythonScriptPath = path.join(__dirname, 'email_sender.py');
      const contactData = JSON.stringify(params);
      
      // Spawn Python process to send email
      const pythonProcess = spawn('python3', [pythonScriptPath, contactData], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env } // Pass environment variables to Python process
      });
      
      let output = '';
      let errorOutput = '';
      
      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      pythonProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });
      
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          console.log(output.trim());
          resolve(true);
        } else {
          console.error('❌ Python email sender error:');
          console.error(output.trim());
          console.error(errorOutput.trim());
          resolve(false);
        }
      });
      
      pythonProcess.on('error', (error) => {
        console.error('❌ Failed to spawn Python email process:', error.message);
        console.log('💡 Make sure Python 3 is installed and available in PATH');
        resolve(false);
      });
      
    } catch (error: any) {
      console.error('❌ Error setting up email sending:', error.message);
      resolve(false);
    }
  });
}