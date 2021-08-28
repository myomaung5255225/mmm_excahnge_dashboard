
import React from "react";

interface errorHandlerProps {
    errors?: any
}

interface errorProps {
    location?: string;
    msg?: string;
    param?: string;
    value?: string;
}
export const ErrorHandler: React.FC<errorHandlerProps> = ({ errors }) => {
    return (
        errors && errors.length > 0 && (
            <div className='flex w-full flex-col space-y-2 mb-4'>
                <h5 className='text-md text-gray-600'>Please check the following...</h5>
                {
                    errors.map((err: errorProps, i: number) => (
                        <div className='text-xs text-red-500' key={i}> {`👉 ${err.param}👿${err.msg}.`} </div>
                    ))
                }
            </div>
        )
    )
}