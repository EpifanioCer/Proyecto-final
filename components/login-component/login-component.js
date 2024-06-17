import { LitElement, html } from "lit";

export default class LoginComponent extends LitElement{
    constructor() {
        super();
        this.persona = {
            user: "",
            password: "",
            nombre: "Epifanio Cerqueda Juan",
            numCuenta: '0011002200330044',
            cuentaNomina: 15000,
            tdc: 11000,
            numTarjeta: '123456789101112',
            movimientos: [
                {nombreMovimiento: 'cine', cantidad: 300, descripcion: 'cobro de cinepolis', fecha: '23/06/2024'},
                {nombreMovimiento: 'amazon', cantidad: 800, descripcion: 'cobro de amazon', fecha: '21/06/2024'},
                {nombreMovimiento: 'pago de cuenta de terceros', cantidad: 1200, descripcion: 'renta', fecha: '23/06/2024'}
            ]

        };
        
    }
login() {
    const inputUsuario = this.shadowRoot.getElementById("usuario").value;
    console.log(this.persona.nombre);

    const inputPassword = this.shadowRoot.getElementById("password").value;
    console.log(this.persona.password);

    if(this.persona.user === inputUsuario && this.persona.password === inputPassword) {
        console.log("se logro");
        this.style.display = "none";
        // document.querySelector('principal-component');
        const principalComponent = document.querySelector('principal-component');
        principalComponent.style.display = "block";
    
        principalComponent.dispatchEvent(new CustomEvent('login-datos', {composed: true, bubbles: true, detail: this.persona}))
        
    } else {
        alert("Usuario Erroneo");
    }
}; 



render() {
   
    return html
    `
   <style>
   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: url(fondo1.jpeg) no-repeat;
    background-position: center;
    background-size: cover;
}

.contenedor{
    position: relative;
    width: 375px;
    border: 2px solid rgba(255, 255, 255, .6);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    height: 616px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenedor h2 {
    font-size: 2.3rem;
    color: #fff;
    text-align: center;
}

.input-contenedor {
    position: relative;
    margin: 30px 0;
    width: 300px;
    border-bottom: 2px solid #fff;
}

.input-contenedor label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1rem;
    pointer-events: none;
    transition: .6s;
    font-weight: bold;
}
input:focus ~ label, 
input:valid ~ label{
    top: -5px;
}

.input-contenedor input{
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: -35px 0 5px;
    color: #fff;
}
button{
    width: 100%;
    height: 45px;
    border-radius: 40px;
    background-color: #fff;
    border: none;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    transition: .4s;
}
button:hover{
    opacity: .9;
}
   </style>
   <section>
<div class="contenedor">
    <div class="formulario">
        <h2>LOGIN</h2>
        <div class="input-contenedor">
            <input id="usuario" type="Text" requerid>
            <label for="#">Usuario</label>
        </div>
        <div class="input-contenedor">
            <input id="password" type="password" requerid>
            <label for="#">Contraseña</label>
        </div>
        <div>
            <button @click=${this.login} >Acceder</button>
        </div>
    </div>
</div>
</section>
    `;
}

    
// cambiarTexto() {
//     this.text = 'ADIOS';
// }
}