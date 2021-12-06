document.body.addEventListener('click', (ev => {
    if (ev.target.type === 'checkbox') {
        const checked = ev.target.checked;

        walk(ev.target, function (child) {
            child.checked = checked;
        })
    }
}))


function walk(root, callback) {
    if (root.type === 'checkbox') {
        callback(root)
        const next = root.parentNode.children[1];

        if (next && next.classList.contains('tree')) {
            walk(next, callback)
        }
    } else {
        [].slice.call(root.children).forEach(child => walk(child, callback))
    }
}