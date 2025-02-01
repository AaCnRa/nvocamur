document.addEventListener("DOMContentLoaded",function(){

    const header = this.getElementsByTagName('header')[0];
    const main = this.getElementsByTagName('main')[0];
    
    var prevScrollPos = window.scrollY;
    headerNav();

    window.onscroll = headerNav;

    function headerNav(){
        var currentScrollPos = window.scrollY;
        
        if(prevScrollPos>currentScrollPos){
            header.classList.remove("hide");
            header.classList.add("show");
        }
        else if(prevScrollPos<currentScrollPos){
            header.classList.remove("show");
            header.classList.add("hide");
        }


        if(header.classList.contains("show")){
            header.style.top = 0;
            main.style.marginTop = header.clientHeight+"px";
        }
        else{
            header.style.top = -header.clientHeight+"px"
            main.style.marginTop = 0;
        }

        prevScrollPos = currentScrollPos;
        //console.log(nav.classList.contains("show"));
    }
})