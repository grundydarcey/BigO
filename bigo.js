Constant time O(1): No matter the size of your input the algorithm will take the same amount of time to OfflineAudioCompletionEvent.
Logarithmic time O(log(n)): Takes longer with larger inputs, running time increases slowly.
Linear time O(n): Has run times that are directly proportional to the size of the input.
Polynomial time O(n^k): Has run time that would be n raised to the constant power k. Can be seen with looping through 2 and 3 nested loops.
Exponential time O(2^n): Has run time that grows rapidly with any increase in input size.



1.1. Constant O(1)

1.2 Linear O(n)

2. Constant O(1) - If the value is 1, it runs the if statement once, if the value is 10 it runs the if statement once.Constant

3. Polynomial O(n^k) -The for loop gets ran more based on the arrays growing.

4. Linear O(n) - The for loop runs once if the array length is 1, and runs 10 times if the array length is 10.

5. Linear O(n) - The operations get run the amount of times related to the length of the array.

6. Polynomial O(n^k) - The nested for loops shows that it would be a polynomial time constraint.

7. Linear O(n) - The for loop will run two times if num is 2, and run 20 times if num is 20.

8. Polynomial O(n^k) - The if loop running under the while loop makes it a nested loop.

9. Constant O(1) - This is only picking a certain point in the array so it's only one operation that gets done.

10. Logarithmic O(log(n)) - The for loop will run that many more times if the n value is higher.

11. 

function calculateMoves(num) {
  if (num === 3) {
    return 7;
  }
  return calculateMoves(num -1) * 2 + 1;
}

function printMove(first, last) {
  console.log(`Move disc from tower ${first} to tower ${last}`);
}

function hanoi(num, first, last) {
  if (num === 1) {
    printMove(first, last);
  } else {
    let other = 6 - (first + last);
    hanoi(num - 1, first, other);
    printMove(first, last);
    hanoi(n - 1, other, last);
  }
}

hanoi(3, 1, 3)