import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { Formik } from "formik";


//External components used
import NotificationAlert from "react-notification-alert";
import "react-notification-alert/dist/animate.css";


import { FullContainer, MoveButton } from '../../styles';
import { 
  ContainerRegister,
  StyledH2,
  StyledForm,
  RegisterPTag,
  StyledLabel,
  SecondaryInput,
  RegisterButton
 } from './registerInternals';

class Register extends Component {

  displayNotification = (message) => {
    this.refs.notificationAlert.notificationAlert({
      place: "br",
      message: <div className="notification-container">{message}</div>,
      type: "danger",
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 2,
      closeButton: false
    });
  };

  /**
   * Function that will handle the the registration of the user on the backend
   * @param user : recieves all the properties that a user needs for its registration
   */
  registerUsing = async (newUser) => {
    //Build the form-urlencoded version of it
    let formBody = [];
    for (let property in newUser) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(newUser[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    let authResult = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    }).then((res) => res.json());

    //validations after message
    if (authResult.statusCode === 404) {
      this.displayNotification(authResult.message);
    } else if (authResult.state === "success") {
      this.displayNotification("success");
      this.props.history.push("/login");
    } else {
      this.displayNotification(authResult.message);
    }
  };

  render() {
    return (
      <FullContainer>
        <ContainerRegister>
          <StyledH2>Register</StyledH2>
          <Formik
            initialValues={{ identification: "", name: "", lname: "", username: "", password: "", age: "", email: "" }}
            validate={(values) => {
              let errors = {};
              // Identification validators
              if (!values.identification) {
                errors.identification = "Required";
              }
              if (!/^[0-9.']+$/.test(values.identification)) {
                errors.identification = "Put a valid id"; //In Colombia ids consist on numbers
              }

              //Name validators
              if (!values.name) {
                errors.name = "Required";
              }
              if (!/^[A-Za-zñáéíóú ]+$/.test(values.name)) {
                errors.name = "A name only has letters and spaces";
              }

              //Last name validators
              if (!values.lname) {
                errors.lname = "Required";
              }
              if (!/^[A-Za-zñáéíóú ]+$/.test(values.lname)) {
                errors.lname = "A last name only has letters and spaces";
              }

              //Validators for username
              if (!values.username) {
                errors.username = "Required";
              }
              if (!/^[A-Za-z]+[0-9]*[A-Za-z]+$/.test(values.username)) {
                errors.username = "A username only has letters (áéíóú are not available here)";
              }

              //Validators for password
              if (!values.password) {
                errors.password = "Required";
              }
              if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])(?=.{8,})/.test(values.password)) {
                errors.password = "Password must contain Upper and lower case letters, numbers and special characters";
              }

              //Validators for age
              if (!values.age) {
                errors.age = "Required";
              }
              if (!/^[0-9]+$/.test(values.age)) {
                errors.age = "A name only has letters and spaces";
              }

              //Validators for password
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.registerUsing(values).then(() => {
                setSubmitting(false);
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledLabel htmlFor="identification">Identification: </StyledLabel>
                <SecondaryInput
                  type="number"
                  name="identification"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.identification}
                />
                <RegisterPTag>{errors.identification && touched.identification && errors.identification}</RegisterPTag>
                <StyledLabel htmlFor="name">Name: </StyledLabel>
                <SecondaryInput
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <RegisterPTag>{errors.name && touched.name && errors.name}</RegisterPTag>
                <StyledLabel htmlFor="lname">Last name: </StyledLabel>
                <SecondaryInput
                  type="text"
                  name="lname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lname}
                />
                <RegisterPTag>{errors.lname && touched.lname && errors.lname}</RegisterPTag>
                <StyledLabel htmlFor="username">Username: </StyledLabel>
                <SecondaryInput
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <RegisterPTag>{errors.username && touched.username && errors.username}</RegisterPTag>
                <StyledLabel htmlFor="password">Password: </StyledLabel>
                <SecondaryInput
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <RegisterPTag>{errors.password && touched.password && errors.password}</RegisterPTag>
                <StyledLabel htmlFor="email">Age: </StyledLabel>
                <SecondaryInput
                  type="number"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                <RegisterPTag>{errors.age && touched.age && errors.age}</RegisterPTag>
                <StyledLabel htmlFor="email">Email: </StyledLabel>
                <SecondaryInput
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <RegisterPTag>{errors.email && touched.email && errors.email}</RegisterPTag>
                <RegisterButton type="submit" disabled={isSubmitting}>
                  Submit
                </RegisterButton>
              </StyledForm>
            )}
          </Formik>
        </ContainerRegister>
        <NotificationAlert ref="notificationAlert" />
        <Link to="/login">
          <MoveButton className="move-button">Go back</MoveButton>
        </Link>
      </FullContainer>
    );
  }
}

export default withRouter(Register);
