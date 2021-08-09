import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function EditProfile({ profileID }) {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "#fff",
      fontFamily: "Nunito",
      // textAlign: 'center',
    },
    button: {
      color: "#fff",
      backgroundColor: "#FCC4D6",
      fontSize: "1.5rem",
      margin: "1.5px",
      borderRadius: 3,
      borderColor: "rgba(0,0,0,0.08)",
      borderWidth: 0.3,
    },
    colorText: {
      color: "#FCC4D6",
    },
    title: {
      fontSize: "3rem",
    },
  }));
  const classes = useStyles();
  const updatedProfile = {
    username: name,
    location: location,
    bio: bio,
    gender: gender,
  };
  function handleClick(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/profiles/${profileID}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json)
      .then((data) => history.push("/profile"));
  }
  return (
    <div className="editProfile">
      <h1 className={classes.title}>
        Update <span className={classes.colorText}>Profile</span>
      </h1>
      <br />
      <br />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Row>
          <Col>
            Location:
            <Form.Control
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
          </Col>
          <Col>
            Gender:
            <Form.Control
              onChange={(e) => setGender(e.target.value)}
              placeholder="Gender"
            />
          </Col>
        </Row>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>Bio:</Form.Label>
          <Form.Control
            onChange={(e) => setBio(e.target.value)}
            type="Bio"
            placeholder="Bio"
          />
        </Form.Group>
        <button onClick={handleClick} className="profile-btn">
          Save Changes
        </button>
      </Form>
    </div>
  );
}

export default EditProfile;
