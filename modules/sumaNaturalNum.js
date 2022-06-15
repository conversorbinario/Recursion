
export function sumarRec(numeroLimite, numeroSumar){

    if (numeroSumar==numeroLimite){
        return numeroLimite;
    }

    return numeroSumar + sumarRec(numeroLimite, numeroSumar+1);
}



