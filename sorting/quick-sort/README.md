# Quicksort
## Concept / Process
The array is sorted relatively to a pivot value.
Every value in the array will be placed left of the pivot if it's less and right of the pivot it it's greater than the pivot value. We can implement this with pointers: pivot, left and right.
Example
pivot: pointer to first value in array
left pointer: second number in array
right pointer: last number in array

Process:
- check values at left and right pointers against the array
- if left pointer index is less or equal to right pointer index and if ...
  - value at left poiner is greater AND value at right pointer is less than value at pivot -> SWAP values at left and right pointers with each other.
  - value at left pointer is less or equal/value at right pointer is greater or equal than value at pivot -> just move corresponding pointers inwards (i.e. left pointer right/ right pointer left)
  - value at left pointer is greater OR value at right pointer is less than value at pivot -> don't move pointer
- if left pointer index is greater than right pointer index SWAP the value at the right pointer with value at pivot. -> the pivot value is now at its final sorted position.
- repeat with left and right subarrays (elements left and righ of the just sorted pivot value).

## Time and Space Complexities
Time:<br>
&nbsp;&nbsp;Worst: O(n^2)<br>
&nbsp;&nbsp;Best: O(n)<br>
&nbsp;&nbsp;Avearge: O(n)<br>

Space:<br>
&nbsp;&nbsp;O(log(n))<br>
&nbsp;&nbsp;*(call stack of recursive calls)*<br>


