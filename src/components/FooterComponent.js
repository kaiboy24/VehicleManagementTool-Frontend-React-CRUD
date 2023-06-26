import React from 'react'

const FooterComponent = () => {
    return (
        <div>
            <footer className = "footer">
                 <span className="white-text">
                    Kamal Mohamedsalih
                 </span>
                 <br/>
                 <a  href = "https://www.linkedin.com/in/kamal-mohamedsalih-104616264/" className="white-text">
                   My linkedin
                    </a>{', '}
                    <a  href = "https://github.com/kaiboy24" className="white-text">
                    My Github
                    </a>
            </footer>
        </div>
    )
}

export default FooterComponent