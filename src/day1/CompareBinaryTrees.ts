// A subtree within a tree is also a tree
// hence we can always run the same base cases on everyone of them until they get false or if they end up true
// if nothing is unequal then we go to the end where both are always null

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // have we made it to a point where we cannot recurse further?
    if (a === null && b === null) return true;
    //  are we structure wise same?
    if (a === null || b === null) return false;

    // if the first value is equal or not
    if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}
