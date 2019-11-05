const creatureReducer = (state = { creatures: [],loading: false }, action) => {
    switch(action.type){
        case 'LOADING_CREATURES':
            return {
                ...state,
                creatures: [...state.creatures],
                loading: true
            }
        
        case 'ADD_CREATURES':
            return {
                ...state,
                creatures: action.creatures,
                loading: false 
            } 
            
        case 'ADD_NEW_CREATURE':
            return {
                ...state,
                creatures: [...state.creatures, action.creature]
            }
        default:
            return state
    }
}

export default creatureReducer