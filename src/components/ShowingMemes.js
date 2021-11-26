import React from "react";

export default class ShowingMemes extends React.Component {
  render(props) {
    const url = this.props.url;
    return (
      <div>
        <h1
          className="animate__animated animate__rubberBand"
          style={{ color: "#8e00ec" }}
        >
          Your Meme is Showing Below
        </h1>
        {<img src={url} alt="Memes not Found" />}
      </div>
    );
  }
}
