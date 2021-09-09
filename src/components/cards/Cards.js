import React from "react"
import Card from "../card/Card"
export default class Cards extends React.Component{
    render(){
        return <div>
            {this.props.characters.map((character)=>{
                return <Card 
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={character.image}/>
            })}
        </div>
    }
}