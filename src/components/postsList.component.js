/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
require('dotenv').config();

const PostSchema = props => (
<tr>
    <td>{props.post.title}</td>
    <td>{props.post.description}</td>
    <td>{props.post.date}</td>
    <td>
    <Link to={"/view/"+props.post._id}>View</Link> | <Link to={"/edit/"+props.post._id}>Edit</Link> | <a href="#" onClick={() => { props.deletePost(props.post._id) }}>Delete</a>
    </td>
</tr>
)

export default class PostsList extends Component {
    constructor(props) {
        super(props)
        //Binding the "this" to the function
        this.deletePost = this.deletePost.bind(this)

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + `/posts`)
            .then(response => {
                console.log(`posts: `,response.data)
                this.setState({
                    posts: response.data
                })
            })
            .catch((error) => {
                console.log(`error: `,error)
            })
    }

    deletePost(id) {
        axios.delete(process.env.REACT_APP_API_URL + id)
            .then(response => {
                console.log(response.data)
            });
    
            this.setState({
            posts: this.state.posts.filter(post => post._id !== id)
            })
        }
    
    displayPostList() {
    return this.state.posts.map(post => {
        return <PostSchema post={post} deletePost={this.deletePost} key={post._id}/>;
    })
    }

    render() {
        return (
            <div>
            <h3>Posts List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.displayPostList() }
                    </tbody>
                </table>
            </div>
        )
    }
}