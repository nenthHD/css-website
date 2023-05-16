function openNav() {
  document.getElementById("navbar").style.width = "250px";
  document.getElementById("logo").style.width = "0px";
  document.getElementById("container").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
  document.getElementById("logo").style.width = "auto";
  document.getElementById("container").style.marginLeft= "0";
}