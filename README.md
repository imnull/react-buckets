# react-buckets

Some layout or interactive components based React.

## Buckets

```jsx
import { Buckets } from 'react-buckets'

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
        </Buckets>
    )
}

```

### size<number>

The layout container height.

### space<number>

The space size between each bucket.

### handleSize<number>

The width of then resizing handle.

### bucketStyle<Object | Function>

Define the custom style of the buckets. It could be a standard css-object, or a callback function like

```js
<Buckets
    handleStyle={
        ({ head, tail, index }) => {
            return head ? {
                backgroundColor: '#f00',
            } : tail ? {
                backgroundColor: '#00f',
            } : {
                backgroundColor: '#0f0'
            }
        }
    }
/>
```

The argument structure of the callback function means

- index: the current index of the elements
- head: `index === 0`
- tail: `index === elements.length - 1`

### handleStyle<Object | Function>

Define the custom style of the handles. 

Take a look at `bucketStyle`.

### activeHandleStyle<Object | Function>

Define the custom style of the operating handle. 

Take a look at `bucketStyle`.

### onChange<Function>

Define the callback function invoked when the operation is end.