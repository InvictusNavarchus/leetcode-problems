function isPalindrome(x: number): boolean {
    const arr = String(x).split('');
    const reversedArr = [...arr].reverse();
    return arr.join('') === reversedArr.join('');
};