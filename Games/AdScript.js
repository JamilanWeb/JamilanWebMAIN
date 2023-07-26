var exit = function(ID) {
  document.top.getElementById("AdBox"+ID).setAttribute("hidden", "true")
}

var info = function(AdID) {
  document.getElementById("INFOCONTAINER").removeAttribute("hidden")
}

