//Andrew Clark - Recomposing your React application at react-europe 2016
import React from 'react';

const fetchResource = get => WraperComponent =>

class extends React.Component{
  state={
    resource: null
  }
  componentDidMount(){
    get(this.props)
      .then(resurce=>{
        this.setState({
          resource
        })
      })
  }
  render(){
    const {resource}=this.state
    return<Post {...this.porps} {...resource} />
  }
}

const fetchPost = fetchResource(props=> fetch(`/post/${props.id}`))
const PostContainer = fetchPost(Post);