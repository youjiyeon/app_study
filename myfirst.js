

function GCD(arr) {
    
    const lowest = Math.min(...arr);

    for (let factor = lowest; factor > 1; factor--) {
        let isCommonDivisor = true;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % factor !== 0) {
                isCommonDivisor = false;
                break;
            }
        }

        if (isCommonDivisor) {
            return factor;
        }
    }

    return 1;
}
console.log(GCD([18, 45]));
console.log(GCD([120,60,40,20,160]));