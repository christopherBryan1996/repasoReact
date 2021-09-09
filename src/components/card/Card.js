import React from "react"
import { Link } from "react-router-dom"
export default class Card extends React.Component{
    render() {
        return <div>
            <Link to={`/character/${this.props.id}`}>
                <h3>{this.props.name}</h3>
                <img src={this.props.image} alt='personaje'/>
            </Link>
        </div>
    }
}