/** Pseudocode
Goal: We need to find two numbers that add up to the target number. 
By subtracting each number from the input, we can obtain the missing number. 
Then we can check whether that number exist in the number input, if exists, return the indices of both. 

A simple but inefficient way would be searching the entire array every iteration. O (n ** 2). 

We can optimize it by keeping track of both the numbers and the indices as we loop through it. One way to do it is using a Map. The key would be the number, as that's what we will use to look up, the values will be indices, as that's what want to return after finding the numbers.

Assumption:
- we can assume the target is always bigger than each number, otherwise it wouldn't add up. That means we can always subtract the input from the target number, without using absolute.
 */

function twoSum(nums: number[], target: number): number[] {
    const indicesTracker = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const potentialPair = target - nums[i];
        const storedIndex = indicesTracker.get(potentialPair);
        if (storedIndex !== undefined) {
            return [i, storedIndex]
        }
        indicesTracker.set(nums[i], i)
    }
    return []
};