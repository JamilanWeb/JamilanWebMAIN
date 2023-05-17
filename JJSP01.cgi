<script>
  CheckCurrentURL()
  function CheckCurrentURL() {
    var blocked = ["https://jamilan.ml"]
    var num = 0
    while (num<1) {
      if (window.location.href==blocked[num]) {
        document.write("<h1>Nope</h1>")
        document.write("<p>Reason: because</p>")
      }
    }  
  
  


  }
</script>
