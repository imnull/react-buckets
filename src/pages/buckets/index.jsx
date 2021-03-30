import React, { useState } from 'react'

import Buckets from '../../components/buckets'

import './index.css'

export default () => {
    const [preset, setPreset] = useState([])

    return (
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
    )
}