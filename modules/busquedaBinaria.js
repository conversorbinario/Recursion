function divisionEntera(num, den) {

    return Math.floor(num / den)

}

export function findBinary(numeroConvertir) {


    let nextNumerador = divisionEntera(numeroConvertir, 2);

    if (nextNumerador == 0) {
        return "1";
    }

    let resultadoBinario=numeroConvertir%2;

   return findBinary(nextNumerador) + resultadoBinario;


}