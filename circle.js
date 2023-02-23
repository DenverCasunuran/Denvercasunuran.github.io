let circularProgress = document.querySelector(".mh-professional-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 50,    
speed = 30;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#302e4d ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

{
    let circularProgress = document.querySelector(".teamwork-progress"),
progressValue = document.querySelector(".tprogress-value");

let progressStartValue = 0,    
progressEndValue = 66,    
speed = 30;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#302e4d ${progressStartValue * 3.6}deg, #ededed 0deg)`


if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);
}

{
    let circularProgress = document.querySelector(".creativity-progress"),
progressValue = document.querySelector(".cprogress-value");

let progressStartValue = 0,    
progressEndValue = 85,    
speed = 30;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#302e4d ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);
}

{
    let circularProgress = document.querySelector(".timemanagement-progress"),
progressValue = document.querySelector(".mprogress-value");

let progressStartValue = 0,    
progressEndValue = 90,    
speed = 30;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#302e4d ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);
}
