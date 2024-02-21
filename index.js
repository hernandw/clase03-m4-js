class Vehiculo {
  constructor(marca, color, matricula) {
    this.marca = marca;
    this.color = color;
    this.matricula = matricula;
  }
  mostrarDatos() {
    return `La marca del vehiculo es ${this.marca} el color es: ${this.color} y la matricula es: ${this.matricula}}`;
  }
}

class Coche extends Vehiculo {
  constructor(marca, color, matricula, modelo) {
    super(marca, color, matricula);
    this.modelo = modelo;
  }
}

let coche1 = new Coche("Toyota", "Azul", "123ABC", "Corolla");

console.log(coche1.marca);
console.log(coche1.color);
console.log(coche1.matricula);
console.log(coche1.modelo);
console.log(coche1.mostrarDatos());

var persona_uno = {
  nombre: "Juan",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};
console.log(persona_uno);
var persona_dos = Object.create(persona_uno);
console.log(persona_dos);

//funccion constructora

/* function FiguraGeometrica(lado) {
    this.lado = lado
}

function Poligono(lado) {
    FiguraGeometrica.call(this, lado)
}

Poligono.prototype = Object.create(FiguraGeometrica.prototype) 
Poligono.prototype.calcularArea = function () {
    return this.lado * this.lado
}



let cuadrado = new Poligono(3)
console.log(cuadrado)
console.log(cuadrado.calcularArea()) */

class FiguraGeometrica {
  constructor(lado) {
    this.lado = lado;
  }
}

class Poligono extends FiguraGeometrica {
  constructor(lado) {
    super(lado);
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

let cuadrado2 = new Poligono(3);
console.log(cuadrado2);
console.log(cuadrado2.calcularArea());

//Creamos el Padre Motores
class Motores {
  constructor(serial, fabricante) {
    this.serial = serial;
    this.fabricante = fabricante;
  }
  datosMotor() {
    return `El número de serial es:
${this.serial} y el fabricante es la
empresa: ${this.fabricante}`;
  }
}

class Electrico extends Motores {
  constructor(serial, fabricante, potencia, corriente) {
    super(serial, fabricante);
    this.potencia = potencia;
    this.corriente = corriente;
  }
  tipoCorriente() {
    return `El tipo de corriente es: ${this.corriente}`;
  }
}

class CC extends Electrico{
    constructor(serial, fabricante, potencia, corriente, voltaje, tipo) {
        super(serial, fabricante, potencia, corriente)
        this.voltaje = voltaje
        this.tipo = tipo
    }
}

class CA extends Electrico{
    constructor(serial, fabricante, potencia, corriente, fases, frecuencia) {
        super(serial, fabricante, potencia, corriente)
        this.fases = fases
        this.frecuencia = frecuencia
    }
}

let motorCC = new CC('113DH', 'GE', '2000w', 'CC', '220CC', 'Shunt')
let motorCA = new CA('456123', 'Sharp', 'CA', '220', 'Monofasico', '50Hz')

console.log(motorCC.tipoCorriente())
console.log(motorCA.datosMotor())