import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === "up") {
                const stateCopy = state.map(el => ({...el}))
                return stateCopy.sort((a, b) => a.name.localeCompare(b.name)) // need to fix
            }

            if (action.payload === "down") {
                const stateCopy = state.map(el => ({...el}))
                return stateCopy.sort((a, b) => b.name.localeCompare(a.name)) // need to fix
            }

            return state

        }
        case 'check': {

            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
