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
            history.push('/creatures')
        })

    }
}

