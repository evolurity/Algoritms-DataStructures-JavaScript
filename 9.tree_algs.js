const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
]

function recursive(tree) {
    let sum = 0
    tree.forEach(node => {
        sum += node.v
        if (!node.c) {
            return node.v
        }
        sum += recursive(node.c)
    })
    return sum
}

function iteration(tree) {
    if (!tree.length) {
        return 0
    }
    const nodes = [...tree]
    let sum = 0
    while (nodes.length) {
        const tempNode = nodes.pop()
        if (tempNode.c) {
            nodes.push(...tempNode.c)
        }
        sum += tempNode.v
    }
    return sum


}

console.log(recursive(tree));
console.log(iteration(tree));