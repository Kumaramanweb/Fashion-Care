
const menu = document.querySelector("#menu");
const navBar = document.querySelector(".rightNav");
const back_button = document.querySelector("#back-btn");
const cart_btn = document.querySelector("#cart-icon")

if(menu){
    menu.addEventListener('click' , ()=>{
        navBar.classList.add('active');
        menu.classList.add('absent');
        cart_btn.style.opacity = 0;
    })

 

    
}

if(back_button){
    back_button.addEventListener('click', ()=>{
        navBar.classList.remove('active');
        menu.classList.remove('absent');
    })
}

// script for single product page ........................................................................

// when i click to small image the main image change

    let big= document.querySelector("#main-img");
    let small1 = document.querySelector("#small-img1");
    let small2 = document.querySelector("#small-img2");
    let small3 = document.querySelector("#small-img3");
    let small4 = document.querySelector("#small-img4");


    small1.onclick=function(){
        big.src= small1.src
    }
    small2.onclick=function(){
        big.src= small2.src
    }
    small3.onclick=function(){
        big.src= small3.src
    }
    small4.onclick=function(){
        big.src= small4.src
    }





    


  
   
   
  


