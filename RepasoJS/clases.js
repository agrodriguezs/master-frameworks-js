class Coche {
    constructor(model, year, marca, velocidad) {
        this.model = model;
        this.year = year;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    aumentarVelocidad(){
        this.velocidad += 10;
    }

    reducirVelocidad(){
        this.velocidad -= 10;
    }
}
/* Herencia*/
class Autobus extends Coche {
    constructor(model, year, marca, velocidad,asientos, altura){
        super(model,year,marca,velocidad);
        this.numeroAsientos = asientos;
        this.altura = altura;
    }
    decirAltura(){
        return `La altura del bus es ${this.altura}`;
    }
}
var bus1 = new Autobus("Lineal",2020,"PEGASUS",90,60,5);
var coche1 = new Coche("Exporer",2000,"Ford",100);
var coche2 = new Coche("Ka",2002,"Ford",90);
var coche3 = new Coche("Corolla",2008,"Toyota",120);
var coche4 = new Coche("Corsa",2000,"Chevrolet",100);
var coche5 = new Coche("Palio",2000,"Renault",110);
document.write(`<h2>    ${bus1.decirAltura()} m`);
document.write(`<h2>Velocidad: ${coche1.velocidad} km/h`);
coche1.aumentarVelocidad();coche1.aumentarVelocidad();coche1.aumentarVelocidad();

document.write(`<h2>Velocidad: ${coche1.velocidad} km/h`);
