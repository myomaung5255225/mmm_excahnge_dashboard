import React, { SetStateAction } from "react";

interface textInputProps {
    className?: string;
    value?: string;
    setValue: React.Dispatch<SetStateAction<any>>;
    label?: string;
    placeholder?: string;
    input_type?: string;
    disabled?: boolean;
    name?: string
}

export const TextInput: React.FC<textInputProps> = ({ className, value, setValue, input_type, placeholder, label }) => {
    return (
        <div className={`${className} flex flex-col w-full mb-3`}>
            <label htmlFor="" className='px-2 text-sm'>{label}</label>
            <input className='text_input' type={input_type} value={value} onChange={(e) => { setValue(e.target.value) }} placeholder={placeholder} />
        </div>
    )
}