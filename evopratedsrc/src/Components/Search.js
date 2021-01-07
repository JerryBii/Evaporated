import React from "react"
import Button from 'react-bootstrap/Button'
import './ComponentCSS/Login.css'

function Search() {
    fetch('http://localhost:3001/api/evaporated',
        {
            method: "GET"
        })
        .then(response =>{
            console.log(response.json());
        })

    return (
        <div className = "center">
            <Button variant="primary" size="lg" active>
                Primary button
            </Button>
        </div>
    );
}

export default Search;