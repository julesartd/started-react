/**
 * Composant d'entrée de case à cocher.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.label - Le texte de l'étiquette à afficher à côté de la case à cocher.
 * @param {boolean} props.checked - L'état actuel de la case à cocher.
 * @param {function} props.onChange - La fonction à appeler lorsque l'état de la case à cocher change.
 * @param {string} props.id - L'identifiant unique pour l'élément d'entrée.
 * @returns {JSX.Element} Un élément d'entrée de case à cocher avec une étiquette.
 */
export default function CheckboxInput({ label, checked, id, onChange }) {
    return (
        <label className="flex items-center space-x-2 text" htmlFor={id}>
            <input
                type="checkbox"
                className="form-checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                id={id}
            />
            <span>{label}</span>
        </label>
    )
}