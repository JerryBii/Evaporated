import React from "react"
import {Link} from "react-router-dom"
function NotFound() {
    return (
        <div>
            <h1>Uh Oh :( One of three things has happened:</h1>
            <h2>1. The user you're looking for doesn't exist<br />
            2. You aren't using your custom URL<br />
            3. The user has an empty or private library<br />
            </h2>
            <Link to="/">
                <button className = "return">Return to Search</button>
            </Link>
        </div>
    )
}

export default NotFound