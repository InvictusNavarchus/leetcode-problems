function addStrings(num1: string, num2: string): string {
    let maxLength: number;
    if (num1.length > num2.length) {
        maxLength = num1.length;
    } else {
        maxLength = num2.length;
    }

    // handle edge case where the sum has more digits than both inputs
    maxLength += 1

    let num1Padded = num1.padStart(maxLength, "0");
    let num2Padded = num2.padStart(maxLength, "0");

    let sumArr = new Array<number>(maxLength);
    let carryOver = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = Number(num1Padded[i]) + Number(num2Padded[i]);
        if (carryOver) {
            sum += carryOver;
            carryOver = 0;
        }
        if (sum >= 10) {
            carryOver = 1;
            sum = sum - 10;
        }
        sumArr[i] = sum;
    }

    return sumArr.join('').replace(/^0/, '');
};