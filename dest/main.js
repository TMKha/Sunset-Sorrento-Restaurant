// change lang
function changeLang() {
    let langCurrent= document.querySelector(' .lang .lang__current .lang__current-text');
    let lang= document.querySelector(' .lang' );
    let langItems = document.querySelectorAll(' .lang .lang__select .lang__select-item')
    langCurrent.addEventListener('click',(e)=>{
        lang.classList.toggle('active');
        e.stopPropagation();
    })
    langItems.forEach(item=>{
        item.addEventListener('click',()=>{
            let langSelectItem = item.textContent; //y
                    let langTemp= langCurrent.textContent // temp=x
                    langCurrent.textContent=  langSelectItem; // x= y
                    item.textContent= langTemp; // y = temp 
        })
    })
    document.addEventListener('click',()=>{
        lang.classList.remove('active');
    })
    
}
changeLang();  
// popup video
function popUpVideo(){
    let video = document.querySelector(' .video .video__play');
    let popUp = document.querySelector('.popupvideo');
    let btnClose = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-close');
    let iframe = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe ')
    
    video.addEventListener('click',(e)=>{
        popUp.classList.toggle('active')
        let idVideo = video.getAttribute('data-video-src')
         iframe.setAttribute('src',`https://www.youtube.com/embed/${idVideo}?autoplay=1`)
    })
   function hidePopup(){
    popUp.classList.remove('active')
    iframe.setAttribute('src',"")
   }
    btnClose.addEventListener('click',()=>{
        hidePopup()
    })
    popUp.addEventListener('click',()=>{
        hidePopup()
    })
 
}
// back to top
function backToTop(){
    let back = document.querySelector('.iconback');
    let slider = document.querySelector('.--scfirst').clientHeight;
    console.log(slider)
    
    window.addEventListener('scroll',(e)=>{
        if(window.pageYOffset > slider){
            back.classList.add('display');
        }
        else{
            back.classList.remove('display');
        }
    })

    back.addEventListener('click',(e)=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",

        })
    })
  
}

function scrollHeader(){
    let header= document.querySelector('header');
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset >200)
        {
            header.classList.add('header');
        }
        else{
            header.classList.remove('header');

        }
    })
}
//  menu mobile
function menuMobile(){
    let btn = document.querySelector('.lang .btnmenu');
    let nav = document.querySelector('.nav');
    btn.addEventListener('click',()=>{
       btn.classList.toggle('active') 
       nav.classList.toggle('active') 
    })

    window.addEventListener('resize',()=>{
       let wWindow=window.innerWidth;
       if(wWindow>992)
              {
                btn.classList.remove('active') 
                nav.classList.remove('active') 
              }
    })

}
menuMobile()
function sliderPlace(){
    let place = document.querySelector('.place-wrapper');
    let flktyPlace ;
    function flkty(){
        let wTablet = window.innerWidth;
        if(wTablet < 992){
           
        flktyPlace = new Flickity( place, {
          wrapAround: true,
          prevNextButtons: true,
          draggable: false,
          pageDots:false,
          groupCells:2,
           });
        }
        else{
            if(flktyPlace)
            {
                flktyPlace.destroy();

            }
           
            
        }
    }
    window.addEventListener('resize',()=>{
        flkty();
    
    })
    window.addEventListener('load',()=>{
        flkty();
    
    })
    
}
function sliderEvents(){
    let events = document.querySelector('.events__list')
    let flktyEvents;
    // var blog = document.querySelector('.ourblog__list');
    function flkty(){
        let wTablet = window.innerWidth;
        if(wTablet < 992){
            flktyEvents = new Flickity( events, {
            wrapAround: true,
            contain: 'center',
            prevNextButtons: true,
            draggable: false,
            pageDots:false,
            lazyLoad:1,
            });
    
       
        }
        else{
             if(flktyEvents)
            {
                flktyEvents.destroy();
            }
            
        }
    }
    window.addEventListener('resize',()=>{
        flkty();
    
    })
    window.addEventListener('load',()=>{
        flkty();
    
    })
    
}

function sliderBlog(){
    let flktyBlog;
    var blog = document.querySelector('.ourblog__list');
    function flkty(){
        let wTablet = window.innerWidth;
        if(wTablet < 992){
           
          flktyBlog = new Flickity( blog, {
         wrapAround: true,
         contain: 'center',
         prevNextButtons: true,
         draggable: false,
         pageDots:false,
         lazyLoad:1,
          });
          
        }
        else{
             if(flktyBlog)
            {
                flktyBlog.destroy();
            }
            
        }
    }
    window.addEventListener('resize',()=>{
        flkty();
    
    })
    window.addEventListener('load',()=>{
        flkty();
    
    })
    
}
// services



const index = document.querySelector("#homepage")
const services = document.querySelector("#services")


// hàm chung cho tất cả page
backToTop();
scrollHeader()
// điều kiện gọi hàm
if(index){
    popUpVideo()
sliderBlog()
sliderEvents()
sliderPlace()
window.addEventListener('load', (event) => {

    function carouselSlider() {
        var elem = document.querySelector('.slider__list');
        var flktySlider = new Flickity( elem, {
      // options
        contain: true,
        wrapAround: true,
        draggable: '>1',
        prevNextButtons: false,
        pageDots: false
        });
        let btnNext= document.querySelector('.btnctr.--next')
        console.log(btnNext)
        let btnPre= document.querySelector('.btnctr.--pre')
        btnNext.addEventListener('click',(e)=>{
            e.preventDefault();
            flktySlider.next( true )
        })
        btnPre.addEventListener('click',(e)=>{
            e.preventDefault();
            flktySlider.previous( false )
            
        })
    }
    
    function sliderMessage() {
        var elem = document.querySelector('.slider-message');
        var flktySlider = new Flickity( elem, {
      // options
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: false,
        });
        let btnNext= document.querySelector('.message__control-next')
        let btnPre= document.querySelector('.message__control-pre')
        btnNext.addEventListener('click',(e)=>{
            e.preventDefault();
            flktySlider.next( true )
        })
        btnPre.addEventListener('click',(e)=>{
            e.preventDefault();
            flktySlider.previous( false )
            
        })
    }
    function carouselShowImg() {
        
        var elem = document.querySelector('.show .show-carousel');
        var flkty = new Flickity( elem, {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          draggable: '>1',
          prevNextButtons: false,
          pageDots:false,
        });
    }
    // khi màn hình dưới tablet thì mới gọi slider
    sliderMessage()
    carouselShowImg()
    carouselSlider()
});

}
else if(services){
    window.addEventListener('load', (event) => {
        function carouselBeservices() {
            var elem = document.querySelector('.bestservices__slider');
            var flkty = new Flickity( elem, {
              contain: true,
              wrapAround: true,
              draggable:false,
              pageDots:true,
            });
        }
        // khi màn hình dưới tablet thì mới gọi slider
        carouselBeservices()
    });
}



