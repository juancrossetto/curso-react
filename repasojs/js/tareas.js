

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}` );
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}` );
    }
    
    hola() {
        return 'hola';
    }
}
