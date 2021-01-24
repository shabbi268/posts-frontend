import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import './postCreate.css';
require('dotenv').config();

export default class PostsCreate extends Component {
    constructor(props) {
        super(props);

        //binding the functions with the "this" so that functions know what this its referring to.
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            title: "",
            description: "",
            date: new Date()
        }
    }

    onChangeTitle(title) {
        this.setState({
            title: title.target.value
        })
    };
    onChangeDescription(description) {
        this.setState({
            description: description.target.value
        })
    };
    onChangeDate(date) {
        this.setState({
            date: date
        })
    };

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        }
        console.log(`post: `,post);
        console.log(`process.env.REACT_APP_API_URL: `,process.env.REACT_APP_API_URL);

        axios.post(process.env.REACT_APP_API_URL + `/posts/add`, post)
            .then(res => console.log(res.data))
        window.location = '/posts';
    }

    render() {
        return (
            <div>
            <h3 className='h3'>Create New Post</h3>
            <form onSubmit={this.onSubmit} className='form'>
                <div className="form-group"> 
                    <label>Title: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                    />
                    </div>
                </div>
        
                <div className="form-group">
                    <button id="button" data-testid="createPost" type="submit" label="Create New Post" className="btn btn-primary">Create Post</button>
                </div>
                </form>
            </div>
        )
    }
}