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

