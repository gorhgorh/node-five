document.addEventListener('DOMContentLoaded', function(){

var SerialPort = require("serialport").SerialPort,
    serlist =require("serialport"),
    serialList=[],
    utils=require("./libs/utils"),
    serData = document.getElementById("serialData"),
    serCont = document.getElementById("serialCont"),
    serialLog="";
console.log(serCont);
console.log(serData);
//serData.appendChild(serData);
serlist.list(function (err, ports) {
  ports.forEach(function(port) {
    serialList.push(port.comName);
  });
  serCont.innerHTML = utils.makeSerialOpt(serialList);
});
var serialPort = new SerialPort("/dev/cu.usbmodem1411", {
  baudrate: 9600
});

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
    serialLog = serialLog + data;
    serData.innerHTML = serialLog;
  });
  serialPort.write("ls\n", function(err, results) {
    if(err) console.log('err ' + err);
    console.log('results ' + results);
  });
});

});


