import React from "react";
import { Link } from 'react-router-dom'
interface linkTextProps {
    src: string;
    bodyText?: string;
    linkText?: string;
}

export const LinkText: React.FC<linkTextProps> = ({ src, bodyText, linkText }) => {
    return (
        <div className='px-2 py-2'>
            <p className='text-sm text-gray-600'> {bodyText}👉 <Link className='text-red-400 hover:text-red-600 font-light text-xs hover:underline' to={src}>{linkText}</Link></p>
        </div>
    )
}