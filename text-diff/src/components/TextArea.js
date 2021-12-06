export default function TextArea({value, onChange}) {
    return <textarea value={value} onChange={event => onChange(event.target.value)}></textarea>
}