'use client'

import { useState } from "react"

export default function EmailInput() {
    const [email, setEmail] = useState('')

    async function handleAddSubscriber() {
        email.includes('@')
        try {
        } catch (err) {
            console.log('Failed to add subscriber: ' + err.message)
        }
    }

    return (
        <div className="sign-up">
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder="Email Address.." />
            <button className="button-card" onClick={handleAddSubscriber}>Sign up</button>
        </div>

    )
}