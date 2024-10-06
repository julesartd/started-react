export default function ProductRow({ product }) {
    const className = product.stocked ? '' : 'text-red-500';

    return (
        <tr>
            <td className={`border px-4 py-2 ${className}`}>{product.name}</td>
            <td className="border px-4 py-2">{product.price}</td>
        </tr>
    )
}