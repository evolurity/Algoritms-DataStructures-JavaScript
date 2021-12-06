export default function leastCommonSubsequence(s1, s2, i, j, cache) {

    if (s1.length === i || s2.length === j) {
        return ''
    }
    if (cache[i][j]) {
        return cache[i][j]
    }
    if (s1[i] === s2[j]) {
        const next = s1[i] + leastCommonSubsequence(s1, s2, i + 1, j + 1, cache)
        cache[i][j] = next
    } else {
        const first = s1[i] + leastCommonSubsequence(s1, s2, i, j + 1, cache)
        const second = s1[i] + leastCommonSubsequence(s1, s2, i + 1, j, cache)
        cache[i][j] = first.length > second.length ? first : second
    }
    return cache[i][j]
}