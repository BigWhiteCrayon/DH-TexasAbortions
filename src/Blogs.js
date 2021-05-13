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
                    <ReactMarkdown 
                    components ={{h1:headerRenderer, h2:headerRenderer, p:textRenderer}}
                    key = {index}>{post}</ReactMarkdown>
            </ div>
            )
        )
    }
}

const headerRenderer = (props) => {
    if(props.level === 1){
        return(
            <div>
            <header className="Subtitle">{props.children[0]}</header>
            <div className="Divider" />
            </ div>
        );
    }
    else{
        return(
            <i className="Author">{props.children[0]}</i>
        );
    }
}

const textRenderer = (props) => {
    return(
        <text className="bodyText">{props.children[0]}</ text>
    );
}

export default Blogs;