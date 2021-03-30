import React, { useState } from 'react'

import Buckets from './components/buckets'

import Router from './router'

import './app.css'

export default () => {

    const [preset, setPreset] = useState([])

    return <div className="root-container">
        <Router />
    </div>
}