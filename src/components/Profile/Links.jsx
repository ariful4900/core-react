import React from 'react'

const Links = ({links}) => {
    return (
        <div className="links">
            <h3>Social Links</h3>
            <ul>
                {
                    links.map(link =>
                        <li key={link.id}><a href="/">{link}</a></li>
                    )
                }
            </ul>
        </div>
    )
}

export default Links
