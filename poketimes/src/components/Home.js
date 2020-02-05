import React, { Component } from 'react'
import axios from 'axios'
import { link } from 'react-router-dom'
import Pokeball from '../pokeball.jpg'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res)
        this.ListeningStateChangedEvent({
            posts: res.data.slice(0, 10)
        })
    })
}

    render () {
        const { post } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={posts.id}>
                        <img src={Pokeball} alt="A Pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts </div>
        )
    return (
        <div clasName="container">
            <h4 clasName="center">Home</h4>
            <p>{postList} </p>
        </div>
    )
}
}
export default Home