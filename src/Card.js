import "./Card.css";
import { Component } from "react";
import profilePic from "./image-victor.jpg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Victor Crest",
      userage: "26",
      userpic: "./image-victor.jpg",
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
        <UserProfilePicture userProfilePicture={profilePic} />
        <ProfileContainer>
          <div className="card__container-title">
            <UserName userName={this.state.username} />
            <UserAge userAge={this.state.userage} />
          </div>
          <UserLocation userLocation={this.state.userlocation} />
          <span className="card__divider" />
          <div className="card__stats-container">
            <div className="card__stats">
              <UserFollowers userFollowers={this.state.followers} />
              <p className="card__stats-label">Followers</p>
            </div>
            <div className="card__stats">
              {" "}
              <UserLikes userLikes={this.state.likes} />
              <p className="card__stats-label">Likes</p>
            </div>
            <div className="card__stats">
              {" "}
              <UserPhotos userPhotos={this.state.photos} />
              <p className="card__stats-label">Photos</p>
            </div>
          </div>
        </ProfileContainer>
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
  return (
    <img
      className="card__profile-picture"
      src={props.userProfilePicture}
      alt="User profile"
    />
  );
};

const UserName = (props) => {
  return <h1 className="card__user-name">{props.userName}</h1>;
};

const UserAge = (props) => {
  return <p className="card__user-age">{props.userAge}</p>;
};

const UserLocation = (props) => {
  return <p className="card__user-location">{props.userLocation}</p>;
};

const UserFollowers = (props) => {
  return <p className="card__followers card__stats-title">{props.userFollowers}</p>;
};

const UserLikes = (props) => {
  return <p className="card__likes card__stats-title">{props.userLikes}</p>;
};

const UserPhotos = (props) => {
  return <p className="card__photos card__stats-title">{props.userPhotos}</p>;
};

export default Card;
