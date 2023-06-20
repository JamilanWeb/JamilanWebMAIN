
document.write = function(text) {
  console.error("This has been turned off due to Security concerns")
}

window.alert = function(text) {
  var co2 = document.createElement("dialog")
  var html = "<h1 id='mainText'></h1><button onclick='co2.open = false'>Close</button>"
  co2.innerHtml = html
  var co3 = document.getElementById("mainText")
  co3.textContent = text
  co2.open = true
}
