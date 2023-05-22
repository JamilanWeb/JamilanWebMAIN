<h1>URL: </h1>
<p id="URLSTATE"></p>
<script>
var h = document.GetElementById('URLSTATE')
if (window.location.search) {
  h.innerhtml = window.location.search.split("?url=")[0]
  
  
}


   </script>
