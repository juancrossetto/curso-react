export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if( (presupuesto / 4) > restante) { //ya gaste mas del 75%
        clase = 'alert alert-danger';

    } else if ( (presupuesto / 2) > restante) { //ya gaste mas del 50%
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-success' // gaste menos del 50%
    }

    return clase;
}