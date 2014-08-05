[![Gitter chat](https://badges.gitter.im/gorhgorh/node-five.png)](https://gitter.im/gorhgorh/node-five)

# test runner to debug J5 with nodewebkit

## requirements

- a gcc toolchain
- python 2.7.x (NOT 3)
- node-pre-gyp (```npm install node-pre-gyp -g```)

## installation

cd into the directory and run 

```
./tools/install_dep.sh
```
to intall needed dependencies, then 
```
./tools/nw_pre_gyp.sh
```
to compile serial port for nodewebkit

## usage

```
npm start
```
to launch the downloaded version of nodewebkit in the current project dir

## Current status

serial port is working, you can list current avaialble device without problem.  
the J5 page start serial communication (d13 blinks a few time) then crashes with with this output 

```
Uncaught node.js Error 

TypeError: Cannot set property 'mode' of undefined
    at Board.pinMode (/Users/jloi/code/serialTest/nw/node_modules/johnny-five/node_modules/firmata/lib/firmata.js:600:25)
    at Led.Object.defineProperties.mode.set (/Users/jloi/code/serialTest/nw/node_modules/johnny-five/lib/led.js:91:19)
    at new Led (/Users/jloi/code/serialTest/nw/node_modules/johnny-five/lib/led.js:106:15)
    at Board.eval (file:///Users/jloi/code/serialTest/nw/j5.js:17:13)
    at Board.EventEmitter.emit (events.js:98:17)
    at Board.broadcast (/Users/jloi/code/serialTest/nw/node_modules/johnny-five/lib/board.js:395:8)
    at Board.eval (/Users/jloi/code/serialTest/nw/node_modules/johnny-five/lib/board.js:154:18)
    at SerialPort.eval (/Users/jloi/code/serialTest/nw/node_modules/johnny-five/node_modules/firmata/lib/firmata.js:418:13)
    at SerialPort.EventEmitter.emit (events.js:98:17)
    at SerialPortFactory.SerialPort.write (/Users/jloi/code/serialTest/nw/node_modules/johnny-five/node_modules/serialport/serialport.js:216:14)
```

## TODO 

- finish serial port testing (open client and sent bytes/report)
-implement proper test