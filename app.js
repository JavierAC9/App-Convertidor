
document.getElementById("output").style.visibility = "hidden";
document.getElementById("mtsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let mts = e.target.value;
  document.getElementById("cmOutput").innerHTML = mts * 100;
  document.getElementById("kmOutput").innerHTML = mts / 1000;
  document.getElementById("pulgadaOutput").innerHTML = mts * 39.37;
});
