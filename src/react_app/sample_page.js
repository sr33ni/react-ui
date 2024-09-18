import React, { useEffect, useState } from "react"

const Sample_page = () => {
     const [color, setColor] = useState("null")

     const [blogs, setBlogs] = useState(null);
     const onclickhandle = () => {
         setColor(!color)
    }
    const [filter, setfilter] = useState("null")
    useEffect(
        () => {
            fetch('http://localhost:8000/blogs-data')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log("kiki");
                setBlogs(data)
            })
        },[]
    )
    let blogdelete = (id) =>{
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog)
    }
    return(
        <div className="login-container">
            <h1> hello {color ? "red" : "noon"}man</h1>
            {/* <button onClick={() => {onclickhandle()}} className={(color ? "jkl" : "red")}>sss</button> */}
            <h2> hello {color ? "red" : "noon"}man</h2>
            <button onClick={onclickhandle} className={(color ? "jkl" : "red")}>sss</button>
            <select>
                    <option>aut</option>
                    <option>new</option>
                </select>
            <div className="blog-container">
                {blogs &&
                    blogs.map((blog) => 
                        (
                            <div className="blog-card" key={blog.id}>
                                <h1 className="red">{blog.blogname}</h1>
                                <p>{blog.blogcontent}</p>
                                <h3>{blog.blogauthor}</h3>
                                <button onClick= {blogdelete}>delete</button>
                            </div>
                        ))
                }
            </div>

        </div>
    )
}

export default Sample_page