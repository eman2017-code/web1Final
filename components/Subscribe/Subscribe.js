// component imports
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function Subscribe() {
    return (
        <div>
            <Nav />
            <h1 id="subscribe">Join Mailing List</h1>
            <div id="mailingList">
                <input type="text" />
                <button>
                    <span>SUBSCRIBE</span>
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default Subscribe