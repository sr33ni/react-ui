import React, { useState } from "react"

const Sample_page = () => {
     const [color, setColor] = useState("null")

     const [blogs, setBlogs] = useState([
        {id :  1,
        blogname : "red paint",
        blogcontent : "Lorem ipsum dolor sit amet, eam ne suavitate iudicabit patrioque. Nec agam alterum necessitatibus ne, sit eu tibique iracundia reformidans, ius tritani denique ex. Tantas oblique nominati et eum, impetus meliore consectetuer eam ne. No per quando lobortis, eam ea liber gubergren disputationi, ut quo brute salutandi.Mel ullum nulla an, tempor tacimates te mea. Vel ornatus disputando ea, cu sea dolore noster adipiscing. His ex vide ignota convenire. Cu vim alia voluptatum, nam et labore persecuti. Vis diam rebum atqui ex, mel iuvaret deterruisset in. Wisi veritus feugait ne vix, ex explicari adipiscing mea. Ne eleifend aliquando eos, sed dolore fabellas "
        },
        {id :  2,
            blogname : "Startdust",
            blogcontent : "Lorem ipsum dolor sit amet, eam ne suavitate iudicabit patrioque. Nec agam alterum necessitatibus ne, sit eu tibique iracundia reformidans, ius tritani denique ex. Tantas oblique nominati et eum, impetus meliore consectetuer eam ne. No per quando lobortis, eam ea liber gubergren disputationi, ut quo brute salutandi.Mel ullum nulla an, tempor tacimates te mea. Vel ornatus disputando ea, cu sea dolore noster adipiscing. His ex vide ignota convenire. Cu vim alia voluptatum, nam et labore persecuti. Vis diam rebum atqui ex, mel iuvaret deterruisset in. Wisi veritus feugait ne vix, ex explicari adipiscing mea. Ne eleifend aliquando eos, sed dolore fabellas "
            },
            {id :  3,
                blogname : "killer croc",
                blogcontent : "Lorem ipsum dolor sit amet, eam ne suavitate iudicabit patrioque. Nec agam alterum necessitatibus ne, sit eu tibique iracundia reformidans, ius tritani denique ex. Tantas oblique nominati et eum, impetus meliore consectetuer eam ne. No per quando lobortis, eam ea liber gubergren disputationi, ut quo brute salutandi.Mel ullum nulla an, tempor tacimates te mea. Vel ornatus disputando ea, cu sea dolore noster adipiscing. His ex vide ignota convenire. Cu vim alia voluptatum, nam et labore persecuti. Vis diam rebum atqui ex, mel iuvaret deterruisset in. Wisi veritus feugait ne vix, ex explicari adipiscing mea. Ne eleifend aliquando eos, sed dolore fabellas "
                },        {id :  4,
                    blogname : "magic men",
                    blogcontent : "Lorem ipsum dolor sit amet, eam ne suavitate iudicabit patrioque. Nec agam alterum necessitatibus ne, sit eu tibique iracundia reformidans, ius tritani denique ex. Tantas oblique nominati et eum, impetus meliore consectetuer eam ne. No per quando lobortis, eam ea liber gubergren disputationi, ut quo brute salutandi.Mel ullum nulla an, tempor tacimates te mea. Vel ornatus disputando ea, cu sea dolore noster adipiscing. His ex vide ignota convenire. Cu vim alia voluptatum, nam et labore persecuti. Vis diam rebum atqui ex, mel iuvaret deterruisset in. Wisi veritus feugait ne vix, ex explicari adipiscing mea. Ne eleifend aliquando eos, sed dolore fabellas "
                    }
     ]);
     const onclickhandle = () => {
         setColor(!color)
    }
    return(
        <div className="login-container">
            <h1> hello {color ? "red" : "noon"}man</h1>
            {/* <button onClick={() => {onclickhandle()}} className={(color ? "jkl" : "red")}>sss</button> */}
            <h2> hello {color ? "red" : "noon"}man</h2>
            <button onClick={onclickhandle} className={(color ? "jkl" : "red")}>sss</button>
            <div className="blog-container">
                {
                    blogs.map((blog) => 
                        (
                            <div className="blog-card" key={blog.id}>
                                <h1 className="red">{blog.blogname}</h1>
                                <p>{blog.blogcontent}</p>
                            </div>
                        ))
                }
            </div>

        </div>
    )
}

export default Sample_page