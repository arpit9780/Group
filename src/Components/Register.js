import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, NumberInput, TextInput } from "@mantine/core";
const getItem = () => {
  const list = localStorage.getItem("register");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const RegisterPage = () => {
  const [dt, setdt] = useState();

  const [val, setVal] = useState(getItem());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const list = JSON.parse(localStorage.getItem("register"));
    console.log(list);

    val.push(data);

    localStorage.setItem("register", JSON.stringify(val));

    console.log(val);

    reset();
  };
  return (
    <>
      <div className="arpit">
        <div className="container a">
          <div className="col-sm-6">
            <div
              className="container "
              style={{
                width: "500px",

                marginTop: "50px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Signup form</h1>

                <TextInput
                  style={{ fontWeight: "bold" }}
                  label="Name"
                  placeholder="Name"
                  {...register("name", {
                    required: "plzz fill the name",
                    minLength: {
                      value: 4,
                      message: "plzz fill minimum 4 character",
                    },
                  })}
                />
                {errors.name && (
                  <p style={{ color: "red" }} className="error">
                    {errors.name.message}
                  </p>
                )}
                <TextInput
                  style={{ fontWeight: "bold" }}
                  mt="sm"
                  label="Email"
                  placeholder="Email"
                  {...register("email", {
                    required: "plzz fill the email",
                    minLength: {
                      value: 4,
                      message: "plzz fill minimum 4 character",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p style={{ color: "red" }} className="error">
                    {errors.email.message}
                  </p>
                )}

                <TextInput
                  style={{ fontWeight: "bold" }}
                  mt="sm"
                  label="Address"
                  placeholder="Address"
                  {...register("address", {
                    required: "plzz fill the name",
                    minLength: {
                      value: 4,
                      message: "plzz fill minimum 4 character",
                    },
                  })}
                />
                {errors.address && (
                  <p style={{ color: "red" }} className="error">
                    {errors.address.message}
                  </p>
                )}
                <TextInput
                  style={{ fontWeight: "bold" }}
                  mt="sm"
                  label="Password"
                  placeholder="Password"
                  {...register("password", {
                    required: "plzz fill the name",
                    minLength: {
                      value: 4,
                      message: "plzz fill minimum 4 character",
                    },
                  })}
                />
                {errors.password && (
                  <p style={{ color: "red" }} className="error">
                    {errors.password.message}
                  </p>
                )}

                <Button type="submit" mt="sm" className="mb-5">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
