const Blog_component = ({ blogs, blogdelete, title }) => {

    return (
        <>
            <h2>{title}</h2>
            <div className="blog-container">
                {
                    blogs.map((blog) =>
                    (

                        <div className="blog-card" key={blog.id}>
                            <h1 className="red">{blog.blogname}</h1>
                            <p>{blog.blogcontent}</p>
                            <h3>{blog.blogauthor}</h3>
                            {<button onClick={blogdelete}>delete</button>}
                        </div>
                    ))
                }
            </div>
        </>

    )
}
export default Blog_component