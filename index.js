let carousel = document.querySelector('.carousel')

class Carousel {

    /**@param {HTMLElement} carousel */
    constructor(carousel){

        this.carousel = carousel
        this.slides = [...this.carousel.children]
        this.sildeWidth = this.slides[0].getBoundingClientRect().width
        /**@type {HTMLElement} */
        this.leftBtn  = document.querySelector('#left')
        /**@type {HTMLElement} */
        this.rightBtn = document.querySelector('#right')

        this.leftBtn.addEventListener('click',()=>{
            /**@type {HTMLElement} */
            const currentSlide = this.carousel.querySelector('.active')
            const target = currentSlide.previousElementSibling
            this.hideBtn(target)
            this.mooveTo(currentSlide,target)
        })

        this.rightBtn.addEventListener('click',()=>{
            /**@type {HTMLElement} */
            const currentSlide = this.carousel.querySelector('.active')
            const target = currentSlide.nextElementSibling
            this.hideBtn(target)
            this.mooveTo(currentSlide,target)
        })

        this.positionSlide()
      
    }

    positionSlide(){
        for (let i = 0; i < this.slides.length; i++) {
            /**@type {HTMLElement} */
            const slide = this.slides[i];
            slide.style.left = `${i * this.sildeWidth}px`
        }
    }

    /** 
     * @param {HTMLElement} currentSlide
     * @param {HTMLElement} target
     */
    mooveTo(currentSlide,target){
        const position = target.style.left
        this.carousel.style.transform = `translateX(-${position})`
        currentSlide.classList.remove('active')
        target.classList.add('active')
    }

    /**@param {HTMLElement} target */
    hideBtn(target){
        if(target == this.slides[0]){
           this.leftBtn.style.display = 'none'
        }else if (target == this.slides[this.slides.length - 1 ]){
            this.rightBtn.style.display = 'none'
        }else{
            this.rightBtn.style.display = 'block'
            this.leftBtn.style.display = 'block'

        }
    }
}

new Carousel(carousel)