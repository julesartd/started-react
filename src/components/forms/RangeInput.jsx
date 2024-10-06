export default function RangeInput({ label, value, onChange }) {

    return (
        <label className="flex items-center space-x-2 text">
            <span>{label}</span>
            <input
                type="range"
                className="form-range"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            <span>{value}</span>
        </label>
    )
}