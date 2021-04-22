const includeHTML = () => {
  let z, i, element, file, xhttp;
  z = document.getElementsByTagName("import");
  for (i = 0; i < z.length; i++) {
    element = z[i];
    file = element.getAttribute("src");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { element.innerHTML = this.responseText; }
          if (this.status == 404) { element.innerHTML = "Page not found."; }
          element.removeAttribute("src");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};