import React, { useState } from "react";
import { GeneralButton, LinkText, TextInput } from "../components";
import { AuthPageWrapper } from "../templates/authpagewrapper";

export const SignupPage: React.FC = () => {
    const [username, setUsername] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setpassword] = useState<string>()
    const onNextFunction = () => {

    }
    return (
        <AuthPageWrapper>
            <div className='w-full flex flex-col px-2 py-2'>
                <TextInput input_type='text' value={username} setValue={setUsername} label='Username' placeholder='enter your username' />
                <TextInput input_type='email' value={email} setValue={setEmail} label='Email Address' placeholder='enter your email address' />
                <TextInput input_type='password' value={password} setValue={setpassword} label='Password' placeholder='enter your password' />
                <GeneralButton label='Signup' buttonType='button' onNextFunction={() => { onNextFunction() }} />
                <LinkText src='/' bodyText={`Already have an account?`} linkText="Login here" />
            </div>
        </AuthPageWrapper>
    )
}