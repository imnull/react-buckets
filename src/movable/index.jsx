import React, { useState, useEffect } from 'react'

export default Comp => ({ onStart, onChange, onEnd, ...props }) => {

    const [startX, setStartX] = useState(null)
    const [startY, setStartY] = useState(null)
    const [layerX, setLayerX] = useState(null)
    const [layerY, setLayerY] = useState(null)
    const [moveX, setMoveX] = useState(null)
    const [moveY, setMoveY] = useState(null)
    const [up, setUp] = useState(0)

    const isReady0 = () => {
        return (
            typeof layerX === 'number' && typeof layerY === 'number' &&
            typeof startX === 'number' && typeof startY === 'number'
        )
    }

    const isReady1 = () => {
        return (
            typeof onChange === 'function' &&
            typeof moveX === 'number' && typeof moveY === 'number'
        )
    }

    const handleMouseDown = e => {
        const { clientX, clientY, target } = e
        setStartX(clientX)
        setStartY(clientY)
        const { left, top } = target && typeof target.getBoundingClientRect === 'function' ? target.getBoundingClientRect() : {}
        if(typeof left === 'number' && typeof top === 'number') {
            setLayerX(clientX - left)
            setLayerY(clientY - top)
        } else {
            setLayerX(0)
            setLayerY(0)
        }
        
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = e => {
        const { clientX, clientY } = e
        setMoveX(clientX)
        setMoveY(clientY)
    }

    const handleMouseUp = e => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        setUp(Date.now())
    }

    const cal = (moveX, moveY) => {
        return { offset: { x: moveX - startX, y: moveY - startY }, start: { x: startX, y: startY }, layer: { x: layerX, y: layerY } }
    }

    useEffect(() => {
        if(typeof onChange === 'function' && isReady1()) {
            onChange(cal(moveX, moveY))
        }
    }, [moveX, moveY])

    useEffect(() => {
        if(typeof onStart === 'function' && isReady0()) {
            onStart(cal(0, 0))
        }
    }, [startX, startY, layerX, layerY])

    useEffect(() => {
        up > 0 && typeof onEnd === 'function' && onEnd()
    }, [up])

    return <Comp
        { ...props }
        onMouseDown={handleMouseDown}
    />
}