import React from "react";
import { Link } from "react-router-dom";
import "./componentStyle.css";

export default class ShowingTameplate extends React.Component {
  constructor() {
    super();
    this.state = {
      memes: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          memes: json.data.memes,
          isLoaded: true
        });
        // console.log(this.state.memes);
      });
  }
  render() {
    const { memes, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <h1 style={{ marginLeft: "35px" }}>Below are The Template Images</h1>
          <p style={{ color: "red" }}>
            [*Note: Copy your favourite Template_Id from below to generate your
            memes.]
          </p>
          <Link className="tameplate_link" to="/creatememes">
            Create Your Own Memes
          </Link>
          <Link className="tameplate_link" to="/">
            Go to Home Page
          </Link>
          <br /> <br />
          {memes.map((meme) => (
            <div>
              <p style={{ fontSize: "20px" }}>Template-Id is - {meme.id}</p>
              <img
                key={meme.id}
                src={meme.url}
                alt="Not Found"
                width="300px"
                height="300px"
              />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}
