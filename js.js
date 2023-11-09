document.addEventListener('DOMContentLoaded', function(){

    window.addEventListener('scroll', function(){
        let menu = document.querySelector('.menu');
        menu.classList.toggle('abajo', window.scrollY>0) 
    
    });

/*------------------------ Swipper Animation-----------------------------*/

const app = document.querySelector(`#typewriter`);

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
.typeString(`La Cuidad Del Valle Del Software`)
.pauseFor(200)
.start(); 


document.addEventListener('mousemove', move);

function move(e){
    this.querySelectorAll('.move').forEach(layer=>{
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerWidth - e.pageY*speed)/120
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


const btnSignIn = document.querySelector("#sign-in");
const btnSignUp = document.querySelector("#sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");


btnSignIn.addEventListener("click", e =>{
    formRegister.classList.add("hid");
    formLogin.classList.remove("hid");
})

btnSignUp.addEventListener("click", e =>{
    formLogin.classList.add("hid");
    formRegister.classList.remove("hid");
})







/*--------------------> Objecto <--------------------*/

const email = {
    nombre:'',
    email:'',
    password:''
}


//-----------------> Variables <------------------//

const inNombre = document.querySelector('#Nombre_Completo');
const inEmail = document.querySelector('#Email');
const inPassword = document.querySelector('#Password');
const formulario = document.querySelector('#formulario');
const btnSubmit = document.querySelector('#boton');



//-----------------> Objeto Email <------------------//

inNombre.addEventListener('blur', validar);
inEmail.addEventListener('blur', validar);
inPassword.addEventListener('blur', validar);



function validar(e){
    if(e.target.value.trim()=== ''){

        //-----------------> Alert HTML <------------------//
        mostrarAlerta(`El Campo ${e.target.id} Es Obligatorio`, e.target.parentElement.parentElement);
        email[e.target.name] = '';
        comprobarEmail();
        return;
    }

if(e.target.id === 'Email' && !valueEmail(e.target.value)){
    mostrarAlerta('Ingresa Un E-mail Valido', e.target.parentElement);
    email[e.target.name] = '';
    comprobarEmail();
    return;
}

if(e.target.id === 'Password' && !valuePassword(e.target.value)){
    mostrarAlerta('Ingresa Una Cedula Valida Valido', e.target.parentElement);
    email[e.target.name] = '';
    comprobarEmail();
    return;
}

//-----------------> Function Clean Alert <------------------//
cleanAlert(e.target.parentElement.parentElement);


//-----------------> asignar valores al objeto <-----------------//
email[e.target.name] = e.target.value.trim().toLowerCase();
comprobarEmail();
}


function mostrarAlerta(mensaje, referencia){

    const alert = referencia.querySelector('.bg-danger');
    if(alert){
        alert.remove();
    }

    //-----------------> Alert HTML <------------------//
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('bg-danger','text-white', 'p-1', 'text-center','m-2');

    //-----------------> Add Error <------------------//
    referencia.appendChild(error);
}

function cleanAlert(referencia){

    //-----------------> Remove Alert <------------------//
    const alert = referencia.querySelector('.bg-danger');
    if(alert){
        alert.remove();
    }
}


function valueEmail(email){
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,7})$/;
    const result = emailRegex.test(email);
    return result;
}

function valuePassword(password){
    const numberRegex = /^-?\d+$/;
    const result = numberRegex.test(password);
    return result;
}


function comprobarEmail(){
    if(Object.values(email).includes('')){
        btnSubmit.classList.add('opacity-50');
        btnSubmit.disable = true;
    }
    else{
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disable = false; 
    }
}


});