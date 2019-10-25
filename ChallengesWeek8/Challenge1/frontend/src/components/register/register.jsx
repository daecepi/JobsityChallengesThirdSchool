import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Formik } from "formik";

//Styling imports
import "./register.scss";

//Components used

//Schemas used
import {SignupSchema} from "../../schemas/singup";

class Register extends Component {
  state = {
    identification: this.props.identification | "",
    name: this.props.name | "",
    lname: this.props.lname | "",
    username: this.props.username | "",
    password: this.props.password | "",
    age: this.props.age | "",
    email: this.props.email | ""
  };

  /**
   * Function that will handle the submit
   * @param event : contains the submit event object
   */
  handleSubmit = async (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.props);
    return (
      <div className="full-container">
        <div className="container-register">
          <h2>Register</h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              let errors = {};
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
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
                type="text"
                name="identification"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.identification}
              />
              <p>{errors.identification && touched.identification && errors.identification}</p>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p>{errors.name && touched.name && errors.name}</p>
                <label htmlFor="lname">Last name: </label>
                <input
                  type="text"
                  name="lname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lname}
                />
                <p>{errors.lname && touched.lname && errors.lname}</p>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <p>{errors.username && touched.username && errors.username}</p>
                <label htmlFor="password">Password: </label>
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p>{errors.password && touched.password && errors.password}</p>
                <label htmlFor="email">Age: </label>
                <input
                  type="number"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                <p>{errors.age && touched.age && errors.age}</p>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p>{errors.email && touched.email && errors.email}</p>
                <button type="submit" className="button-register" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
        <Link to="/login">
          <button className="move-button">Go back</button>
        </Link>
      </div>
    );
  }
}

export default Register;
