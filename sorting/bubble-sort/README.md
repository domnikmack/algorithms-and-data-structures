# Bubble Sort
## Time and Space Complexity
Time: O(n^2)<br />
(Best case: O(n)
*if array is sorted already*)

Space: O(1)<br />

## Optimization
Small optimization:
Each iteration through array leaves a number at the end that is in its final position. E.g. The last number in the array after the first complete iteration is the greatest number in the array and therefore in its final position. Same is the case for the second to largest number after 2nd iteratino etc.
I.e. for each while after the fierst we can exclude one more number at the end of the array from iteration.
This is a small optimization that does not effect the overall analyses and big O notation for this algorithm.
