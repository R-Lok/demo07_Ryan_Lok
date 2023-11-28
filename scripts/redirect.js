function redirectUser() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {                   
            windows.location.href = "/main.html"
            
        
        }
    });
}

redirectUser();