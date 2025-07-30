#!/usr/bin/env python3
import os
import sys

print("Testing email environment...")
print(f"EMAIL_ADDRESS: {'SET' if os.getenv('EMAIL_ADDRESS') else 'NOT SET'}")
print(f"EMAIL_PASSWORD: {'SET' if os.getenv('EMAIL_PASSWORD') else 'NOT SET'}")

if os.getenv('EMAIL_ADDRESS'):
    print(f"Email address: {os.getenv('EMAIL_ADDRESS')}")

print("\nFor Gmail, you need:")
print("1. Enable 2-factor authentication")
print("2. Generate an App Password (not your regular password)")
print("3. Use the 16-character App Password in EMAIL_PASSWORD")
print("\nTo generate App Password:")
print("- Go to Google Account settings")
print("- Security > 2-Step Verification > App passwords")
print("- Generate password for 'Mail'")
print("- Use that password in EMAIL_PASSWORD secret")