import React from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

class Blogs extends React.Component{
    
    text = [];

    componentDidMount(){
        this.props.blogPosts.forEach((blogPost, index) =>
        fetch(blogPost).then(res => res.text())
        .then(text => {this.text[index] = text; this.setState({ready:'y'})}));
    }

    render(){
        return(
            this.text.map((post, index) => 
            <div className = "Card" key = {index}>
                    <ReactMarkdown 
                    components ={{h1:headerRenderer, h2:headerRenderer, h3:headerRenderer, p:textRenderer,
                    ul: listRederer}}
                    >{post}</ReactMarkdown>
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
    else if(props.level === 3){
        return(
            <div className="h3">{props.children[0]}</div>
        )
    }
    else{
        return(
            <i className="Author">{props.children[0]}</i>
        );
    }
}

const textRenderer = (props) => {
    return(
        <div className = "bodyTextBlog">
            {props.node.children.map((child, index) => {
                if(child.type === 'element' && child.tagName === 'a'){
                    return (<a  href = {child.properties.href} key = {index}>{child.children[0].value}</ a>);
                }
                else if(child.type === 'element' && child.tagName === 'em'){
                    return (<i   key = {index}>{child.children[0].value}</ i>);
                }
                else{
                    return child.value;
                }
            })}
        </ div>
    );
}

const listRederer = (props) => {
    console.log(props)
    return(
        <div className = "bodyTextList">
        {props.children.map((list, index) => {
            if(list !== "\n" && list.props.children){
                return (<div className="ListItem">{list.props.children.map((child) => {
                    if(child.type === 'a'){
                        
                    console.log(child.props.children[0])
                        return (<a  href = {child.props.href} key = {index}>{child.props.children[0]}</ a>);
                    }
                    else{
                        return child.value;
                    }
                })}<br /></ div>);
            }
            return (null);            
        })}
        </ div>
    )
}


export default Blogs;