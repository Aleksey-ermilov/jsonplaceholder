import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { Formik } from "formik";
import * as yup from "yup";

import { createUser, editUser } from "../store/user/actionUser";

import FormInput from "../components/FormInput";
import Error from "../components/Error";
import Loader from "../components/Loader";

const CreateUser = ({ user, error, loading, createUser, editUser }) => {
  const history = useHistory();

  const validationsSchema = yup.object().shape({
    name: yup.string().required("Required field"),
    username: yup.string().required("Required field"),
    email: yup.string().email("Invalid email").required("Required field"),
  });

  const clickBtnSubmit = (value) => {
    if (user) {
      editUser(value).then(() =>
        history.push({
          pathname: "/",
        })
      );
      return;
    }

    createUser(value).then(() =>
      history.push({
        pathname: "/",
      })
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {error && <Error text={error.message} />}

      <h2 className="mt-3 mb-4">{user ? "Edit User" : "Create User"}</h2>
      <Formik
        initialValues={{
          name: user?.name,
          username: user?.username,
          email: user?.email,
        }}
        validateOnBlur
        onSubmit={clickBtnSubmit}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="text-start">
            <FormInput
              value={values.name}
              touched={touched.name}
              error={errors.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              name={"name"}
              label={"Name"}
            />

            <FormInput
              value={values.username}
              touched={touched.username}
              error={errors.username}
              handleChange={handleChange}
              handleBlur={handleBlur}
              name={"username"}
              label={"User name"}
            />

            <FormInput
              value={values.email}
              touched={touched.email}
              error={errors.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              name={"email"}
              label={"Email"}
            />

            <button
              className="btn btn-primary"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = {
  createUser,
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
