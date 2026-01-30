## Problem Simplified

We have 2 linked lists, sum the numbers, and return it as a linked list.

## Caveats

The node count can go as high as 100. So we can't simply sum them blindly. We have to ensure the sum function can handle big numbers. 

Which mean, we either have to implement our own math addition algorithm, or use existing BigInt library. 

if it's the first one, doesn't it mean we need to solve 2 problems here instead of one? 

I was planning to use BigInt, but now thinking about it, I can just find the leetcode problem on implementing addition algorithm, solve it, then use that solution here.

## Algorithm

1. Transform each linked list into an array of numbers. 
2. Feed them into a function that can sum large numbers
3. Convert the sum into a linked list.