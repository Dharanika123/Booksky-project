var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-popup-button");
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
}
)

var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
     popupoverlay.style.display="none";
    popupbox.style.display="none";
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book");
var addtitle=document.getElementById("title");
var addauthor=document.getElementById("book-author");
var adddescription=document.getElementById("description");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h1>${addtitle.value}</h1>
    <h4>${addauthor.value}</h4>
    <p>${adddescription.value}</p>
       <button onclick="del(event)">Delete</button>  `

    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";

     addtitle.value = "";
    addauthor.value = "";
    adddescription.value = "";
})

function del(event){
    event.target.parentElement.remove();
}





