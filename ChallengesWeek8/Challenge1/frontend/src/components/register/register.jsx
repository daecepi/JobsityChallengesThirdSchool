import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import { Formik } from "formik";

//Styling imports
import "./register.scss";

//External components used
import NotificationAlert from 'react-notification-alert';
import "react-notification-alert/dist/animate.css";

class Register extends Component {

  displayNotification = (message) =>{
    this.refs.notificationAlert.notificationAlert({
      place: 'br',
      message: (
            <div className="notification-container">
                {message}
            </div>
        ),
      type: 'danger',
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 2,
      closeButton: false
    });
  }

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
    console.log('result');
    console.log(authResult);
    if (authResult.statusCode === 404) {
      this.displayNotification(authResult.message);
    } else if(authResult.state === "success"){
      console.log("entre");
      this.displayNotification("success");
      this.props.history.push("/login");
    }else{
      this.displayNotification(authResult.message);
    }
}

  render() {
    return (
      <div className="full-container">
        <div className="container-register">
          <h2>Register</h2>
          <Formik
            initialValues={{ identification: '',name: '', lname:'', username: '', password: '', age: '', email: '' }}
            validate={values => {
              let errors = {};
              // Identification validators
              if (!values.identification) {
                errors.identification = 'Required';
              }
              if (
                !/^[0-9.']+$/.test(values.identification)
              ) {
                errors.identification = 'Put a valid id'; //In Colombia ids consist on numbers
              }

              //Name validators
              if (!values.name) {
                errors.name = 'Required';
              }
              if (
                !/^[A-Za-zñáéíóú ]+$/.test(values.name)
              ) {
                errors.name = 'A name only has letters and spaces';
              }

              //Last name validators
              if (!values.lname) {
                errors.lname = 'Required';
              }
              if (
                !/^[A-Za-zñáéíóú ]+$/.test(values.lname)
              ) {
                errors.lname = 'A last name only has letters and spaces';
              }

              //Validators for username
              if (!values.username) {
                errors.username = 'Required';
              }
              if (
                !/^[A-Za-z]+[0-9]*[A-Za-z]+$/.test(values.username)
              ) {
                errors.username = 'A username only has letters (áéíóú are not available here)';
              }

              //Validators for password
              if (!values.password) {
                errors.password = 'Required';
              }
              if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])(?=.{8,})/.test(values.password)
              ) {
                errors.password = 'Password must contain Upper and lower case letters, numbers and special characters';
              }

              //Validators for age
              if (!values.age) {
                errors.age = 'Required';
              }
              if (
                !/^[0-9]+$/.test(values.age)
              ) {
                errors.age = 'A name only has letters and spaces';
              }

              //Validators for password
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                this.registerUsing(values).then(()=>{
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
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
              <label htmlFor="identification">Identification: </label>
              <input
                type="number"
                name="identification"
                className="secondary-input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.identification}
              />
              <p>{errors.identification && touched.identification && errors.identification}</p>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  className="secondary-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p>{errors.name && touched.name && errors.name}</p>
                <label htmlFor="lname">Last name: </label>
                <input
                  type="text"
                  name="lname"
                  className="secondary-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lname}
                />
                <p>{errors.lname && touched.lname && errors.lname}</p>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  className="secondary-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <p>{errors.username && touched.username && errors.username}</p>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  className="secondary-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p>{errors.password && touched.password && errors.password}</p>
                <label htmlFor="email">Age: </label>
                <input
                  type="number"
                  name="age"
                  className="secondary-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                <p>{errors.age && touched.age && errors.age}</p>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  className="secondary-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p>{errors.email && touched.email && errors.email}</p>
                <button  type="submit" className="button-register" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
        <NotificationAlert ref="notificationAlert" />
        <Link to="/login">
          <button className="move-button">Go back</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Register);
