function addNewWeField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let weob=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weob.insertBefore(newNode,weAddButtonOb);
}

function addNewAqField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let aqob=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqob.insertBefore(newNode,aqAddButtonOb);
}

function addNewPrField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let prob=document.getElementById("pr");
    let prAddButtonOb=document.getElementById("prAddButton");

    prob.insertBefore(newNode,prAddButtonOb);
}

function addNewInField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("inField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let inob=document.getElementById("in");
    let inAddButtonOb=document.getElementById("inAddButton");

    inob.insertBefore(newNode,inAddButtonOb);
}

function addNewAcField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let acob=document.getElementById("ac");
    let acAddButtonOb=document.getElementById("acAddButton");

    acob.insertBefore(newNode,acAddButtonOb);
}

function addNewSkField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let skob=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skob.insertBefore(newNode,skAddButtonOb);
}

function addNewLkField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("lkField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let lkob=document.getElementById("lk");
    let lkAddButtonOb=document.getElementById("lkAddButton");

    lkob.insertBefore(newNode,lkAddButtonOb);
}

function addNewHiField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hiField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");

    let hiob=document.getElementById("hi");
    let hiAddButtonOb=document.getElementById("hiAddButton");

    hiob.insertBefore(newNode,hiAddButtonOb);
}

function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;




    let lks=document.getElementsByClassName("lkField");
    let str6="";
    for(let e of lks){
        str6=str6+`<li> ${e.value} </li>`;
    }
    document.getElementById("lkT").innerHTML=str6;

    let hbs=document.getElementsByClassName("hiField");
    let str7="";
    for(let e of hbs){
        str7=str7+`<li> ${e.value} </li>`;
    }
    document.getElementById("hbT").innerHTML=str7;




    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("aqField");
    let str1="";
    for(let e of aqs){
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let sks=document.getElementsByClassName("skField");
    let str2="";
    for(let e of sks){
        str2=str2+`<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML=str2;


    let ins=document.getElementsByClassName("inField");
    let str3="";
    for(let e of ins){
        str3=str3+`<li> ${e.value} </li>`;
    }
    document.getElementById("inT").innerHTML=str3;


    let ps=document.getElementsByClassName("prField");
    let str4="";
    for(let e of ps){
        str4=str4+`<li> ${e.value} </li>`;
    }
    document.getElementById("pT").innerHTML=str4;


    let acs=document.getElementsByClassName("acField");
    let str5="";
    for(let e of acs){
        str5=str5+`<li> ${e.value} </li>`;
    }
    document.getElementById("acT").innerHTML=str5;

    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
    document.getElementById("imgT").src=reader.result;
    };


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function printCV(){
    window.print();
}






    
