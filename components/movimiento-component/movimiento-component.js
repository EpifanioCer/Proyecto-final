import { LitElement, html } from "lit";


export default class MovimientoComponent extends LitElement {
        constructor() {
            super();
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
        background-size:cover;
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
        text-align: center;
    }
h1{
    margin-top: 30px;
    color: #fff;
}

#descripcion, #cantidad, h3{
    color:#fff;
    margin-top: 100px;
}
button{
    width: 120px;
    height: 40px;
    border-radius: 10px;
    margin-top: 70px;
}

 </style>

    <section>
        <div class="contenedor">
            <div>
                <h1 id="movimiento">Movimiento 1</h1>
                <h3>Descripcion</h3>
                <p id="descripcion">Deposito a cuenta de terceros</p>
                <p id="cantidad">$5,000.00</p>
                <button>Regresar</button>

            </div>

        </div>
    </section>
    `;
}
}


