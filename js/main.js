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

/* lista de productos a la venta */
const products = [
    {id:1, marca:"nike", modelo: "nike cortez" , precio: 12000},
    {id:2, marca:"adidas", modelo: "shark" , precio:15000 },
    {id:3, marca:"jordan", modelo:"jordan retro 5" , precio:20000 },
    {id:4, marca:"adidas", modelo: "yezzy" , precio:25000 },
]

alert("genial para continuar te vamos a mostrar una lista de nuestros productos")


/* usando forEach para recorrer el objeto y mostrarlo por alert */
products.forEach(item=>{
    alert(`
    id: ${item.id}
    marca: ${item.marca}
    modelo: ${item.modelo}
    precio: $${item.precio}
    `)
})

let selection = parseInt(prompt("ingresa el ID del producto que quieres comprar"))
const sum = (a,b) => a + b;
const subtraction = (a,b) => a - b;
const iva = x => x * 0.21;
const discount = 1500;

for(const product of products){
    if(product.id === selection){
        alert(`excelente eleccion las ${product.modelo} tambien son mis favoritas`)
        const reduction = subtraction(sum(product.precio, iva(product.precio)),discount)
        alert(`el precio de tus ${product.modelo} luego del descuento del hot sale es de ${reduction}`)
        alert ("gracias por visitarnos")
    }
}







