/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 *
 * 
**/

class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function listToArray(list: ListNode): number[] {
    const digits: number[] = [];
    let currentNode = list;
    while (currentNode.val !== 0) {
        digits.push(currentNode.val);
    }
    return digits;
}

function sumArray(arr: number[]): number {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function numberToArray(num: number): number[] {
    
}

function arrayToList(arr: number[]): ListNode {
    const list = new ListNode();

}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const arr = listToArray(l1)
};