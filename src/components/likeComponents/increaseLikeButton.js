import React from 'react'


const IncreaseLikeButton = (props) => {
    return(
        <div>
            <button className='btn btn-primary btn-lg' onClick={props.handleIncrement}> Increase Likes</button>
        </div>
    )

}
    
    
export default IncreaseLikeButton   