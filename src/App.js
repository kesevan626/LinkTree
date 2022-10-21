import image from './IMG_2333.JPG'

function App() {
  return (
    <div className="container">
      <div className="main-section">
          <div className="content">
            <div className="profile-section">
                <img src={image} id="profile_img" alt="" />
                <div id="twitter">kesevenHayden</div>
                <h3 hidden id="slack">Jacob Peter</h3>
            </div>
            <div className="link-section">
                <a href="https://training.zuri.team/"><button className="btn">Twitter Link</button></a>
                <a href="https://training.zuri.team/"><button className="btn" id="btn__zuri">Zuri Teams</button></a>
                <a href="http://books.zuri.team"><button className="btn" id='books'>Zuri Books</button></a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>">
                  <button className="btn" id="book__python">
                    Python Books
                  </button>
                </a>
                <a href="https://background.zuri.team"><button className="btn" id="pitch">Background checks for color</button></a>
                <a href="https://books.zuri.team/design-rules"><button className="btn" id="book__design">Design Books</button></a>
            </div>
            <div className="social-section">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="content">
              <p>Zuri<span>.</span> Internship </p>
              <p className="text-muted">HNG Internship 9 Frontend Task</p>
              <p>Ingressive for Good</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
