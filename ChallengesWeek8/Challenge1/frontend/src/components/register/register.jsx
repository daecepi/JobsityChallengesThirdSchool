import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Formik, Form, Field } from "formik";

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
            initialValues={{
              identification:'',
              name: '',
              lname: '',
              username: '',
              password: '',
              age: '',
              email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="identification" />
                {errors.identification && touched.identification ? (
                  <div>{errors.identification}</div>
                ) : null}
                <Field name="name" />
                {errors.name && touched.name ? (
                  <div>{errors.name}</div>
                ) : null}
                <Field name="lname" />
                {errors.lname && touched.lname ? (
                  <div>{errors.lname}</div>
                ) : null}
                <Field name="username" />
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
                ) : null}
                <Field name="passsword" type="password" />
                {errors.passsword && touched.passsword ? (
                  <div>{errors.passsword}</div>
                ) : null}
                <Field name="age" type="number" />
                {errors.age && touched.age ? <div>{errors.age}</div> : null}
                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <button type="submit">Submit</button>
              </Form>
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
