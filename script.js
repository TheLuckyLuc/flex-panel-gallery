const panels = document.querySelectorAll(".panel");

for (panel of panels) {
    panel.addEventListener("click", function(){
        this.classList.toggle("open");
    });
}