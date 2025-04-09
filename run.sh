#!/bin/bash

# Exit on error
set -e

# Process environment variables from command line arguments
for arg in "$@"; do
  export "$arg"
done

echo "Starting application with provided environment variables..."
node build/index.js
