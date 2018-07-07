# Fibonacci
## Background
(Math) Sequence of numbers.<br />
1st Number = 0<br />
2nd Number = 1<br />
Nth number = (N - 1)th number + (N - 2)th number<br />

*Plain english: A serious of numbers, starting with 0 and 1 where every number after that is the sum of the 2 preceding numbers.*

0, 1, 1, 2, 3, 5, 8, ...

## Time and Space Complexity
### Recursive Solution
This is the naive solution with a lot of dublicate calculations and many calls on the call stack.<br />

Time:<br />
**O(2^n)**<br />
*Every recursive call again makes 2 function calls, i.e. the number of calls doubles each time, until we hit the base case(s).*

Space:<br />
**O(n)**<br />
*What counts are the call frames that are in the call stack at the same time. The 2 calls each function makes are made after each other, i.e. the max number of calls in the stack at a given time is just n.*

### Recursive Solution with Memoization
To avoid dublicate calculations store (memoize) fibonacci numbers in a hashtable (e.g. implemented with array or object).<br />

Time:<br />
**O(n)**<br />

Space:<br />
**O(n)**<br />

### Iterative Solution
Most performant.<br />

Space:<br />
O(n)<br />

Time:<br />
O(n)<br />

