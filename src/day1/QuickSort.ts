function do_quick_sort(arr: number[], pivotIndex: number): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[pivotIndex];
    const left = arr.filter((item) => item < pivot);
    const right = arr.filter((item) => item > pivot);
    const sortedLeft = do_quick_sort(left, Math.floor(left.length / 2));
    const sortedRight = do_quick_sort(right, Math.floor(right.length / 2));
    return sortedLeft.concat(pivot, sortedRight);
}

export default function quick_sort(arr: number[]): void {
    if (arr.length <= 1) {
        return;
    }

    const sortedArray = do_quick_sort(arr, Math.floor(arr.length / 2));
    for (let i = 0; i < arr.length; i++) {
        arr[i] = sortedArray[i];
    }
}
