var serialPort = require("serialport"),
    utils = require("./libs/utils"),
    serialList = [],
    serCont = document.getElementById("serialCont");

// lists the possible com port in the serialList array
serialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    serialList.push(port.comName);
  });
  // set inner html text with the list
  serCont.innerHTML = utils.displaySerialList(serialList);
});

