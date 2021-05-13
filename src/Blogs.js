import React from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import test from './blogPosts/TEST.md';
import test2 from './blogPosts/Test2.md';

const blogPosts = [test,test2]; 

class Blogs extends React.Component{

    text = [];

    componentDidMount(){
        blogPosts.forEach((blogPost) =>
        fetch(blogPost).then(res => res.text())
        .then(text => {this.text.push(text); this.setState({ready:'y'})}));
    }

    render(){
        return(
            this.text.map((post, index) => 
            <div className = "Card">
                    <ReactMarkdown key = {index}>{post}</ReactMarkdown>
            </ div>
            )
        )
    }
}

export default Blogs;