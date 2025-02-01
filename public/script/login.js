function login(logged,name,password){
    console.log(logged,name,password);
    logged['user']= name;
    logged['password']= password;
    console.log(JSON.stringify(logged));
    
    fetch('/public/files/logged.json',{
        method:'PUT',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(logged)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));
}
//console.log(fs);
document.addEventListener("DOMContentLoaded",function(){
    let user = "default";
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(username);
        if (username === user && password === 'default') {
            fetch('/public/files/logged.json')
            .then(response => response.json())
            .then(data => login(data,username,password))
            .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));
            
            
            window.location.href = '/';
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect');
        }
    });

    
});

