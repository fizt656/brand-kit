#!/bin/bash

# Brain Topology Editor Launcher
cd "$(dirname "$0")"

echo "Starting editor at http://localhost:8000/editor.html"
echo "Press Ctrl+C to stop"
echo ""

# Open browser after a short delay
(sleep 1 && open "http://localhost:8000/editor.html") &

# Start server
python3 -m http.server 8000
