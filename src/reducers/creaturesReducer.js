const creatureReducer = (state = { creatures: [],loading: false }, action) => {
    switch(action.type){
        case 'LOADING_CREATURES':
            return {
                ...state,
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
        case 'INCREASE_LIKES':

            return{
                ...state,
                creatures: state.creatures.map(creature => {
                    return creature.id === action.creature.id ? action.creature : creature
                })
            }
        case 'DECREASE_LIKES':
            return {
                ...state,
                creatures: state.creatures.map(creature => {
                    return creature.id === action.creature.id ? action.creature : creature
                })
            }

        default:
            return state
    }
}

export default creatureReducer