var serialPort = require("serialport"),
    utils = require("./libs/utils"),
    serialList = [],
    serCont = document.getElementById("serialCont"),
    optListPre="<select>",
    optListPost="</select>",
    app = {},
    testor;

// populate a list with serial connections
serialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    serialList.push(port.comName);
  });
  serCont.innerHTML = utils.makeSerialOpt(serialList,optListPre,optListPost);
});







// var SerialPort = require("serialport").SerialPort
// var serialPort = new SerialPort("/dev/cu.usbmodem1411", {
//   baudrate: 9600
// });



// serialPort.on("open", function () {
//   console.log('open');
//   serialPort.on('data', function(data) {
//     console.log('data received: ' + data);
//   });
//   serialPort.write("ls\n", function(err, results) {
//     console.log('err ' + err);
//     console.log('results ' + results);
//   });
// });