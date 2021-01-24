import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config();

export default class PostsView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: "",
            description: "",
            date: new Date()
        }
    }
    componentDidMount() {
        console.log(`this.props.match.params._id: `,this.props.match.params.id);
        axios.get(process.env.REACT_APP_API_URL + `/posts/` + this.props.match.params.id)
            .then(response => {
                console.log(`VIEW posts: `,response.data)
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    date: new Date(response.data.date)
                })
            })
            .catch((error) => {
                console.log(`error: `,error)
            })
    }

    render() {
        return (
        <div>
            This is Post View Component.
            <form>
                <div className="form-group"> 
                    <label>Title: </label>
                    <p>{this.state.title}</p>
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <p>{this.state.description}</p>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <p>{new Date(this.state.date)}</p>
                </div>
                </form>
        </div>
        )
    }
}