import React from 'react'

export default class CoordinatesButton extends React.Component{

    handleClick = (e) => {
        const coordinateArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinateArray)
    }
    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}
