import React, { useState } from 'react'

import Buckets from './buckets'

import './app.css'

export default () => {

    const [preset, setPreset] = useState([])

    return <div className="container">
        <Buckets
            preset={preset}
            count={5}
            onChange={preset => {
                setPreset(preset)
            }}
        />
    </div>
}