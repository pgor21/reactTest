import React, { Component } from 'react'

export default class post extends Component {
    state ={
        posts:[]
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts:data})
    }

    render() {
        return (
            <div>
                <h1>
                    Posts
                </h1>
                {
                    this.state.posts.map(post =>{
                        return <div key={post.id}>
                          <h1>{post.title}</h1>
                          <h1>{post.body}</h1>
                        </div>                    
                    })
                }
            </div>
        )
    }
}
