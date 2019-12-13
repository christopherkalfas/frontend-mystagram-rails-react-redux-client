import React from 'react'


const IncreaseLikeButton = (props) => {
    return(
        <div>
            <button id='like-btn' className='btn btn-block btn-lg' onClick={props.handleIncrement}> Increase Likes</button>
        </div>
    )

}
    
    
export default IncreaseLikeButton   