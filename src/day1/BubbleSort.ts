export default function bubble_sort(arr: number[]): void {

    for(let i = 0; i < arr.length; i++){
        const bound = arr.length - 1 - i; // doing this instead of manual decrement at the end of the loop
        for(let j = 0; j < bound; j++){
            if(arr[j] > arr[j + 1]){
                const temp  = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}