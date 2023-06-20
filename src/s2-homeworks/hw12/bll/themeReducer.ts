const initState: ThemeReducerStateType = {
    themeId: 1,
}

export type ThemeIdType = 1 | 2 | 3

export type ThemeReducerStateType = {
    themeId: ThemeIdType
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
    id: ThemeIdType
}

export const changeThemeId = (id: ThemeIdType): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
