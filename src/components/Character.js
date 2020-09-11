// Write your Character component here
import React from "react"
const  Character = (props) => {
    const {name} = props
    return(
        <div className = "names">
            <h2>{name}</h2>
        </div>
    )
}
export default Character