import React, { useState } from 'react'
import { Buckets } from '../../components'

import './index.css'

export default ({ preset = [] }) => {
    const [_preset, setPreset] = useState(preset)

    return (
        <Buckets
            preset={_preset}
            size={300}
            space={4}
            handleSize={10}
            onChange={preset => {
                setPreset(preset)
            }}
            handleStyle={{
                backgroundColor: 'rgba(0,0,0,0.1)',
            }}
            bucketStyle={({ head, tail, index }) => {
                const style = {
                    backgroundColor: '#fff',
                }
                return style
            }}
            activeHandleStyle={{
                backgroundColor: 'rgba(0,0,0,0.3)',
            }}
        >
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '30px 0' }}>1</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '40px 0' }}>2</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '60px 0' }}>3</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '40px 0' }}>4</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '30px 0' }}>5</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '40px 0' }}>2</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '60px 0' }}>3</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '40px 0' }}>4</div>
            <div style={{ textAlign: 'center', border: '1px solid #666', padding: '30px 0' }}>5</div>
        </Buckets>
    )
}