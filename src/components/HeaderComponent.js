import React from 'react'


const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className = "justify-content-center navbar navbar-expand-md navbar-dark bg-black">
                    <div>
                        <a href = "http://localhost:3000" className = "navbar-brand">
                                Vehicle Management Tool
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent