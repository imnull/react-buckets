import React, { useState, useEffect, useRef } from 'react'
import { formatPreset, genStyles } from './utils'
import movable from '../movable'

import './index.css'

const Handle = movable(props => {
    return <div
        className="react-handle"
        { ...props }
    ></div>
})

export default ({
    limit = 240,
    preset = [0.3],
    handleSize = 8,
    children = null,
    onChange = null
}) => {

    if(!children) {
        children = []
    } else if(!Array.isArray(children)) {
        children = [children]
    }

    const count = children.length


    const [formattedPreset, setFormattedPreset] = useState(formatPreset(preset, count))
    const [allStyles, setAllStyles] = useState(genStyles(formattedPreset, { handleSize, limit }))
    const [containerSize, setContainerSize] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentSize, setCurrentSize] = useState(0)
    const [nextSize, setNextSize] = useState(0)

    useEffect(() => {
        setAllStyles(genStyles(formattedPreset, { handleSize, limit }))
    }, [formattedPreset])

    const handleContainer = useRef()

    return (
        <div className="react-buckets-container" style={allStyles.container}>
            {
                allStyles.buckets.map((style, i) => {
                    return (
                        <div
                            key={i}
                            className="react-bucket"
                            style={style}
                        >{children[i] || null}</div>
                    )
                })
            }
            <div className="react-buckets-handle-container" style={allStyles.container} ref={handleContainer}>
            {
                allStyles.handles.map((style, i) => {
                    return (
                        <Handle
                            key={i}
                            style={style}
                            onStart={() => {
                                const { width, height } = handleContainer.current.getBoundingClientRect()
                                setCurrentIndex(i)
                                setCurrentSize(formattedPreset[i].size)
                                setNextSize(formattedPreset[i + 1].size)
                                setContainerSize({ width, height })
                            }}
                            onChange={({ offset: { x: value } }) => {
                                const { width: size } = containerSize
                                const coupleSize = (nextSize + currentSize) * size
                                const coupleRate = coupleSize / size
                                const newSize = Math.min(coupleSize - handleSize * 2, Math.max(handleSize * 2, currentSize * size + value))
                                const rate = newSize / size

                                const _preset = [...preset]
                                _preset[currentIndex] = rate
                                _preset[currentIndex + 1] = coupleRate - rate
                                setFormattedPreset(formatPreset(_preset, count))
                            }}
                            onEnd={() => {
                                if(typeof onChange === 'function') {
                                    onChange(formattedPreset.map(n => n.size))
                                }
                            }}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}