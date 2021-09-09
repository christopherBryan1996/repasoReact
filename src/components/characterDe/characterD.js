import React from "react"
export default class CharacterDatail extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            character:{}
        }
    }
    getCharacterById = ()=>{
        fetch(`https://rickandmortyapi.com/api/character/${this.props.characterId}`)
        .then(response=>response.json())
        .then(characterNew => this.setState({character:characterNew}))
    }
    componentDidMount(){// para que se ejecute la funcion
        this.getCharacterById()
    }
    render(){
        console.log(this.state)
        return <div>
            <h1>{this.state.character.name}</h1>
            <img src={this.state.character.image} alt='personaje'/>
            <p>Especie: {this.state.character.species}</p>
        </div>
    }
}