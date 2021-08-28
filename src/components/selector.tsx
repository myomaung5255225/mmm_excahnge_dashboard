import React, { SetStateAction } from "react";
import { currencyProps } from "./CurrencyTable";
interface selectorProps {
    data?: any;
    value: any | string | number;
    setValue: React.Dispatch<SetStateAction<any>>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    name?: string

}
export const CurrencySelector: React.FC<selectorProps> = ({ data, value, setValue, label, placeholder, disabled, name }) => {
    return (
        <div className='w-full flex flex-col  py-2'>
            <label className='text-sm text-blue-400 px-2' htmlFor="">{label}</label>
            <select className='bg-white  py-2 rounded-md focus:outline-none' disabled={!data} name={name} value={value} onChange={(e) => { setValue(e.target.value) }}>
                <option value="">select one</option>
                {
                    data && data.map((c: currencyProps, i: number) => (
                        <option key={i} value={c._id}>{c.name} </option>
                    ))
                }
            </select>
        </div>
    )
}