function is32bit(x: number): boolean {
    const INT32_MAX = ~(1 << 31) // 2147483647
    return x <= INT32_MAX
}

function reverse(x: number): number {
    const isNegative = x < 0;
    x = Math.abs(x)
    const arr = String(x).split('');
    const reversedArr = [...arr].reverse();
    if (isNegative) { reversedArr.unshift('-') }
    const reversed = Number(reversedArr.join(''))
    if (!is32bit(Math.abs(reversed))) { return 0 }
    return reversed;
};