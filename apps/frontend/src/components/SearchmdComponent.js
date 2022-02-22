import React from 'react'
import searchmdService from '../services/SearchmdService'

class SearchmdComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            str: ""
        }
    }
    componentDidMount(){
        searchmdService.getString().then((Response)=>{
            this.setState({str:Response.data})
        });
    }
    render(){
        return(
        <div>
            <p> {this.state.str} </p>
        </div>
        )
    }
}
export default SearchmdComponent