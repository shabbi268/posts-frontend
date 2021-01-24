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
    {/* <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deletePost(props.post._id) }}>Delete Post</a> */}
    </td>
</tr>
)

export default class PostsList extends Component {
    constructor(props) {
        super(props)
        //Binding the "this" to the function
        // this.deletePost = this.deletePost.bind(this)

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

    render() {
        return (
        <div>
            This is Posts List Component.
        </div>
        )
    }
}