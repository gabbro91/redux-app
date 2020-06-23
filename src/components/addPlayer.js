import React, { Fragment } from 'react';
export default function addPlayer(){
    return(
        <Fragment>
           <input ref = {this.playerInput}/>
    <button onClick = {this.addPlayer}>Add</button> 
        </Fragment>
    )
}