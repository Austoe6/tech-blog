import React from 'react'
import Whitespace from '../layout-components/whitespace'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'
import Divider from '../layout-components/divider'
import { Row, Col } from '../layout-components/grid'
import Helmet from 'react-helmet'
import FeaturedPosts from '../components/FeaturedPosts';
import Title from '../components/Title';
import ReactDisqusComments from 'react-disqus-comments'
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookShareCount,

    TwitterIcon,
    TwitterShareButton,

    LinkedinIcon,
    LinkedinShareButton,
    LinkedinShareCount,

    WhatsappIcon,
    WhatsappShareButton
} from 'react-share'
import SignUpForm from '../components/SignUpForm';

class BlogPost extends React.Component{
    handleNewComment(comment) {
        /* eslint no-console:0 */
        console.log(comment);
    }

    render(){
        const {data, transition} = this.props
        const post = data.blogPost
        const postId = this.props.pathContext.id
        const postMeta = post.frontmatter
        const shareUrl = typeof window !== 'undefined' ? window.location.href : `http://wwww.techgenius.me/${post.fields.slug}`
        const title = postMeta.title
        //posts from the same category
        let relatedPosts = []
        data.relatedPosts.edges.map((post) => {
            if(post.node.id !== postId){
                relatedPosts = relatedPosts.concat(post)
            }
        })
        //recent posts
        let recentPosts = []
        data.recentPosts.edges.map((post) => {
            if(post.node.id !== postId){
                recentPosts = recentPosts.concat(post)
            }
        })

        return(
            <div  style={transition && transition.style} className='blog-post__container'>
                <Helmet
                    title={postMeta.title}
                    meta={[
                        { name: 'description', content: postMeta.description || 'TechGenius blog, we geek about technology, software, cars' },
                        { name: 'keywords', content: 'Technology, smartphones, cars, tech reviews' },
                      ]}
                />
                <Helmet>
                    <meta property="og:title" content={title} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={shareUrl} />
                    <meta property="og:image" content={`https://wwww.techgenius.me${postMeta.thumbnail}`} />
                    <meta property="og:description" content={ postMeta.description || 'Techgenius blog,  we geek about technology, software...'} />
                    <meta name="twitter:card" content="summary"/>
                </Helmet>
                <Whitespace height={160}/>
                <div className="blog-post__meta">
                    <h1>{postMeta.title}</h1>
                    <Whitespace height={60}/>
                    <Divider/>
                    <div className='blog-post__category container'>
                        <p>By {postMeta.author} . On {postMeta.date} in <Link to={`/categories/${kebabCase(postMeta.category)}`}>{postMeta.category}</Link> . {post.timeToRead} minutes read
                        </p>
                    </div>
                </div>
                <div className='blog-post__header-img' style={{backgroundImage: `url(${postMeta.thumbnail})`}}></div>
                <Whitespace height={60}/>
                <Row>
                    <Col lg={4} md={24} xs={24}>
                        <div className="blog-post__share-buttons">
                            <div className='blog-post__share-title'>
                                <Title title='share'/>
                            </div>
                            <a>
                                <FacebookShareButton
                                    url={shareUrl}
                                    quote={postMeta.title}
                                    className="blog-post__share-btn"
                                >
                                    <FacebookIcon
                                    size={48}
                                    round />
                                </FacebookShareButton>
                                <FacebookShareCount
                                    url={shareUrl}
                                    className="blog-post__share-count">
                                    {count => count}
                                </FacebookShareCount>
                            </a>
                            <a>
                            <TwitterShareButton
                                url={shareUrl}
                                title={title}
                                className="blog-post__share-btn">
                                <TwitterIcon
                                size={48}
                                round />
                            </TwitterShareButton>
                            </a>
                            <a>
                            <WhatsappShareButton
                                url={shareUrl}
                                title={title}
                                separator=":: "
                                className="blog-post__share-btn">
                                <WhatsappIcon size={48} round />
                            </WhatsappShareButton>
                            </a>
                            <a>
                            <LinkedinShareButton
                                url={shareUrl}
                                title={title}
                                windowWidth={750}
                                windowHeight={600}
                                className="blog-post__share-btn">
                                <LinkedinIcon
                                size={48}
                                round />
                            </LinkedinShareButton>
                            <LinkedinShareCount
                                url={shareUrl}
                                className="blog-post__share-count">
                                {count => count}
                            </LinkedinShareCount>
                            </a>
                        </div>
                        <div style={{paddingTop: 20}}>
                
                        </div>
                    </Col>
                    <Col lg={12} md={24} xs={24}>
                        <div
                            className='blog-post__body container'
                            dangerouslySetInnerHTML={{__html: post.html}}
                        />
                    </Col>
                    <Col lg={8} md={24} xs={24}>
                        <div className="blog-post__right-panel">
                            <Title title='Join our mail list'/>
                            <SignUpForm />
                    
                        </div>
                    </Col>
                </Row>
                <Whitespace height={60}/>
                <Divider />
                <div>
                    {
                        relatedPosts.length >= 1 ? 
                        <div>
                            <div className="container"><Title title='Related posts'/></div>
                            <FeaturedPosts posts={relatedPosts}/>
                        </div>
                        :
                        <div>
                            <div className="container"><Title title='Recent posts'/></div>
                            <FeaturedPosts posts={recentPosts.slice(0, 3)}/>
                        </div>
                    }
                </div>
                <Divider />
                <Whitespace height={40}/>
                <div className="blog-post__comments">
                <ReactDisqusComments
                    shortname="techgenius-1"
                    identifier={title}
                    title={title}
                    url={shareUrl}
                    onNewComment={this.handleNewComment}/>
                </div>
                <Whitespace/>
            </div>
        )
    }
}

export default BlogPost

export const blogPostQuery = graphql`
  query BlogPostByID($id: String!, $category: String) {
    blogPost:markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        description
        category
        author
      }
    }
    relatedPosts:allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            thumbnail
            author
          }
          excerpt
          timeToRead
        }
      }
    }
    recentPosts:allMarkdownRemark(
      limit: 1000
      filter: {frontmatter: {templateKey: {eq: "blog"}}}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            thumbnail
            author
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`