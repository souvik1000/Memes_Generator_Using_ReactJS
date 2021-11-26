import React from "react";
import ShowingMemes from "./ShowingMemes";
import "./componentStyle.css";

export default class CreateMemes extends React.Component {
  constructor() {
    super();
    this.state = {
      ids: "",
      username: "Your_ImgFlip_UserName",
      password: "Your_ImgFlip_PassWord",
      topText: "",
      bottomText: "",
      url: "",
      isLoaded: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  afterButtonClick = () => {
    const data = {
      template_id: this.state.ids,
      username: this.state.username,
      password: this.state.password,
      text0: this.state.topText,
      text1: this.state.bottomText
    };

    fetch("https://api.imgflip.com/caption_image?", {
      method: "POST",
      body: new URLSearchParams(data)
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          url: json.data.url,
          isLoaded: true
        });
        // console.log(this.state.url);
      });
  };
  render() {
    const { isLoaded, url } = this.state;
    if (!isLoaded) {
      return (
        <div className="form_div">
          <form>
            <h1>Enter Some Details Below</h1>

            <input
              type="text"
              id="ids"
              name="ids"
              placeholder="Enter Template_Id"
              onChange={this.handleChange}
            />
            <br />

            <input
              type="text"
              id="topText"
              name="topText"
              placeholder="Enter topText"
              onChange={this.handleChange}
            />
            <br />

            <input
              type="text"
              id="bottomText"
              name="bottomText"
              placeholder="Enter bottomText"
              onChange={this.handleChange}
            />
            <br />

            <button type="button" onClick={this.afterButtonClick}>
              Click Now
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="image_div">
          <ShowingMemes url={url} />
        </div>
      );
    }
  }
}
