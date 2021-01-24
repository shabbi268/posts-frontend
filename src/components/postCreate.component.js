import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class PostsCreate extends Component {
    constructor(props) {
        super(props);
        
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
    }

    render() {
        return (
            <div>
            <h3>Create New Post</h3>
            <form onSubmit={this.onSubmit}>
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
                <input type="submit" value="Create New Post" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}