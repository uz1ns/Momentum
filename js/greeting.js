const loginForm = document.querySelector("#login-form");
    const USERNAME_KEY = "userName";
    const isUserName = (localStorage.getItem(USERNAME_KEY));
    if(isUserName === null){
        // show the form
        loginForm.classList.remove("hidden");
    } else {
        // show the greetings
        paintGreetings(isUserName);
        loginForm.classList.add("hidden");
    }

    
    function loginClick(event) {
        const HIDDEN_CLASSNAME = "hidden";
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const userName = document.querySelector("#login-form input").value;
        
        const greeting = document.querySelector("#greeting");
        localStorage.setItem(USERNAME_KEY, userName);
        // greeting.innerText = "Hello "+ userName;
        greeting.innerText = `Hello, ${userName}!`;

        const todoBlank = document.querySelector("#todo-form");
        todoBlank.classList.remove("hidden");

        const todoList = document.querySelector("#todo-list");
        todoList.classList.remove("hidden");
    }
    
    loginForm.addEventListener("submit", loginClick);
    
    function paintGreetings(userName){
        const HIDDEN_CLASSNAME = "hidden";
        greeting.innerText = `Hello, ${userName}!`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }