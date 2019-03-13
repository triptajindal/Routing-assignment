import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './add.css'
class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,13)   // this will set the posts state with the data we are fetching, by adding fetch we are limiting it 20 posts
        })
      })


  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map( post => {
        return (
          <div className='post card' key={post.id}>
          <div className='c'>
            <div className='card-content'>
              <Link to={'/' + post.id}  >
                <span className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (<div className='center'>No posts yet</div>)

    return(
      <div>
        <div className='container center home'>
          { postList }
        </div>
      </div>
    )
  }
}

export default Home;
