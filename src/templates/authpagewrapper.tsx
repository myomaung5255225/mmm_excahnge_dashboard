import React from "react";

export const AuthPageWrapper: React.FC = ({ children }) => {
    return (
        <div className='auth_wrapper'>
            <div className='auth_form_container'>
                <div className='logo_container'>
                    <img src="logo.png" alt="logo" className='logo' />
                </div>
                {children}
            </div>
        </div>
    )
}