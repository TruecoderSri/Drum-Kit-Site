
var n=document.querySelectorAll(".drum").length;

    for(var i=0;i<n;i++)
    
    //insted of writing a seperate function for alert we can write an anonymous func within the query selector
    //Butto press action
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var button=this.innerHTML;
        makesound(button);
        buttonanimation(button);
    });
 // keyboard press action
    document.addEventListener("keydown",function(event){
      makesound(event.key);

      buttonanimation(event.key);
    });

function makesound(event){
    switch(event){
        case'a':
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case'w':
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case's':
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case'j':
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case'd':
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case'k':
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case'l':
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        default:
            console.log(button);
    }
}

function buttonanimation(currentKey){
    var activeButton= document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
       activeButton.classList.remove("pressed");
    },50);
}