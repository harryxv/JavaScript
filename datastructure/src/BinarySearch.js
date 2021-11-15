/**
 * binary search a key from a sorted array data
 * @param key
 * @param array
 */
function binarySearch(key, array) {
    let lo = 0, hi = array.length - 1, mid = 0;
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        if (key == array[mid]) {
            return mid;
        }
        if (key < array[mid]) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(binarySearch(5, array));