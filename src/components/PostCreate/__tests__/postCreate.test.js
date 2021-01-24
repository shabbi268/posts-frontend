import React from 'react';
import ReactDOM from 'react-dom';
import PostsCreate from '../postCreate.component';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

//cleans the render dom tree after each test case
afterEach(cleanup);

it('Rendered without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsCreate></PostsCreate>, div)
});

it('renders the save button correctly', () => {
    const {getByTestId} = render(<PostsCreate></PostsCreate>);
    expect(getByTestId('createPost')).toHaveTextContent('Create New Post');

});