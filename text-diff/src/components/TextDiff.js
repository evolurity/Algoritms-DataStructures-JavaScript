import leastCommonSubsequence from "../utils/leastCommonSubsequence";

export default function TextDiff({first, second}) {
    const cash = [...Array(first.length)].map(() => Array(second.length))
    const common = leastCommonSubsequence(first, second, 0, 0, cash)

    function getDiff(s, common, type) {
        const result = []

        for (let i = 0, j = 0; i < s.length; i++) {
            if (s[i] === common[j]) {
                result.push(s[i])
                j++
            } else {
                result.push(<span className={`diff diff-${type}`}>{s[i]}</span>)
            }
        }
        return result
    }

    return (
        <div className="cols text-diff">
            <div className="col">
                {getDiff(first, common, 'red')}
            </div>
            <div className="col">
                {getDiff(second, common, 'green')}
            </div>
        </div>
    )
}