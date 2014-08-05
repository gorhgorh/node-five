var SerialPort = require("serialport"),
    utils = require("./libs/utils"),
    serialList = [],
    serCont = document.getElementById("serialCont"),
    btSub = document.getElementById("btSub"),
    app = {},
    testor;

// populate a list with serial connections
SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    serialList.push(port.comName);
  });
  serCont.innerHTML = utils.makeSerialOpt(serialList);
});

// listen to the go button click
btSub.addEventListener('click', function() { getVal(); }, false);

// get the serialport selected value
function getVal() {
  var e = document.getElementById("serialCont");
  var strUser = e.options[e.selectedIndex].value;
  return strUser;
}




