//places all the the numbers of the sequence in the array

export function fibArray(nCase) {

    if (nCase == 0 || nCase == 1) {
        return nCase;
    }

    let nCaseResult = fibArray(nCase - 1) + fibArray(nCase - 2);

    return nCaseResult;


}

