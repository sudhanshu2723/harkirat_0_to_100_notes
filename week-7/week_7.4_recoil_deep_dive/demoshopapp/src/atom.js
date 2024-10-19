import {atom, selector} from 'recoil'

export const networkCountAtom=atom({
    key:'networkCountAtom',
    default:123
})

export const jobsCountAtom=atom({
    key:'jobsCountAtom',
    default:234
})

export const notificationCountAtom=atom({
    key:'notificationCountAtom',
    default:645
})


export const messagingCountAtom=atom({
    key:'messagingCountAtom',
    default:565
})

export const totalNotifications=selector({
    key:'totalNotifications',
    get:({get})=>{
        const network=get(networkCountAtom);
        const jobs=get(jobsCountAtom);
        const notification=get(notificationCountAtom);
        const messaging=get(messagingCountAtom);
        return network+jobs+notification+messaging
    }
})