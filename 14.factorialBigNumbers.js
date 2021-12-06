function fact(n) {
    const st = [[n, 1]];
    while (st.length > 0) {
        const [curr, result] = st.pop()

        if (curr === 0 || curr === 1) {
            return result
        }
        st.push([curr - 1, result * curr])
    }
}

console.log(fact(1600000));
