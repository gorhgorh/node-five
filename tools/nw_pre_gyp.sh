#!/bin/bash
cwd=$(pwd)
echo $cwd
cd node_modules/serialport/
echo $(pwd)
node-pre-gyp build --runtime=node-webkit --target=0.8.2 --target_arch=ia32
cd $cwd
cd node_modules/johnny-five/node_modules/serialport/
node-pre-gyp build --runtime=node-webkit --target=0.8.2 --target_arch=ia32
cd $cwd