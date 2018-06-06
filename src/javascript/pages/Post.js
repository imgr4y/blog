import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


import allPosts from 'utils/posts'

export default class Post extends React.Component {
    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
      }).isRequired,
    }

    state = {
        slug: this.props.match.params.slug,
        post: {},
        component: () => null,
        title: '',
        date: '',
        isLoading: 'fadeInUp'
    }

    componentWillMount() {
        this.updatePost(this.props.match.params.slug)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: 'fadeOutDown' })
        setTimeout(() => this.updatePost(nextProps.match.params.slug), 500)
    }

    updatePost = (slug) => {
        const post = allPosts.find(c => c.slug === slug)

        if (!post) {
            return this.setState({ post })
        }

        this.setState({
            component: post.loadComponent,
            title: post.title,
            date: post.date,
            order: post.order,
            isLoading: 'fadeInUp',
        })

        document.title = `${post.title} | gr4y.me`
    }

    renderPost = () => {
        const {
            title,
            date,
            isLoading
        } = this.state

        return (
            <div className={isLoading}>
                <section className="post-cover container">
                    {/* image goes here */}
                </section>
                <div className="post-overview">
                    <section className="container">
                        <div className="overview">
                            <div className="title-info">
                                <h3>{this.state.title}</h3>
                                <h4>{this.state.date}</h4>
                            </div>
                            <div>
                                {this.state.component()}
                                
                                <Link to="/blog/" className="btn"><h4 className="col-1-of-1 headline">&#8592; back</h4></Link> 
                            </div>
                        </div>
    
                    </section>
                </div>
            </div>
        )
    }

    render() {
        return this.state.post ? this.renderPost() : <nothing />
    }

}