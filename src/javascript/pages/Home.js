import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/Card'
import allPosts, { recentPosts } from '../utils/posts'

export default class Index extends React.Component {
    componentDidMount() {
        document.title = 'gr4y.me'
    }

    render() {
        return (
          <div className="fadeInUp">
            <section className="container">
              <h1 className="col-1-of-1 headline">recent posts</h1>
            </section>
            <section className="container posts">
                 {recentPosts.map(post => {
                  const className = {
                  className: post.properties !== null
                    ? ['card', post.properties.className].join(' ')
                    : 'card',
                }     
                const size = post.properties !== null ? 'large' : 'small';
                    return (
                  <Card post={post} className={className} size={size} key={post.order} />
                )    
              })}
            </section>
            <section className="container">
    
            <Link to="/blog" className="btn"><h1 className="col-1-of-1 headline">more posts</h1></Link> 
              </section>
          </div>
        )
    }
}