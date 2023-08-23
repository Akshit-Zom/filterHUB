let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let tittle = document.getElementById("tittle");
let nameField = document.getElementById("nameField");


let sign = signinBtn.onclick = function(){

        nameField.style.maxHeight = "0";
        tittle.innerHTML= "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");   
        let Email = document.getElementById("Email");
        let Password = document.getElementById("Password");
        var email = Email.value;
        var password = Password.value;
        console.log(email,password);

        if(email === 'admin' && password === 'admin')
            {
                window.location.href = "file:///D:/sem1/web/FilterHUB%20beta/parallaxScrolling/ps.html";
            }
            else if(email === '' && password === ''){
                sign();     
            }
            else{
                alert("try again"); 
            }
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    tittle.innerHTML= "Sign Un";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}




