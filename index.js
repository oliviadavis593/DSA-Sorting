/* Bubble Sort
1. Its the classic 'terrible' sorting algorithm 
2. You keep looping through an array to find out whether adjacent values need swaping
3. You keep going until there's no more values that need swapping: 
*/
/*Big O:
1. Best case: O(n) => nodes are already in order - simply needs to check pair 1 time
2. Worst & Average case: O(n^2) => each value needs swapping with each other value 
*/

//This swaps the values at 2 inidicies in an array 
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp; 
};

//Looks through adjacent pairs of values in array 
function bubbleSort(array) {
    let swaps = 0; 
    for (let i = 0; i < array.length - 1; i++) {
        //if values are in the wrong order => it swaps it around
        if (array[i] > array[j + 1]) {
            swap(array, i, i + 1);
            swaps++; 
        }
    }
    //if # of swaps is > than 0 => list isn't in correct order yet
    //You need to call bubbleSort again to keep sorting
    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array; 
}

/* Merge sort
1. Takes a divide & conquer approach to sorting
2. It breaks the array down into continually smaller chunks 
3. Then merges them back in the correct order:
*/
function mergeSort(array) {
    //if array has 1 or 0 elements => by definition its sorted
    if (array.length <= 1) {
        return array; 
    }
    //slice array into 2 sorted halves
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    //the 2 sorted halves are then merged in correct order using merge function
    left = mergeSort(left);
    right = mergeSort(right);
    return mergeSort(left, right, array)
}

//To merge the 2 lists you just keep choosing the lowest value from left or right arrays 
function merge(left, right, array) {
    let leftIndex = 0; 
    let rightIndex = 0; 
    let outputIndex = 0; 
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex] = left[i];
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}

/* Quick sort 
1. More commonly used than merge sort => more cache-effecient  & can be easily performed in place
    - i.e w.o additional memory allocations
*/

//Uses the divide & conquer approach
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};