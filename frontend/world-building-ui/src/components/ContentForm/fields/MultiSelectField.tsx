const MultiSelectField: React.FC<{
    label: string;
    value: string[];
    onChange: (value: string[]) => void;
    options: { id: string; label: string }[];
}> = ({ label, value, onChange, options }) => {
    const handleSelect = (id: string) => {
        if (!value.includes(id)) onChange([...value, id]);
    };

    const handleDeselect = (id: string) => {
        onChange(value.filter((v) => v !== id));
    };

    return (
        <div>
            <label>{label}</label>
            <div>
                {value.map((id) => (
                    <span key={id}>
                        {options.find((opt) => opt.id === id)?.label}
                        <button type="button" onClick={() => handleDeselect(id)}>X</button>
                    </span>
                ))}
            </div>
            <select onChange={(e) => handleSelect(e.target.value)}>
                <option value="">Select {label}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};