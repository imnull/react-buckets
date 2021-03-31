import React, { useRef } from 'react'
import ClassLess from '../../components/classless'

import './index.css'

export default (props) => {

    const list = useRef()

    return (
        <ClassLess>
            <ol className="list-container" ref={list} onClick={e => {
                const { target } = e
                const children = Array.prototype.slice.call(list.current.childNodes)
                console.log(children.indexOf(e.target))
            }}>
                <>
                    <li>ClassLess 1</li>
                    <li>ClassLess 2</li>
                </>
            </ol>
        </ClassLess>
    )
}