// component imports
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

// image imports
import juiceWrldMusicCover3 from '../../assets/juiceWrldMusicCover3.webp'
import juiceWrldMusicCover2 from '../../assets/juiceWrldMusicCover2.jpg'
import juiceWrldMusicCover7 from '../../assets/juiceWrldMusicCover7.jpg'
import juiceWrldMusicCover4 from '../../assets/juiceWrldMusicCover4.webp'
import juiceWrldMusicCover5 from '../../assets/juiceWrldMusicCover5.jpeg'
import juiceWrldMusicCover8 from '../../assets/juiceWrldMusicCover8.jpeg'
import juiceWrldMusicCover1 from '../../assets/juiceWrldMusicCover1.jpeg'

function MusicAndVideo() {
    return (
        <div>
            <Nav />
                <div id="musicAndVideo">
                    <div className="leftDiv">
                        <h3>MUSIC</h3>
                        <div className="container_musicAndVideo">
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                        </div>
                        <div className="container_musicAndVideo">
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                        </div>
                        <div className="container_musicAndVideo">
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="rightDiv">
                        <h3>VIDEO</h3>
                        <div className="container_musicAndVideo">
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                        </div>
                        <div className="container_musicAndVideo">
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                        </div>
                        <div className="container_musicAndVideo">
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                            <div className="item">
                                <img src={juiceWrldMusicCover2} alt="juice world merch item" />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default MusicAndVideo