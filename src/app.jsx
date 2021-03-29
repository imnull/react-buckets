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
        >
            <div style={{ textAlign: 'center' }}>1</div>
            <div style={{ textAlign: 'center' }}>2</div>
            <div style={{ textAlign: 'center' }}>3</div>
        </Buckets>
    </div>
}