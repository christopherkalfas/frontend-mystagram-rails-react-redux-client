export const fetchCreatures = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CREATURES'})
       return fetch('http://localhost:3001/creatures')
            .then(response => {
                return response.json()
            })
            // .then(responseJSON => {
            //     console.log(responseJSON)
            // })
            .then(responseJSON => {
                dispatch({type: 'ADD_CREATURES', creatures: responseJSON })
            })
    }
}

export const addNewCreature = ( creature, history ) => {
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
            dispatch({ type: 'ADD_NEW_CREATURE', creature })
            //making sure my promise is resolved before redirect
            history.push('/creatures')
            //to make sure front end store has updated
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





