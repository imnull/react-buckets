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

export const genStyles = (preset, {
    limit = 240,
    handleSize = 8
}) => {
    const buckets = preset.map(({ size, start }) => ({ width: size * 100 + '%', left: start * 100 + '%' }))
    const handles = preset.filter((_, i) => i > 0).map(({ start }) => ({
        width: handleSize,
        marginLeft: -handleSize / 2 + 'px',
        left: start * 100 + '%'
    }))

    const container = { height: limit }

    return { buckets, handles, container }
}