document.addEventListener("DOMContentLoaded",function(){
    let user = "default";
    let form = document.getElementById('signup-form');
    form.addEventListener('reset',function(){
        history.back();
    })
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementsByClassName('password');
        /*console.log(username);
        console.log(password[0])
        console.log(password[1])*/
        if (password[0].value===password[1].value) {
            window.location.href = '/';
        } else {
            alert('Mots de passe incohérents');
        }
    });

    
});