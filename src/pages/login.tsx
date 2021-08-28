import React, { useState } from "react";
import { AuthPageWrapper } from '../templates/authpagewrapper'
import { TextInput, GeneralButton, LinkText, PageLoader, ErrorHandler } from '../components/'
import { API } from '../services/'
import { useHistory } from "react-router-dom";

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors, seterrors] = useState([])
    const history = useHistory()

    const onNextFunction = () => {
        setLoading(true)
        API.post('/user/login', {
            email: email,
            password: password
        }).then(res => {
            if (res.status === 200) {
                localStorage.setItem('access_token', res.data.access_token)
                history.push('/dashboard')
            }
        })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.data) {
                    seterrors(err.response.data.data)

                }
            })
            .finally(() => {
                setLoading(false)

            })
    }
    return (
        <AuthPageWrapper>
            <PageLoader loading={loading} />
            <div className='px-2 py-2 w-full flex flex-col'>
                <ErrorHandler errors={errors} />
                <TextInput value={email} setValue={setEmail} label='Email address' placeholder="enter your email address" input_type='text' />
                <TextInput value={password} setValue={setPassword} label='Password' placeholder="enter your password" input_type='password' />
                <GeneralButton disalbed={!email || !password} label='Login' onNextFunction={onNextFunction} buttonType='button' />
                <LinkText bodyText={`Don't have an account?`} src='/signup' linkText="Signup here" />
            </div>
        </AuthPageWrapper>
    )
}