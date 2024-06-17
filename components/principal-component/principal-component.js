import { LitElement, html } from "lit";


export default class PrincipalComponent extends LitElement {
    constructor() {
        super();
        this.nombre = "";
        this.persona = {};
        this.numCuenta = '',
        this.cuentaNomina= 0,
        this.tdc = 0,
        this.numTarjeta= 0,
        this.movimiento = [];
    }


    static properties = {
        nombre: { 
            type: String
        }
    }

firstUpdated() {
    this.addEventListener('login-datos', (event) => {
        this.persona = event.detail;
        this.nombre = this.persona.nombre;
        this.numCuenta = this.persona.numCuenta;
        this.cuentaNomina = this.persona.cuentaNomina;
        this.tdc = this.persona.tdc;
        this.numTarjeta = this.persona.numTarjeta;
        this.movimiento = this.persona.movimiento;
    
     } 
  );
} 

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
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: url(fondo1.jpeg) no-repeat;
        background-position: center;
        background-size: cover;
    }

    .contenedor {
        position: relative;
        width: 375px;
        border: 2px solid rgba(255, 255, 255, .6);
        border-radius: 30px;
        backdrop-filter: blur(15px);
        height: 616px;
        display: flex;
        justify-content: center;
     }

     h2  {
        font-size: 1.2rem;
        color: #fff;
        text-align: center;
        margin-top: 15px;
    }

 .div-nombre, .div-cuenta{
    border: 2px solid rgba(255, 255, 255, .6);
    display:flex;
    align-items: center;
    margin-top: 20px;
    padding:10px;
    border-radius:10px;
    justify-content: center;
 }
 #nombre, #num-cuenta  {
    font-size: 1.2rem;
    color: #fff;
    text-align: center;  
}
p{
    text-align: center;
    color: #fff;
    font-size: 18px;
    margin-top:15px;
}
.div-tarjeta{
    border: 2px solid rgba(255, 255, 255, .6);
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: 100px;
}
#tarjeta{
    margin: 0;
}
.movimiento {
   margin-top: 40px;
}
    </style> 
    <section>
    <div class="contenedor">
        <div class="formulario">
            <h2>Datos del usuario</h2>
            <h2>Buenos dias Epifanio</h2>
            <div class="div-nombre">
                <h3 id="nombre">${this.nombre}</h3>
            </div>
            <div class="div-cuenta">
                <h3 id="num-cuenta">${this.numCuenta}</h3>
            </div>
            <p>Cuenta nomina  ${this.cuentaNomina}</p>
            <p>Tarjeta de credito ${this.tdc}</p>
            <div class="div-tarjeta">
                <p id="tarjeta">${this.numTarjeta}</p>
            </div>  
            
         <p class="movimiento">movimiento 1</p>
         <p class="movimiento">movimiento 2</p>
         <p class="movimiento">movimiento 3</p>
       
        </div>
    </div>
 </section>

    `;

}
}

