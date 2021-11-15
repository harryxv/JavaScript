/**
 * binary search a key from a sorted array data
 * @param key
 * @param array
 */
export function binarySearch(key, array) {
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
