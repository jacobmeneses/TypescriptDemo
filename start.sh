#!/bin/bash

sh scripts/less.sh 
echo "Running tsc..."
tsc 
cd src 
node .