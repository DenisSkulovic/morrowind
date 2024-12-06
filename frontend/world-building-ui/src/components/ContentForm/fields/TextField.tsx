const TextField: React.FC<{ label: string; value: string; onChange: (value: string) => void; placeholder?: string }> = ({
    label,
    value,
    onChange,
    placeholder,
}) => (
    <div>
        <label>{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);