export default function ProductCategoryRow({ name }) {
    return (
        <tr>
            <th colSpan="2" className="border px-4 py-2">{name}</th>
        </tr>
    )
}