document.getElementById("alert-name").onclick=function(){
    alert("Mohsin Mustafa Ansari")
    document.getElementById("Original").innerHTML="alert('Mohsin Mustafa Ansari')"
}
document.getElementById("alert-number").onclick=function(){
    alert("5")
    document.getElementById("Original").innerHTML="alert('5')"
}
document.getElementById("var-name").onclick=function(){
    document.getElementById("output").innerHTML="<ul><li> A variable name can't contain any spaces</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. If you assign the string Floribundas to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li>  </ul>"
  
}
document.getElementById("camel-case").onclick=function(){
    document.getElementById('output').innerHTML="<ul><li>User</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></ul>"
}

document.getElementById("sum-number").onclick=function(){
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    document.getElementById("Original").innerHTML="let num1=10;<br> let num2=5;<br> let sum=num1 + num2;"
    document.getElementById("output").innerHTML=sum;
}
document.getElementById("sub-number").onclick=function(){
    let num1 = 10;
    let num2 = 5;
    let substract = num1 - num2;
    document.getElementById("Original").innerHTML="let num1=10;<br> let num2=5;<br> let substract=num1 - num2;"
    document.getElementById("output").innerHTML=substract;
}
document.getElementById("mul-number").onclick=function(){
    let num1 = 10;
    let num2 = 5;
    let multiply = num1 * num2;
    document.getElementById("Original").innerHTML="let num1=10;<br> let num2=5;<br> let multiply=num1 * num2;"
    document.getElementById("output").innerHTML=multiply;
}
document.getElementById("div-number").onclick=function(){
    let num1 = 10;
    let num2 = 5;
    let divide = num1 / num2;
    document.getElementById("Original").innerHTML="let num1=10;<br> let num2=5;<br> let divide=num1 / num2;"
    document.getElementById("output").innerHTML=divide;
}
document.getElementById("cal-number").onclick=function(){
    let someCalulation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("Original").innerHTML="let someCalulation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);"
    document.getElementById("output").innerHTML=someCalulation;
}
document.getElementById("Clear-statement").onclick=function(){
    document.getElementById("Original").innerHTML=" "
}
document.getElementById("Clear-output").onclick=function(){
    document.getElementById("output").innerHTML=" "
}


//Toastify 
const toastifySuccess = (msg) =>{
    Toastify({
    text: msg,
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    
  }).showToast();
} 

// clear output 
document.getElementById("Clear-output").onclick =function(){
    document.getElementById("output").innerHTML=" ";
    toastifySuccess("The output has been cleared")
    
    audio.play();

    
}
//clear statement 
document.getElementById("Clear-statement").onclick = function(){
    document.getElementById("Original").innerHTML = " ";
    toastifySuccess("The orignal statement has been cleared")
    audio.play();
}