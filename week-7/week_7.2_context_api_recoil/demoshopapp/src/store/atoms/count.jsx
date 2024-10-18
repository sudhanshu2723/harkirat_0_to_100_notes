import {atom, selector} from 'recoil'

// ket should be unique
export const countAtom=atom({
    key:'countAtom',
    default:0
})

export const isEvenSelector=selector({
    key:'isEvenSelector',
    get:({get})=>{
        const count=get(countAtom);
        return count%2==0
    }
})