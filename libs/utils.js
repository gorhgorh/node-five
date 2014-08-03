module.exports.displaySerialList = displaySerialList;
module.exports.makeSerialOpt = makeSerialOpt;

// display the possible serial port
function displaySerialList (arr) {
  var optList="";
  arr.forEach(function (port) {
    optList = optList + '<div>'+port+'</div>';
  });
    return optList;
}
// display the possible serial port in an option list
function makeSerialOpt(arr,optListPre,optListPost) {
  console.log(optListPre);
  var optList="";
  arr.forEach(function (port) {
    optList = optList + '<option value="' + port + '">'+port+'</option>';
  })
    var optString = optListPre + optList + optListPost
    return optString;
}