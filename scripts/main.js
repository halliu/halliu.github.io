let myheading = document.querySelector("h1");
myheading.textContent = "Hello world!";

let mybutton=document.querySelector("button");
function setusername(){
    let myname=prompt("please input your name.");
    if (!myname){
        setusername();
    } else {
        localStorage.setItem("name", myname);
        myheading.textContent="Mozilla is cool, "+myname;
    }
}

if(!localStorage.getItem("name")){
    setusername();
} else {
    let storedname=localStorage.getItem("name");
    myheading.textContent="Mozilla is cool, "+storedname;
}

mybutton.onclick=function(){
    setusername();
}