var AccessedPages;

var Access_Check = function() {
  var errorlist = ["", "PLEASE ENTER A COMMAND", "BRO STUPID"]
  var output = Math.floor(Math.random() * 3)
  console.error(errorlist[output])
}

Access_Check.CheckAccess = function(pageid) {
  if (pageid=="s$"+100) {
    var check_start = localStorage.getItem("AccessLevel");
    if (check_start=="$file"+9089+6912+"$$$$") {
      Access_Check.Result = "..?..0"
    } else {
      Access_Check.Result = "??/ADM.IN/]]]Needed"
    }
  }
}
