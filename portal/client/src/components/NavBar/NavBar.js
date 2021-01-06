import React from 'react';

const NavBar = (props) => {
    const handleLogout = () => {
        props.handleLogout();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h2 className="navbar-brand">Head CT Standalone qStudy</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item pr-4">
                            <a className="nav-link" href="#">Instructions</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={() => handleLogout()}>
                                Logout
                            </button>
                        </li>
                    </ul>                          
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
