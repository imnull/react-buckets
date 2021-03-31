interface IReduXtyle {
    parent: IReduXtyle | null
    value: TReduXtyleItem | null
    append(item: TReduXtyleItem): IReduXtyle
    exec(): TReduXtyleItem[]
}

type TReduXtyleItem = {
    parent: TReduXtyleItem | null
    type: any
    style?: { [key: string]: any }
    className?: string
}

class ReduXtyle implements IReduXtyle {

    public readonly parent: IReduXtyle | null
    public readonly value: TReduXtyleItem | null
    constructor(value?: TReduXtyleItem, parent?: IReduXtyle) {
        this.value = value || null
        this.parent = parent || null
    }

    append(item: TReduXtyleItem) {
        const style: IReduXtyle = new ReduXtyle(item, this)
        return style
    }

    exec() {
        if(!this.parent) {
            return this.value ? [ this.value ] : []
        } else {
            const list = this.parent.exec()
            if(this.value) {
                list.push(this.value)
            }
            return list
        }
    }
}

export default ReduXtyle