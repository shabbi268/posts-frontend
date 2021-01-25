import React, { Component } from 'react';
import axios from 'axios';
import './postView.css';
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
        axios.get(process.env.REACT_APP_API_URL + `/posts/` + this.props.match.params.id)
            .then(response => {
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
            <div className="container">
                <div style={{ justifyContent: 'center', position: 'fixed' }}>
                    <p>Title: </p>
                    <h5>{this.state.title}</h5>
                    <p>Description: </p>
                    <h5>{this.state.description}</h5>
                    <p>Date: </p>
                    <h6>{new Date(this.state.date).toLocaleString()}</h6>
                </div>
            </div>
        </div>
        )
    }
}