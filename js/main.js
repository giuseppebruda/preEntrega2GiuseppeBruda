alert("bienvenido a  GB sneakers")
alert("aca encontras todos los modelos que siempre quisiste al mejor precio del mercado")
alert("para empezar con tu compra el primer paso es crear un usuario")

/* creando un constructor para definir nuevos usuarios */

class user {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }
}

let userList = [];

function addUser () {
    let email = prompt("ingresa tu email");
    let name = prompt("ingrese su nombre");
    let password = prompt("ingrese su nueva contraseña");

    let newUser = new user (email, name, password);
    userList.push(newUser);
    }

addUser();

alert(`el usuario se creo con exito bienvenido`)