document.addEventListener("DOMContentLoaded",function(){
    /*
    const classes = document.getElementsByClassName('class');
    const submit = document.getElementById('submit-test');
    const navBtn = {
        prev:document.getElementById('prev'),
        next:document.getElementById('next'),
    }
    
    var index = new Array(2).fill(0);
    const number = classes.length;
    const six = 6;

    navBtn.prev.addEventListener("click",function(){
        if(index[1]==5){
            index[1]=1;
            index[0]=0;
            //console.log(index[1])
        }
        else{
            index[0]--;
            index[0]+=six;
            index[0]%=six;
            if(index[0]==5)
                index[1]--;
        }
        actual();
    })
    navBtn.next.addEventListener("click",function(){
        if(index[1]==0){
            index[1]++;
        }
        else{
            index[0]++;
            index[0]%=six;
            if(index[0]==0)
                index[1]++;
        }
        
        //index[1]%=number;
        actual();
    })
    submit.addEventListener("click",function(){
        index[1]=5;
        actual();
    })
    
    actual();

    function actual(){
        for(let i=0;i<Object.keys(classes).length;){
            classes[i].style.display= i!=index[1]?"none":"";
            if(index[1]!=0 && index[1]!=5 && i==index[1]){
                for(let j=0;j<6;j++){
                    //console.log(classes[i].children[2+j]);
                    classes[i].children[2+j].style.display = j!=index[0]?"none":"";
                }
            }
            //console.log(classes[i].children);
            i++; 
        }

        navBtn.next.value = index[1]==0?"Commencer":"Prochain";
        navBtn.prev.value = index[1]==5?"Revisionner les réponses":"Précédent";
        navBtn.prev.style.display = index[1]==0||index[1]==1&&index[0]==0?"none":"";
        navBtn.next.style.display = index[1]==5||index[1]==4&&index[0]==5?"none":"";
        submit.style.display = index[1]!=4||index[0]!=5?"none":"";
        console.log("1",index[1],"\n0",index[0]);


        scrollTo(top);
    }
    */  
})