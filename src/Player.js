import React from "react";
import Card from "react-bootstrap/Card";
function Player({ name, team, nationality, rate, img, age, jurseynum }) {
  const cardStyling = {
    width: "15rem",
    border: "1px solid grey",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
    borderRadius: "90px 0",
    backgroundColor: "hsl(240, 100%, 1%)",
    color: "white",
  };
//   const imageContainer = {
//     background: "url(https://i.ytimg.com/vi/vNsCCE8gZSw/maxresdefault.jpg)",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     paddingTop: 50,
//   };
  const imgStylling = {
    border: "2px solid yallow",
    width: "100%",
    height: "150px",
    objectFit: "cover",
  };
  const textstyle = {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  };

  return (
    <div>
      <div className="all"></div>
      <Card style={cardStyling}>
        <Card.Img variant="top" src={img} style={imgStylling} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <div style={textstyle}>
            Age: {age}
            <br />
            Number : {jurseynum}
            <br />
            Ratting : {rate}
            <br />
            National : {nationality}
            <br />
            Team : {team}
            <br />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Player;
