import React from 'react';

class Nav extends React.Component {
    state = {};

    render() {
        return(
            <div>
            <div>
                <h1 id="juiceWorld">
                    <a href="/">Juice Wrld</a>
                </h1>
                <div id="hamburgerMenu">
                    <div className="hamburgerMenu"></div>
                    <div className="hamburgerMenu"></div>
                    <div className="hamburgerMenu"></div>
                </div>
            </div>
                <nav>
                    <ul id="navLinks">
                        <li>
                            <strong>
                                <a href="/MusicAndVideo">MUSC + VIDEO</a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="/Store">STORE</a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href="/Subscribe">SUBSCRIBE</a>
                            </strong>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;