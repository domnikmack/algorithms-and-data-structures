#Insertion Sort
## Concept
Split array in sorted section (left, initialized with one element) and an unsorted section (right, initialized with all elements but the firs).
Iterate through the unsorted part and insert each element in the left, sorted section in the following way:
* compare with left neighbor (last elment of sorted section)
* if element is less then left neighbor swap and look keep iterating backwards through sorted part
* if element is greater then left neighbor the two elements are sorted and we don't have to look at more left neighbors (as they are sorted already)

## Time and Space Complexity
Time: O(n^2)<br />
*(Best case O(n) if array was sorted already.)*

Space: O(1)
