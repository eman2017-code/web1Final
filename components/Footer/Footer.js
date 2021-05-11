import React from 'react'

// social media icon imports
import { 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaYoutube,
    FaSpotify,
    FaApple,
    FaSoundcloud
} from "react-icons/fa";

function Footer() {
    const size = "1.3em";

    return (
        <div>
            <div id="joinNow">
                <input type="text" />
                <button>
                    <span>join</span>
                </button>
            </div>
            <ul id="socialMedia">
                <li>
                    <a href="https://www.facebook.com/juiceworldddd/" target="_blank" rel="noreferrer">
                        <FaFacebookF size={size} className="socialMediaIcon" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/juiceworlddd" target="_blank" rel="noreferrer">
                        <FaTwitter size={size} className="socialMediaIcon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/juicewrld999/?hl=en" target="_blank" rel="noreferrer">
                        <FaInstagram size={size} className="socialMediaIcon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UC0BletW9phE4xHFM44q4qKA" target="_blank" rel="noreferrer">
                        <FaYoutube size={size} className="socialMediaIcon" />
                    </a>
                </li>
                <li>
                    <a href="https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz" target="_blank" rel="noreferrer">
                        <FaSpotify size={size} className="socialMediaIcon" />
                    </a>
                </li>
                <li>
                    <a href="https://music.apple.com/us/artist/juice-wrld/1368733420" target="_blank" rel="noreferrer">
                        <FaApple size={size} className="socialMediaIcon" />
                    </a>
                </li>
                <li>
                    <a href="https://soundcloud.com/uiceheidd" target="_blank" rel="noreferrer">
                        <FaSoundcloud size={size} />
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Footer;