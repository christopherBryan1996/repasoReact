import React from "react"
import { Link } from "react-router-dom"
export default class Nav extends React.Component{
    constructor (props){
        super(props)
        this.state ={
            search: ''
        }
    }
    onInpotChange=(e)=>{
        this.setState({
            search: e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault()
        this.props.searchByName(this.state.search)
        this.props.history.push('/search')
    }
    render(){
        console.log(this.state)
        return <div>
            <Link to='/'>
                <span>home</span>
            </Link>
            <form onSubmit={this.onSubmit}>
                <input type='text' name='search' onChange={this.onInpotChange} id=''/>
                <input type='submit' value='buscar'/>
            </form>
            <Link to='/about'>
                <span>about</span>
            </Link>
        </div>
    }
}