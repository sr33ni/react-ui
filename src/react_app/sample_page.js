import React, { useEffect, useState } from "react"
import Blog_component from "./blog_component"

const Sample_page = () => {
     const [color, setColor] = useState("null")

     const [blogs, setBlogs] = useState(null);
     const onclickhandle = () => {
        alert("red");
         setColor(!color)
    }
//     const bands = [
//         {
//     "id" :  1,
//     "bandname" : "led zeppelin",
//     "genre": "rock",
//     "about" : "Lorem ipsum dolor sit amet, eam ne suavitate iudicabit patrioque. Nec agam alterum necessitatibus ne, sit eu tibique iracundia reformidans, ius tritani denique ex. Tantas oblique nominati et eum, impetus meliore consectetuer eam ne. No per quando "
// },
// {
//     "id":  2,
//     "bandname" : "Nirvana",
//     "genre": "grung",
//     "about" : "Lorem ipsum dolor sit amet, eam ne suavitate iudicabit patrioque. Nec agam alterum necessitatibus ne, sit eu tibique iracundia reformidans, ius tritani denique ex. Tantas oblique nominati et eum, impetus meliore consectetuer eam ne. No per quando "

// }
        
//          ]
//      const [filter, setfilter] = useState("null")
    useEffect(
        () => {
            fetch('http://localhost:8000/blogs-data')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                console.log("koo");
            })
        },[]
    )
    let blogdelete = (id) =>{
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }
    return(
        <div>
                <div lassName="login-container">
            <h1> hello {color ? "red" : "noon"}man</h1>
            <h1> hello {color ? "red" : "noon"}man</h1>
            <button onClick={() => {onclickhandle()}} className={(color ? "jkl" : "red")}>sss</button>
            <h2> hello {color ? "red" : "noon"}man</h2>
            <button onClick={() => {onclickhandle()}} className={(color ? "jkl" : "red")}>sss</button>
            <select>
                    <option>aut</option>
                    <option>new</option>
                </select>

                {/* <div className="band-container">
                    {
                        bands.map((band) =>(
                                <div key={band.id}>
                                    <h1>{band.bandname}</h1>
                                    <h2>{band.genre}</h2>
                                    <h3>{band.about}</h3>
                                </div>

                        ))
                    }

                </div> */}


        </div>
        { blogs && <Blog_component  blogs={blogs} blog-delete={blogdelete} title="all Blogs"/>}
        { blogs &&           <Blog_component blogs={blogs.filter(blog => blog.blogauthor == "Spencer" )} blog-delete={blogdelete} title="spencer Blogs"/>}

        </div>

    )
}

export default Sample_page