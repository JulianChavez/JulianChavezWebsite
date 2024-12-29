'use client'; //idk if i really need to add this or not
import React from 'react';

export enum TYPE_EFFECT {
    WRITING,
    PAUSING,
    DELETING
}
const TYPE_INTRVL = 120
const PAUSING_INTRVL = 1500
const DELETING_INTRVL = 100

const useTypedMsg = (messageList: string[]) => {
    const [indexList, setIndexList] = React.useState(0)
    const [typeEffect, setTypeEffect] = React.useState(TYPE_EFFECT.WRITING)
    const [typed, setTyped] = React.useState('')
    React.useEffect(() => {
        switch (typeEffect) {
            case TYPE_EFFECT.WRITING: {
                const nextTypedMsg = messageList[indexList].slice(0, typed.length + 1)

                if (nextTypedMsg == typed) {
                    setTypeEffect(TYPE_EFFECT.PAUSING)
                }

                const timeout = setTimeout(() => {
                    setTyped(nextTypedMsg)
                }, TYPE_INTRVL)
                return () => clearTimeout(timeout)
            }
            case TYPE_EFFECT.DELETING: {
                if (!typed) {
                    const nextIndex = indexList + 1
                    setIndexList(messageList[nextIndex] ? nextIndex : 0)
                    setTypeEffect(TYPE_EFFECT.WRITING)
                }

                const nextTypedMsgDelete = messageList[indexList].slice(0, typed.length - 1)
                const timeout = setTimeout(() => {
                    setTyped(nextTypedMsgDelete)
                }, DELETING_INTRVL)
                return () => clearTimeout(timeout)
            }
            case TYPE_EFFECT.PAUSING:
            default:
                const timeout = setTimeout(() => {
                    setTypeEffect(TYPE_EFFECT.DELETING)
                }, PAUSING_INTRVL)
                return () => clearTimeout(timeout)
        }
    }, [messageList, typed, typeEffect, indexList])
    return [typed, typeEffect]
}
export default useTypedMsg