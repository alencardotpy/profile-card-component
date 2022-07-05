import "./Card.css";
import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Victor Crest",
      userage: "26",
      userlocation: "London",
      followers: "80K",
      likes: "803K",
      photos: "1.4K",
    };
  }
  render() {
    return (
      <div className="card">
        <Header />
      </div>
    );
  }
}

const ProfileContainer = (props) => {
  return <div className="card__container">{props.children}</div>;
};

const Header = () => {
  return <div className="card__header"></div>;
};

const UserProfilePicture = (props) => {
  return <img src={props.userProfilePicture} alt="User profile picture" />;
};

const UserName = (props) => {
  return <h1 className="card__user-name">{props.userName}</h1>;
};

const UserAge = (props) => {
  return <p className="card__user-location">{props.userAge}</p>;
};

const UserLocation = (props) => {
  return <p className="card__user-location">{props.userLocation}</p>;
};

const UserLikes = (props) => {
  return <p className="card__likes">{props.userLikes}</p>;
};

const UserPhotos = (props) => {
  return <p className="card__photos">{props.userPhotos}</p>;
};

export default Card;
