import { Button, Container, Strong, Text, TextFieldInput } from '@radix-ui/themes'
import React, { useState } from 'react'
import { api } from '~/utils/api'



const LOGIN_FORM = "login"
const SIGNUP_FORM = "signup"

function SignupForm({ toggleForm }: any) {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log("login with : ", data);
    }

    return (
        <Container className='rounded-2xl p-4 md:p-12 text-center border-2 border-[#C1C1C1]'>

            <Text size={"8"} as="label" ><Strong>Create Your Account</Strong></Text>


            <form onSubmit={handleSubmit} className='text-start mt-12' >

                <Text size={"5"} as="label"><Strong>Name</Strong></Text>
                <TextFieldInput size={"3"} mt={"1"} mb={"5"} aria-label='name' name="name" placeholder='Enter name' />

                <Text size={"5"} as="label"><Strong>Email</Strong></Text>
                <TextFieldInput size={"3"} mt={"1"} mb={"5"} aria-label='email' name="email" placeholder='Enter email' />

                <Text size={"5"} as="label"><Strong>Password</Strong></Text>
                <TextFieldInput size={"3"} mt={"1"} aria-label='password' name="password" placeholder='Enter password' />

                <Button size={"4"} my={"6"} color='gray' highContrast className='w-full cursor-pointer' >Create Account</Button>

            </form>

            <hr className='bg-gray-300 h-[2px] mt-5 mb-12' />

            <Text size={"3"} as="label">Already Have An Account ?
                <strong onClick={() => toggleForm(LOGIN_FORM)} className='ml-4 cursor-pointer'> Login</strong>
            </Text>

        </Container>
    )
}

function LoginForm({ toggleForm }: any) {


    function handleSubmit(e: any) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data: any = Object.fromEntries(formData.entries())
        console.log("login with : ", data);
        api.users.loginUser.useQuery({ email: "data?.email", password: "data?.password" })
    }

    return (
        <Container className='rounded-2xl p-4 md:p-12 text-center border-2 border-[#C1C1C1]'>

            <div className='grid gap-1 mb-10'>
                <Text size={"8"} as="label" ><Strong>Login</Strong></Text>
                <Text size={"7"} mt={"5"} as="label"><Strong>Welcome Back To ECOMMERCE </Strong></Text>
                <Text size={"4"} as="label">The next Gen Business Marketplace </Text>
            </div>

            <form onSubmit={handleSubmit} className='text-start' >

                <Text size={"5"} as="label"><Strong>Email</Strong></Text>
                <TextFieldInput size={"3"} mt={"1"} mb={"5"} aria-label='email' name="email" placeholder='Enter email' />

                <Text size={"5"} as="label"><Strong>Password</Strong></Text>
                <TextFieldInput size={"3"} mt={"1"} aria-label='password' name="password" placeholder='Enter password' />

                <Button size={"4"} mt={"6"} mb={"6"} color='gray' highContrast className='w-full cursor-pointer' >LOGIN</Button>

            </form>

            <hr className='bg-gray-300 h-[2px] mb-12' />

            <Text size={"3"} as="label">Don't Have An Account ?
                <strong onClick={() => toggleForm(SIGNUP_FORM)} className='ml-4 cursor-pointer'> SING UP</strong>
            </Text>


        </Container>
    )
}

function AuthForms() {

    const [form, setForm] = useState(LOGIN_FORM)

    const toggleForm = (form: typeof LOGIN_FORM | typeof SIGNUP_FORM) => {
        if ([LOGIN_FORM, SIGNUP_FORM].includes(form))
            setForm(() => form)
    }



    switch (form) {
        case LOGIN_FORM: return <LoginForm toggleForm={toggleForm} />
        case SIGNUP_FORM: return <SignupForm toggleForm={toggleForm} />

        default:
            break;
    }

}

export default AuthForms
