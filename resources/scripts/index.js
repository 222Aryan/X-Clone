function renderError(message){
	document.getElementById('sign_in_error').innerHTML = message;
}

function submitHandler(e){
    e.preventDefault();
    console.log('hello from custom event handler',e);

    const username = document.getElementById('sign_in_username').value; 
    const password = document.getElementById('sign_in_password').value;
    
    console.log(username,password);

    const authData = JSON.parse(localStorage.getItem('auth')) || [];

    let userFound = false;
    let password_from_auth ='';
    for (userObj of authData){
        if (userObj.username === username){
            userFound = true;
            password_from_auth = userObj.password;
        }
    }
    if (!userFound){
        renderError("Username not found.Please SignUp first");
        return;
    }
    renderError('');
    if (password != password_from_auth){
        renderError("Incorrect password. Please try again");
    }
    else{
        renderError('');
        localStorage.setItem
        location.href='home.html'
    }

}

const formHTMLEle = document.getElementById('login-form-container-id');
formHTMLEle.addEventListener('submit', (e) => submitHandler(e))