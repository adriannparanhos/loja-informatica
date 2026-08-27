import React from "react";
import './Select.css';

interface SelectProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}

const Select = ({ label, value, options, onChange }: SelectProps) => {
    return (
        <div className="select-group">
            <label>{label}</label>
            <select 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                required
            >
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
