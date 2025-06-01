export interface InputProps {
    value?: any
    onInput?: (newValue: any) => void
    format?: (input: any) => any
    pipe?: (newInput: any, oldInput: any) => any
}
