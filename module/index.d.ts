declare module 'react-context-devtool' {
    import { Context, DOMElement } from 'react'
    
    interface IOptions {
        disable?: boolean,
        debugContext?: boolean,
        debugReducer?: boolean,
        disbaleAutoMode?: boolean
    }

    export function debugContextDevtool(context: DOMElement, options?: IOptions): void
}

