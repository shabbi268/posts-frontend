/* eslint-disable jest/valid-expect */
import React from 'react';
import ReactDOM from 'react-dom';
import PostsCreate from '../postCreate.component';
import { shallow } from 'enzyme';
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

//cleans the render dom tree after each test case
afterEach(cleanup);

it('Rendered without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsCreate></PostsCreate>, div)
});

// one way for checking the textContent of elements
it('renders the save button correctly', () => {
    const {getByTestId} = render(<PostsCreate></PostsCreate>);
    expect(getByTestId('createPost')).toHaveTextContent('Create Post');
});

// other way of testing the element's textContent
it('renders h1 tag correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsCreate></PostsCreate>, div);
    // expect(div.querySelector('h3') === 'Create New Post');
    expect(div.querySelector('h3').textContent).toBe('Create New Post');
});

it('check for button element', () => {
    const root = shallow((<PostsCreate></PostsCreate>));
    expect(root.find("button").length).toBe(1)
    // root.find('button').simulate('click');
    // expect(mockCallBack.mock.calls.length).toEqual(1);
});

it('simulate button click', () => {
    const { getByText, getByLabelText } = render(<PostsCreate></PostsCreate>)
    fireEvent.click(getByText('Create Post'));
});

it('renders label tag correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsCreate></PostsCreate>, div);
    expect(div.querySelector('label').textContent).toBe('Title: ');
});