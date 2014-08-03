var serialPort = require("serialport"),
    serialList = [],
    serCont = document.getElementById("serialCont"),
    serlist,
    optList ="",
    optListPre="<select>",
    optListPost="</select>",
    optListString,
    app = {},
    testor;

// lists the possible com port in the serialList array
serialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    serialList.push(port.comName);
  });
  testor = app.displaySerialList();
  serCont.innerHTML = testor;
});

// display the possible serial port
app.displaySerialList=function () {
  serialList.forEach(function (port) {
    optList = optList + '<div>'+port+'</div>';
  })
    return optList;
}
// display the possible serial port in an option list
app.makeSerialOpt=function () {
  serialList.forEach(function (port) {
    optList = optList + '<option value="' + port + '">'+port+'</option>';
  })
    var optString = optListPre + optList + optListPost
    return optString;
}





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