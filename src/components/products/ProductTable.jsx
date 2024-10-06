import ProductRow  from "./ProductRow";
import ProductCategoryRow  from "./ProductCategoryRow";

export default function ProductTable({ products }) {

    const rows = [];
    let lastCategory = null;

    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />);
        } 

        lastCategory = product.category;
        rows.push(<ProductRow key={product.name} product={product} />);
    }

    
    return <table className="w-full px-4 py-4">
        <thead>
            <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}
