function togglePopup(componente){
    document.getElementById("popup-1").classList.toggle("active")
    var matricula = componente.getAttribute("data-matricula");
}