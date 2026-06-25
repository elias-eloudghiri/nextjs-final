"use client"
import Logo from "@/components/ui/Logo"
import Login from "../ui/Login"

export default function Header(){
    return(
        <header className="flex justify-between">
            <Logo/>
            <Login />
        </header>
    )
}