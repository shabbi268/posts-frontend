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
            <h3>Post View</h3>
            <div className="container" style={{ paddingTop: '30px', paddingLeft: '35px', paddingRight: '35px' }}>
                <div> 
                    <h4>Title: </h4>
                    <h5>{this.state.title}</h5>
                </div>
                <div> 
                    <h4>Description: </h4>
                    <h5>{this.state.description}</h5>
                </div>
                <div>
                    <h4>Date: </h4>
                    <h5>{new Date(this.state.date).toLocaleString()}</h5>
                </div>
                </div>
        </div>
        )
    }
}