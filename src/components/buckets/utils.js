const round = (n, u = 4) => {
    const U = Math.pow(10, u)
    return Math.round(n * U) / U
}

export const formatPreset = (preset, count) => {
    const output = []
    let all = 1, start = 0, end = 0
    for(let i = 0; i < count; i++) {
        let n = preset[i]
        if(typeof n === 'number') {
            all -= n
            end += n
            output.push({ size: round(n), start: round(start), end: round(end) })
            start += n
        } else {
            if(i >= count - 1) {
                end = 1
                output.push({ size: round(all), start: round(start), end })
            } else {
                n = all / (count - i)
                all -= n
                end += n
                output.push({ size: round(n), start: round(start), end: round(end) })
                start += n
            }
        }
    }
    return output
}

const computeStyle = (style, params) => {
    return (typeof style === 'function' ? style({ ...params }) : style) || null
}

export const genStyles = (preset, {
    size = 240,
    space = 8,
    handleSize = 8,
    currentIndex = -1,
    bucketStyle = null,
    handleStyle = null,
    activeHandleStyle = null,
}) => {



    const buckets = preset.map(({ size, start }, i, arr) => {
        const params = { index: i, head: i === 0, tail: i === arr.length - 1 }
        return {
            width: size * 100 + '%',
            left: start * 100 + '%',
            ...computeStyle(bucketStyle, params),
            padding: 0,
            paddingLeft: params.head ? 0 : `${space / 2}px`,
            paddingRight: params.tail ? 0 : `${space / 2}px`,
        }
    })
    const handles = preset.filter((_, i) => i > 0).map(({ start }, i, arr) => {
        const params = { index: i, head: i === 0, tail: i === arr.length - 1 }
        return {
            width: handleSize,
            marginLeft: -handleSize / 2 + 'px',
            left: start * 100 + '%',
            ...computeStyle(handleStyle, params),
            ...{ ...(i === currentIndex ? computeStyle(activeHandleStyle, params) : null) }
        }
    })

    const container = { height: size }

    return { buckets, handles, container }
}