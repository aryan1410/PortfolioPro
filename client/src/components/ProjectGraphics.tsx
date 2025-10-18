// Custom SVG graphics for portfolio projects

export const GoGameGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Go board background */}
    <rect width="200" height="200" fill="#D4A574" rx="8"/>
    
    {/* Grid lines */}
    {Array.from({length: 9}, (_, i) => (
      <g key={i}>
        <line x1={20 + i * 20} y1="20" x2={20 + i * 20} y2="180" stroke="#8B4513" strokeWidth="1"/>
        <line x1="20" y1={20 + i * 20} x2="180" y2={20 + i * 20} stroke="#8B4513" strokeWidth="1"/>
      </g>
    ))}
    
    {/* Star points */}
    <circle cx="60" cy="60" r="2" fill="#8B4513"/>
    <circle cx="140" cy="60" r="2" fill="#8B4513"/>
    <circle cx="100" cy="100" r="2" fill="#8B4513"/>
    <circle cx="60" cy="140" r="2" fill="#8B4513"/>
    <circle cx="140" cy="140" r="2" fill="#8B4513"/>
    
    {/* Game stones */}
    <circle cx="60" cy="80" r="8" fill="#000" opacity="0.9"/>
    <circle cx="80" cy="60" r="8" fill="#fff" stroke="#000" strokeWidth="1"/>
    <circle cx="100" cy="80" r="8" fill="#000" opacity="0.9"/>
    <circle cx="120" cy="100" r="8" fill="#fff" stroke="#000" strokeWidth="1"/>
    <circle cx="80" cy="120" r="8" fill="#000" opacity="0.9"/>
    <circle cx="140" cy="80" r="8" fill="#fff" stroke="#000" strokeWidth="1"/>
    
    {/* AI thinking indicator */}
    <g>
      <circle cx="160" cy="40" r="15" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2"/>
      <text x="160" y="45" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="bold">AI</text>
    </g>
  </svg>
);

export const DataScienceGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Background */}
    <rect width="200" height="200" fill="url(#dataGradient)" rx="8"/>
    <defs>
      <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a"/>
        <stop offset="100%" stopColor="#3730a3"/>
      </linearGradient>
    </defs>
    
    {/* Data points */}
    <g opacity="0.8">
      <circle cx="50" cy="150" r="4" fill="#60a5fa"/>
      <circle cx="70" cy="120" r="4" fill="#60a5fa"/>
      <circle cx="90" cy="100" r="4" fill="#60a5fa"/>
      <circle cx="110" cy="80" r="4" fill="#60a5fa"/>
      <circle cx="130" cy="60" r="4" fill="#60a5fa"/>
      <circle cx="150" cy="50" r="4" fill="#60a5fa"/>
    </g>
    
    {/* Trend line */}
    <path d="M 50 150 Q 100 75 150 50" stroke="#fbbf24" strokeWidth="3" fill="none"/>
    
    {/* Bar chart */}
    <rect x="20" y="130" width="12" height="40" fill="#34d399"/>
    <rect x="35" y="110" width="12" height="60" fill="#34d399"/>
    <rect x="50" y="120" width="12" height="50" fill="#34d399"/>
    <rect x="65" y="100" width="12" height="70" fill="#34d399"/>
    
    {/* Neural network nodes */}
    <g>
      <circle cx="160" cy="120" r="6" fill="#f59e0b"/>
      <circle cx="175" cy="100" r="6" fill="#f59e0b"/>
      <circle cx="175" cy="140" r="6" fill="#f59e0b"/>
      <line x1="160" y1="120" x2="175" y2="100" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="160" y1="120" x2="175" y2="140" stroke="#f59e0b" strokeWidth="2"/>
    </g>
  </svg>
);

export const NLPGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Background */}
    <rect width="200" height="200" fill="url(#nlpGradient)" rx="8"/>
    <defs>
      <linearGradient id="nlpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#065f46"/>
        <stop offset="100%" stopColor="#047857"/>
      </linearGradient>
    </defs>
    
    {/* Text processing visualization */}
    <rect x="20" y="40" width="160" height="20" fill="rgba(255,255,255,0.1)" rx="10"/>
    <text x="30" y="55" fill="#a7f3d0" fontSize="12">Natural Language Processing</text>
    
    {/* Word embeddings */}
    <g>
      <rect x="30" y="80" width="40" height="8" fill="#10b981" rx="4"/>
      <rect x="80" y="80" width="30" height="8" fill="#059669" rx="4"/>
      <rect x="120" y="80" width="50" height="8" fill="#10b981" rx="4"/>
    </g>
    
    {/* Attention mechanism */}
    <g opacity="0.7">
      <path d="M 50 120 Q 100 100 150 120" stroke="#34d399" strokeWidth="2" fill="none"/>
      <path d="M 60 140 Q 100 120 140 140" stroke="#6ee7b7" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="120" r="4" fill="#10b981"/>
      <circle cx="100" cy="100" r="4" fill="#10b981"/>
      <circle cx="150" cy="120" r="4" fill="#10b981"/>
    </g>
    
    {/* Output tokens */}
    <rect x="40" y="160" width="20" height="15" fill="#a7f3d0" rx="3"/>
    <rect x="70" y="160" width="25" height="15" fill="#a7f3d0" rx="3"/>
    <rect x="105" y="160" width="30" height="15" fill="#a7f3d0" rx="3"/>
    <rect x="145" y="160" width="15" height="15" fill="#a7f3d0" rx="3"/>
  </svg>
);

export const WebDevGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Background */}
    <rect width="200" height="200" fill="url(#webGradient)" rx="8"/>
    <defs>
      <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c2d12"/>
        <stop offset="100%" stopColor="#dc2626"/>
      </linearGradient>
    </defs>
    
    {/* Browser window */}
    <rect x="30" y="40" width="140" height="100" fill="#1f2937" rx="8"/>
    <rect x="30" y="40" width="140" height="25" fill="#374151" rx="8"/>
    
    {/* Browser dots */}
    <circle cx="45" cy="52" r="3" fill="#ef4444"/>
    <circle cx="55" cy="52" r="3" fill="#f59e0b"/>
    <circle cx="65" cy="52" r="3" fill="#10b981"/>
    
    {/* Code elements */}
    <rect x="40" y="75" width="60" height="6" fill="#3b82f6" rx="3"/>
    <rect x="40" y="90" width="80" height="6" fill="#8b5cf6" rx="3"/>
    <rect x="50" y="105" width="40" height="6" fill="#06b6d4" rx="3"/>
    <rect x="50" y="120" width="70" height="6" fill="#f59e0b" rx="3"/>
    
    {/* Interactive elements */}
    <g>
      <rect x="110" y="75" width="45" height="15" fill="#10b981" rx="7"/>
      <text x="132" y="85" textAnchor="middle" fill="white" fontSize="8">Button</text>
    </g>
    
    {/* Network connections */}
    <g opacity="0.6">
      <path d="M 80 150 Q 100 160 120 150" stroke="#60a5fa" strokeWidth="2" fill="none"/>
      <circle cx="80" cy="150" r="4" fill="#3b82f6"/>
      <circle cx="120" cy="150" r="4" fill="#3b82f6"/>
      <circle cx="100" cy="170" r="4" fill="#1d4ed8"/>
    </g>
  </svg>
);

export const MLGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Background */}
    <rect width="200" height="200" fill="url(#mlGradient)" rx="8"/>
    <defs>
      <linearGradient id="mlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#581c87"/>
        <stop offset="100%" stopColor="#7c3aed"/>
      </linearGradient>
    </defs>
    
    {/* Neural network layers */}
    <g opacity="0.8">
      {/* Input layer */}
      <circle cx="40" cy="60" r="6" fill="#a78bfa"/>
      <circle cx="40" cy="100" r="6" fill="#a78bfa"/>
      <circle cx="40" cy="140" r="6" fill="#a78bfa"/>
      
      {/* Hidden layer */}
      <circle cx="100" cy="50" r="6" fill="#8b5cf6"/>
      <circle cx="100" cy="90" r="6" fill="#8b5cf6"/>
      <circle cx="100" cy="130" r="6" fill="#8b5cf6"/>
      <circle cx="100" cy="170" r="6" fill="#8b5cf6"/>
      
      {/* Output layer */}
      <circle cx="160" cy="80" r="6" fill="#c4b5fd"/>
      <circle cx="160" cy="120" r="6" fill="#c4b5fd"/>
    </g>
    
    {/* Connections */}
    <g opacity="0.4">
      {[60, 100, 140].map(y1 => 
        [50, 90, 130, 170].map(y2 => (
          <line key={`${y1}-${y2}`} x1="46" y1={y1} x2="94" y2={y2} stroke="#ddd6fe" strokeWidth="1"/>
        ))
      )}
      {[50, 90, 130, 170].map(y1 => 
        [80, 120].map(y2 => (
          <line key={`h-${y1}-${y2}`} x1="106" y1={y1} x2="154" y2={y2} stroke="#ddd6fe" strokeWidth="1"/>
        ))
      )}
    </g>
    
    {/* Training indicator */}
    <g className="animate-spin" style={{transformOrigin: '100px 30px'}}>
      <circle cx="100" cy="30" r="12" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="8 4"/>
    </g>
    <text x="100" y="35" textAnchor="middle" fill="#fbbf24" fontSize="8">Training</text>
  </svg>
);

export const WorkflowGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Background */}
    <rect width="200" height="200" fill="url(#workflowGradient)" rx="8"/>
    <defs>
      <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1f2937"/>
        <stop offset="100%" stopColor="#4f46e5"/>
      </linearGradient>
    </defs>
    
    {/* Project Cards */}
    <rect x="20" y="30" width="60" height="40" fill="#3b82f6" rx="4" opacity="0.8"/>
    <rect x="90" y="30" width="60" height="40" fill="#10b981" rx="4" opacity="0.8"/>
    <rect x="160" y="30" width="20" height="40" fill="#f59e0b" rx="4" opacity="0.8"/>
    
    {/* Task Lists */}
    <rect x="25" y="35" width="50" height="4" fill="#ffffff" rx="2"/>
    <rect x="25" y="42" width="35" height="4" fill="#e5e7eb" rx="2"/>
    <rect x="25" y="49" width="40" height="4" fill="#e5e7eb" rx="2"/>
    <rect x="25" y="56" width="25" height="4" fill="#e5e7eb" rx="2"/>
    
    <rect x="95" y="35" width="45" height="4" fill="#ffffff" rx="2"/>
    <rect x="95" y="42" width="30" height="4" fill="#e5e7eb" rx="2"/>
    <rect x="95" y="49" width="35" height="4" fill="#e5e7eb" rx="2"/>
    
    {/* Timer/Analytics */}
    <circle cx="100" cy="120" r="35" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="3"/>
    <text x="100" y="115" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">2:45</text>
    <text x="100" y="130" textAnchor="middle" fill="#3b82f6" fontSize="8">TIMER</text>
    
    {/* Progress bars */}
    <rect x="30" y="160" width="140" height="8" fill="#374151" rx="4"/>
    <rect x="30" y="160" width="84" height="8" fill="#10b981" rx="4"/>
    <text x="100" y="153" textAnchor="middle" fill="#10b981" fontSize="10">60% Complete</text>
    
    {/* Collaboration icons */}
    <circle cx="40" cy="185" r="8" fill="#8b5cf6"/>
    <circle cx="60" cy="185" r="8" fill="#06b6d4"/>
    <circle cx="80" cy="185" r="8" fill="#f59e0b"/>
    <text x="100" y="190" fill="#9ca3af" fontSize="8">Team</text>
    
    {/* File icons */}
    <rect x="150" y="170" width="12" height="15" fill="#ef4444" rx="2"/>
    <rect x="165" y="170" width="12" height="15" fill="#3b82f6" rx="2"/>
    <text x="165" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8">Files</text>
  </svg>
);

export const DatabaseGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Background */}
    <rect width="200" height="200" fill="url(#dbGradient)" rx="8"/>
    <defs>
      <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a"/>
        <stop offset="100%" stopColor="#1e293b"/>
      </linearGradient>
    </defs>
    
    {/* Database cylinders */}
    <g opacity="0.9">
      <ellipse cx="70" cy="60" rx="25" ry="8" fill="#475569"/>
      <rect x="45" y="60" width="50" height="40" fill="#475569"/>
      <ellipse cx="70" cy="100" rx="25" ry="8" fill="#64748b"/>
      
      <ellipse cx="130" cy="80" rx="20" ry="6" fill="#475569"/>
      <rect x="110" y="80" width="40" height="30" fill="#475569"/>
      <ellipse cx="130" cy="110" rx="20" ry="6" fill="#64748b"/>
    </g>
    
    {/* Data flow */}
    <g className="animate-pulse">
      <path d="M 95 80 Q 110 75 125 80" stroke="#06b6d4" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M 70 120 Q 100 140 130 120" stroke="#06b6d4" strokeWidth="2" fill="none"/>
    </g>
    
    {/* Query visualization */}
    <rect x="30" y="140" width="140" height="15" fill="rgba(6, 182, 212, 0.2)" rx="7"/>
    <text x="100" y="150" textAnchor="middle" fill="#67e8f9" fontSize="10">SELECT * FROM projects</text>
    
    {/* Arrow marker */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4"/>
      </marker>
    </defs>
  </svg>
);

export const DGenGraphic = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Background */}
    <rect width="200" height="200" fill="url(#aiGradient)" rx="8" />
    <defs>
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
    </defs>

    {/* AI head */}
    <g opacity="0.95">
      <circle cx="100" cy="70" r="28" fill="#475569" stroke="#38bdf8" strokeWidth="2" />
      <rect x="72" y="98" width="56" height="35" rx="10" fill="#475569" />
      <circle cx="88" cy="65" r="5" fill="#38bdf8" />
      <circle cx="112" cy="65" r="5" fill="#38bdf8" />
      <rect x="90" y="78" width="20" height="4" rx="2" fill="#67e8f9" opacity="0.8" />
    </g>

    {/* Speech bubbles */}
    <g className="animate-pulse" opacity="0.85">
      <rect x="25" y="35" width="55" height="20" rx="5" fill="rgba(6, 182, 212, 0.2)" />
      <text x="52" y="49" textAnchor="middle" fill="#67e8f9" fontSize="8">"Explain photosynthesis"</text>

      <rect x="120" y="120" width="55" height="20" rx="5" fill="rgba(6, 182, 212, 0.2)" />
      <text x="147" y="134" textAnchor="middle" fill="#67e8f9" fontSize="8">"Sure! Let's visualize it."</text>
    </g>

    {/* AI–Book connection lines */}
    <path
      d="M60 60 Q100 90 140 120"
      stroke="#06b6d4"
      strokeWidth="2"
      fill="none"
      markerEnd="url(#arrowhead)"
    />
    <path
      d="M140 80 Q100 110 60 140"
      stroke="#06b6d4"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />

    {/* Book icons */}
    <g opacity="0.9">
      <rect x="40" y="140" width="35" height="25" rx="3" fill="#475569" />
      <line x1="55" y1="140" x2="55" y2="165" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="125" y="30" width="35" height="25" rx="3" fill="#475569" />
      <line x1="140" y1="30" x2="140" y2="55" stroke="#94a3b8" strokeWidth="1.5" />
    </g>

    {/* Caption */}
    <text
      x="100"
      y="185"
      textAnchor="middle"
      fill="#67e8f9"
      fontSize="10"
      opacity="0.9"
    >
      D-GEN · AI Tutor for Engaging Learning
    </text>

    {/* Arrow marker */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
      </marker>
    </defs>
  </svg>
);