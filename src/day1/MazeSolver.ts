const dirs = [
    [1, 0], // top
    [0, 1], // right
    [0, -1], // bottom
    [-1, 0], // left
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
) {
    // base cases:

    // checking if its off the map

    // maze is a square hence we can take 0's len
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze[0].length
    ) {
        return false;
    }

    // we are on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // we are on the end
    if (seen[(curr.x, curr.y)]) {
        return false;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < dirs.length; ++i) {
        const [x, y] = dirs[i];
        const isFound = walk(
            maze,
            wall,
            {
                x: curr.x + x,
                y: curr.y + y,
            },
            end,
            seen,
            path,
        );
        if (isFound) return true;
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}
