import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

//Styling imports
import "./register.scss";

//Components used
import SearchComponent from "../searchComponent/searchComponent";

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
            initialValues={{ name: "", password: "" }}
            validate={(values) => {
              let errors = {};
              if (!values.name) {
                errors.name = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)) {
                errors.name = "Invalid email address";
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
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="name"
                  render={({ field /* _form */ }) => (
                    <SearchComponent
                      {...field}
                      iconsName="fas fa-address-card"
                      type="text"
                      placeholder="Identification..."
                    />
                  )}
                />
                <ErrorMessage name="name" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <input className="button" type="submit" value="Register" disabled={isSubmitting} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Register;
