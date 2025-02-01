document.addEventListener("DOMContentLoaded",function(){
    /*const values = new Array(24).fill(0);
    //console.log(values);

    const modules = {
        0:document.getElementsByClassName('iar'),
        1:document.getElementsByClassName('iai'),
        2:document.getElementsByClassName('iaa'),
        3:document.getElementsByClassName('ias'),
        4:document.getElementsByClassName('iae'),
        5:document.getElementsByClassName('iac'),
        6:document.getElementsByClassName('ior'),
        7:document.getElementsByClassName('ioi'),
        8:document.getElementsByClassName('ioa'),
        9:document.getElementsByClassName('ios'),
        10:document.getElementsByClassName('ioe'),
        11:document.getElementsByClassName('ioc'),
        12:document.getElementsByClassName('ar'),
        13:document.getElementsByClassName('ai'),
        14:document.getElementsByClassName('aa'),
        15:document.getElementsByClassName('as'),
        16:document.getElementsByClassName('ae'),
        17:document.getElementsByClassName('ac'),
        18:document.getElementsByClassName('pr'),
        19:document.getElementsByClassName('pi'),
        20:document.getElementsByClassName('pa'),
        21:document.getElementsByClassName('ps'),
        22:document.getElementsByClassName('pe'),
        23:document.getElementsByClassName('pc'),
    }
    
    const submit = this.getElementById('submit-test');
    const cells = this.getElementById('result-table').getElementsByTagName('td');
    

    submit.addEventListener("click",function(){
        countChecked(cells,modules,values);
        /*        
        if(number==0){
            cells[24].innerHTML=parseInt(cells[0].innerHTML)+parseInt(cells[6].innerHTML)+parseInt(cells[12].innerHTML)+parseInt(cells[18].innerHTML);
            cells[25].innerHTML=parseInt(cells[1].innerHTML)+parseInt(cells[7].innerHTML)+parseInt(cells[13].innerHTML)+parseInt(cells[19].innerHTML);
            cells[26].innerHTML=parseInt(cells[2].innerHTML)+parseInt(cells[8].innerHTML)+parseInt(cells[14].innerHTML)+parseInt(cells[20].innerHTML);
            cells[27].innerHTML=parseInt(cells[3].innerHTML)+parseInt(cells[9].innerHTML)+parseInt(cells[15].innerHTML)+parseInt(cells[21].innerHTML);
            cells[28].innerHTML=parseInt(cells[4].innerHTML)+parseInt(cells[10].innerHTML)+parseInt(cells[16].innerHTML)+parseInt(cells[22].innerHTML);
            cells[29].innerHTML=parseInt(cells[5].innerHTML)+parseInt(cells[11].innerHTML)+parseInt(cells[17].innerHTML)+parseInt(cells[23].innerHTML);
        }
    })*/
})

async function countChecked(cells,modules,values){
    for(let i=0;i<Object.keys(modules).length;i++){
        //console.log(i);
        values[i]=0;
        //console.log(modules[i].length);
        for(let j=0;j<modules[i].length;j++){
            values[i]+=modules[i][j].type=="checkbox"?modules[i][j].checked:/*parseInt(modules[i][j].value)*/1;
        }
        
        if(isNaN(values[i])){
            values[i]=0;
            alert("Certaines entrées ne sont pas correctes pour les aptitudes.");
            return(1);
        }
    }
    for(let i=0;i<Object.keys(modules).length;i++){
        cells[i].innerHTML=values[i];
    }
    for(let i=0;i<6;i++){
        cells[24+i].innerHTML=values[i]+values[6+i]+values[12+i]+values[18+i];
    }
    return 0;
}