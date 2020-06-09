import React from 'react'

export default function Error({ msg }) {
    return (
        <>
            <h2 className="error-msg">{msg}</h2>
        </>
    )
}
