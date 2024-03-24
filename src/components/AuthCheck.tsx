import React, { useEffect } from 'react'
import { api } from '~/utils/api'
import type { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import Header from './Header'
import Promotions from './Promotions'
import { Container } from '@radix-ui/themes'
import AuthForms from './AuthForms'


function AuthCheck({ children }: React.PropsWithChildren) {

    const dispatch: Dispatch = useDispatch()

    const checkLoginStatus = async () => {
        const token = localStorage.getItem("token")
        if (token?.length) {
            const user = api.users.getUser.useQuery({ name: "kalpit_authcheck" })
            console.log("validating user check : ", user)
        }
    }

    useEffect(() => {
        checkLoginStatus()
    }, [])

    return (
        <div>
            <Header />
            <Promotions />
            <Container size={"2"} pt={"9"} className=' justify-center border-x-4 '>
                <AuthForms />
            </Container>
            {/* {children} */}
        </div>
    )
}

export default AuthCheck
