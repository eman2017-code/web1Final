// component imports
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

// social media icon imports
import { FaCartPlus } from "react-icons/fa";

// image imports
import juiceWrldMerch1 from '../../assets/juiceWrldMerch1.jpeg'
import juiceWrldMerch2 from '../../assets/juiceWrldMerch2.png'
import juiceWrldMerch3 from '../../assets/juiceWrldMerch3.png'
import juiceWrldMerch5 from '../../assets/juiceWrldMerch5.jpeg'
import juiceWrldMerch6 from '../../assets/juiceWrldMerch6.jpeg'
import juiceWrldMerch7 from '../../assets/juiceWrldMerch7.png'
import juiceWrldMerch8 from '../../assets/juiceWrldMerch8.png'
import juiceWrldMerch9 from '../../assets/juiceWrldMerch9.png'
import juiceWrldMerch11 from '../../assets/juiceWrldMerch11.webp'
import juiceWrldMerch12 from '../../assets/juiceWrldMerch12.webp'
import juiceWrldMerch13 from '../../assets/juiceWrldMerch13.jpeg'
import juiceWrldMerch14 from '../../assets/juiceWrldMerch14.jpeg'
import juiceWrldMerch15 from '../../assets/juiceWrldMerch15.jpeg'
import juiceWrldMerch16 from '../../assets/juiceWrldMerch16.png'
import juiceWrldMerch17 from '../../assets/juiceWrldMerch17.jpeg'
import juiceWrldMerch18 from '../../assets/juiceWrldMerch18.jpeg'

function Store() {
    const size = "2em";

    return (
        <div id="store">
            <Nav />
                <nav id="navStore">
                    <ul>
                        <li>
                            <a href="/cart" target="_blank" rel="noreferrer">
                                <FaCartPlus size={size} />
                            </a>
                        </li>
                    </ul>
                </nav>
                <hr id="storeHorizontalLine"/>
                <div className="container">
                    <div class="flex-item">
                        <img src={juiceWrldMerch1} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch6} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch2} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch3} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch5} alt="juice world merch item" />
                    </div>
                </div>
                <div className="container">
                    <div class="flex-item">
                        <img src={juiceWrldMerch11} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch7} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch8} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch12} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch9} alt="juice world merch item" />
                    </div>
                </div>
                <div className="container">
                    <div class="flex-item">
                        <img src={juiceWrldMerch13} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch14} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch16} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch15} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch17} alt="juice world merch item" />
                    </div>
                    <div class="flex-item">
                        <img src={juiceWrldMerch18} alt="juice world merch item" />
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Store