import React, { useState } from "react";
import { AuthPageWrapper } from '../templates/authpagewrapper'
import { TextInput, GeneralButton, LinkText } from '../components/'

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const onNextFunction = () => {

    }
    return (
        <AuthPageWrapper>
            <div className='px-2 py-2 w-full flex flex-col'>
                <TextInput value={email} setValue={setEmail} label='Email address' placeholder="enter your email address" input_type='text' />
                <TextInput value={password} setValue={setPassword} label='Password' placeholder="enter your password" input_type='password' />
                <GeneralButton disalbed={!email || !password} label='Login' onNextFunction={onNextFunction} buttonType='button' />
                <LinkText bodyText={`Don't have an account?`} src='/signup' linkText="Signup here" />
            </div>
        </AuthPageWrapper>
    )
}