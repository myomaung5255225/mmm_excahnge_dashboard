import React from "react";
interface generalButtonProps {
    onNextFunction: () => any | void;
    className?: string;
    label: string;
    disalbed?: boolean;
    buttonType?: "submit" | "button" | 'reset'

}
export const GeneralButton: React.FC<generalButtonProps> = ({ onNextFunction, className, label, disalbed, buttonType }) => {
    return (
        <div className={`${className} w-full flex py-3`}>
            <button type={buttonType} disabled={disalbed} onClick={() => onNextFunction()} className='general_button'>{label}</button>
        </div>
    )
}