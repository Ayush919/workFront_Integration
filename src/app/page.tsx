'use client'
import SignInSignUpModal from "@/app/Pages/login";
import {useEffect, useState} from "react";

export default function Home() {
    const [showModal, setShowModal] = useState(true)
    const [loginData, setLoginData] = useState({})

    return (
        <SignInSignUpModal showModal={showModal} setShowModal={setShowModal}
                           loginData={loginData}
                           setLoginData={setLoginData}/>
    )
}