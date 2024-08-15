import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

const Breadcrumb_section = () => {
    let Breadcrumblocation = useLocation()
    let currentcrumb = ""
    const crumbs = Breadcrumblocation.pathname.split("/")
    .filter(crumb => crumb !=='')
    .map(crumb => {
        currentcrumb =+ `/${crumb}`
        return(
            <div key={crumb}>
                <NavLink to={currentcrumb}>{crumb}</NavLink>
            </div>
        )
    })
    return(
        <div className="Breadcrumb">
           {crumbs}
        </div>
    )
}

export default Breadcrumb_section