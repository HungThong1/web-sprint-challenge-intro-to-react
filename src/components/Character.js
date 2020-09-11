// Write your Character component here
import React from "react"
import styled from "styled-components"
const StyledCharacter = styled.div`
.names {
}
h2{
    color: red;
    border: 6px solid green;
    background-color: black;
}`
const  Character = (props) => {
    const {name} = props
    return(
        <StyledCharacter className ="Character">
            <div className = "names">
                <h2>{name}</h2>
            </div>
        </StyledCharacter>
    )
}
export default Character