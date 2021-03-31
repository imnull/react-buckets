import React from 'react'
import ReduXtyle from '../../libs/reduxtyle/index';

const isLiteral = v => ['string', 'number', 'boolean'].includes(typeof v)
// const isFragment = v => v && typeof v === 'object' && v.type === React.Fragment

const rebuildComponent = (instance, xtyle) => {
    const { type, props, key, ref } = instance
    const { className, style, children = null, ...restProps } = props
    const _xtyle = xtyle.append({ type, className, style })
    return React.createElement(type, {
        ...restProps,
        key,
        ref,
        children: <ClassLess xtyle={_xtyle}>{children}</ClassLess>,
    })
}

const ClassLess = (props) => {
    const { children, xtyle = new ReduXtyle() } = props

    if(!children) {
        return null
    } else if(isLiteral(children)) {
        return children
    } else if(Array.isArray(children)) {
        return children.map((child, i) => <ClassLess key={i} xtyle={xtyle}>{child}</ClassLess>)
    } else if(typeof children === 'object') {
        return rebuildComponent(children, xtyle)
    }
    return '[---a---]'
}

export default ClassLess