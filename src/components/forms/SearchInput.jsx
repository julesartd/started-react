/**
 * Composant d'entrée de recherche.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.placeholder - Le texte d'espace réservé à afficher dans le champ de saisie.
 * @param {string} props.value - La valeur actuelle du champ de saisie.
 * @param {function} props.onChange - La fonction à appeler lorsque la valeur du champ de saisie change.
 * @returns {JSX.Element} Un élément d'entrée de recherche.
 */
export default function SearchInput({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder={placeholder}
            value={value}
            onChange={(e => onChange(e.target.value))}
        />
    )
}