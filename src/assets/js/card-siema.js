function resizePage(x){
  if (window.matchMedia("(min-width: 1024px)").matches) {
    cosole.log("trop grand")
  }
  else {
    class SiemaWithDots extends Siema {

       addDots() {
         this.dots = document.createElement("div");
         this.dots.classList.add("dots");

         for(let i = 0; i < this.innerElements.length; i++) {
           const dot = document.createElement("button");

           dot.classList.add("dots__item");

           dot.addEventListener("click", () => {
             this.goTo(i);
           })

           this.dots.appendChild(dot);
         }

         this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
       }

       updateDots() {
         for(let i = 0; i < this.dots.querySelectorAll("button").length; i++) {
           const addOrRemove = this.currentSlide === i ? "add" : "remove";
           this.dots.querySelectorAll("button")[i].classList[addOrRemove]("dots__item--active");
         }
       }
    }

    const mySiemaWithDots = new SiemaWithDots({
      onInit: function(){
        this.addDots();
        this.updateDots();
      },
      onChange: function(){
        this.updateDots()
      },
    });
  }
}
var x = window.matchMedia("(max-width: 1024px)");
resizePage(x);
x.addListener(resizePage);