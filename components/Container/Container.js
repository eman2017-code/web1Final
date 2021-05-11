// component imports
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

//image imports
import juiceWorld from '../../assets/juiceWorldCoverPhoto.png'


function Container() {
    return (
        <div>
            <Nav />
                <div id="juiceWorldMainCover">
                    <img src={juiceWorld} alt="juice world" />
                </div>
                <div id="listenNow">
                    <a className="listen" href="/MusicAndVideo">
                        Listen Now
                    </a>
                </div>
                <div id="juiceWorldMainCover2">
                    <img src={juiceWorld} alt="juice world" />
                </div>
            <Footer />
        </div>
    )
}

export default Container;