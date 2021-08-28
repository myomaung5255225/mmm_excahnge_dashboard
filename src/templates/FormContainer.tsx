import React from "react";

interface formContainerProps {
    title?: string
}
export const FormContainer: React.FC<formContainerProps> = ({ children, title }) => {
    return (
        <div className='bg-blue-100 rounded-md px-2 py-2 flex w-full flex-col'>
            <h5 className='uppercase flex justify-center content-center items-center text-blue-700'>{title}</h5>
            <hr className='bg-white h-1 my-2 shadow-sm' />
            {children}
        </div>
    )
}