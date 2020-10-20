import React from 'react'
import { Redirect } from 'react-router-dom'

const admin = () => {
    const locat = window.location.replace('https://salty-dusk-53538.herokuapp.com/admin/')
    return (
        <div>
            {locat}
        </div>
    )
}

export default admin