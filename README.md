# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

These are functions that can be handed a function and return an output, which can sometimes be another function. Map is a fine example of this.

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max` Takes an array and returns the maximum number. arr1 = [1,2,3]; arr1.max === 3;
* `min` Takes an array and returns the minimum number. arr2 = [1,2,3]; arr2.min === 1;
* `each` Takes an array and a function and performs the function on each item. each(arr1, consoleLog) === 
1
2
3

* `map` Maps a  given array to another array given an action function. map(arr1, addTwo) === [3,4,5]
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Returns an array with array items that passed a functional comparison. filter(arr1, isOdd) === [1,3]
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) Do this function thing to each array item in turn, leading to a single returned value. arr1.reduce(add) === 6
* `reject`: [note](http://underscorejs.org/#reject)Opposite of filter. reject(arr1, isOdd) === [2]

Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

