import {useState} from "react";

function App({grid}) {
    const [version, setVersion] = useState(0);

    function dfs(grid, y, x) {
        grid[y][x] = grid[y][x] ? 0 : 1
        for (let [dx, dy] of [[-1, 0], [1, 0], [0, 1], [0, -1]]) {
            const nextX = x + dx
            const nextY = y + dy
            if (withinGrid(grid.length, grid[0].length, nextY, nextX) && grid[nextY][nextX] !== grid[y][x]) {
                dfs(grid, nextY, nextX)
            }
        }
    }

    const withinGrid = (h, w, y, x) => y >= 0 && x >= 0 && y < h && x < w

    const Grid = ({grid}) => {
        return <div>
            {grid.map((row, i) =>
                (<div key={i}>
                    {row.map((val, j) =>
                        <div key={i * row.length + j} className={`cell ${!val ? 'cell-green' : 'cell-red'}`}
                             onClick={() => {
                                 if (true) {
                                     dfs(grid, i, j);
                                 }
                                 setVersion(version + 1)
                             }}>
                        </div>)}
                </div>)
            )}
        </div>
    }

    return (
        <>
            <p>Кликай на красные плитки!</p>
            <div id="app"></div>
            <Grid grid={grid}/>
        </>
    );
}

export default App;
