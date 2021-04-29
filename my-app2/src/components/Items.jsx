import React from 'react';
export const Items= (props)=>{
  
    return(
        <div>
            <div className="cartel">
                <h6>{props.product.name}</h6>
                <img src={props.product.img}></img>
                <h6>{props.product.description}</h6>
                  <h6>{props.product.value}</h6>
            </div>
        </div>
    
    )

    }