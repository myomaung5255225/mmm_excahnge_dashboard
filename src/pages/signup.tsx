import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ErrorHandler, GeneralButton, LinkText, PageLoader, TextInput } from "../components";
import { API } from "../services";
import { AuthPageWrapper } from "../templates/authpagewrapper";

export const SignupPage: React.FC = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const onNextFunction = () => {
        setLoading(true)
        API.post('/user/signup', {
            username: username,
            email: email,
            password: password
        }).then(res => {
            if (res.status === 201) {
                localStorage.setItem('access_token', res.data.responseData.access_token)
                history.push('/dashboard')
            }
        })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.data) {
                    setErrors(err.response.data.data)

                }
                else {
                    alert(`Something wrong!`)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <AuthPageWrapper>
            <PageLoader loading={loading} />
            <ErrorHandler errors={errors} />
            <div className='w-full flex flex-col px-2 py-2'>
                <TextInput input_type='text' value={username} setValue={setUsername} label='Username' placeholder='enter your username' />
                <TextInput input_type='email' value={email} setValue={setEmail} label='Email Address' placeholder='enter your email address' />
                <TextInput input_type='password' value={password} setValue={setpassword} label='Password' placeholder='enter your password' />
                <GeneralButton disalbed={!username || !email || !password} label='Signup' buttonType='button' onNextFunction={() => { onNextFunction() }} />
                <LinkText src='/' bodyText={`Already have an account?`} linkText="Login here" />
            </div>
        </AuthPageWrapper>
    )
}