const initState: ThemeReducerStateType = {
    themeId: 1,
}

export type ThemeReducerStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): ThemeReducerStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
