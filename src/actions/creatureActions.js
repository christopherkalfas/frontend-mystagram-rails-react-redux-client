export const fetchCreatures = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CREATURES'})
       return fetch('http://localhost:3001/creatures')
            .then(response => {
                return response.json()
            })
            
            .then(responseJSON => {
                dispatch({type: 'ADD_CREATURES', creatures: responseJSON })
            })
    }
}

export const addNewCreature = ( creature, history ) => {
    console.log('c')
    return dispatch => {
        return fetch('http://localhost:3001/creatures', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ creature })
        })
        .then(response => response.json())
        .then(creature => {
            console.log('d')
            dispatch({ type: 'ADD_NEW_CREATURE', creature })
            //making sure my promise is resolved before redirect
            //to make sure front end store has updated
            history.push('/creatures')
            //push new creature into history 'stack'
        })
        
    }

}

export const updateLikes = (creature, actionType) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/creatures/${creature.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'likes': creature.likes
            })
        })
            .then(response => {
                return response.json()
            })
            .then(creature => {
                dispatch({type: actionType, creature})
                

            })
    }
}

export const deleteCreature = (id) => {
    return(dispatch) => {
        return fetch(`http://localhost:3001/creatures/${id}`, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(creature => {
            dispatch({type: 'DELETE_CREATURE', id: creature.id})
        })
    }
}





