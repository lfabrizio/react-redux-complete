import React, { Component } from 'react'
import { link } from 'react-router-dom'
import Pokeball from '../pokeball.jpg'
import { connect } from 'react-redux'

class Home extends Component {
    state = {
        posts: [ ]
    }


    render () {
        console.log(this.props)
        const { post } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
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
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home)