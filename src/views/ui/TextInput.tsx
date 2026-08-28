import './TextInput.css';

interface TextInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

const TextInput = ({ label, placeholder, value, onChange }: TextInputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required
            />
        </div>
    );
};

export default TextInput;
