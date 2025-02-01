async function dynamize(){
    let utils = document.getElementById('utils');
    let move = utils.firstElementChild;
    utils.removeChild(move);
    utils.appendChild(move);
    
    //console.log(utils.children)
    //console.log(display)
    //let shiftelement = display.shift();
    
    //const move = display[0];

    for(i in utils.children){
        utils.children[i].style.display = i<3? "":"none";
    }
    //console.log(utils);
    //console.log('first : ',first);
    /*
    //display = display.shift();
    //console.log(display);
    */
}

document.addEventListener("DOMContentLoaded",function () {
    document.getElementById('testing').addEventListener("click",dynamize);
})