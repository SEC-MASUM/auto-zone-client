import { async } from "@firebase/util";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../../../Assets/images/banner/slider-1.jpg";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorElement, setErrorElement] = useState("");

  const navigate = useNavigate();

  let errorMessage;
  if (googleError || emailError || updateError) {
    errorMessage =
      googleError?.message || emailError?.message || updateError?.message;
    setErrorElement(errorMessage);
  }
  if (googleLoading || emailLoading || updating) {
    return <Loading />;
  }

  if (googleUser || emailUser) {
    navigate("/");
    console.log(googleUser || emailUser);
  }
  const onSubmit = async (data) => {
    console.log(data);
    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      toast.info("Sent email verification", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      await updateProfile({ displayName: data.name });
    } else {
      errorMessage = "Please Confirm your Password";
      setErrorElement(errorMessage);
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60">
          <div className="min-h-screen max-h-fit flex justify-center items-center my-10 px-2">
            <div className="card w-full md:max-w-sm shadow-2xl glass ">
              <div className="card-body">
                <h2 className="text-primary text-2xl font-bold">Sign Up</h2>
                <p>Create your brand new account</p>
                {/* -----------Form----------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* -----------Name Field-------------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered glass"
                      {...register("name", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    <label className="label">
                      {errors.name && (
                        <span className="label-text-alt text-primary">
                          Name is required
                        </span>
                      )}
                    </label>
                  </div>
                  {/* -----------Email Field-------------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered glass"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {/* errors will return when field validation fails  */}
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt  text-red-600">
                          {errors.email?.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt  text-red-600">
                          {errors.email?.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* -------------Password Field--------------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered glass"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Password must be 6 character or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* -------------Confirm Password Field--------------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="input input-bordered glass"
                      {...register("confirmPassword", {
                        required: {
                          value: true,
                          message: "Confirm Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Password must be 6 character or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.confirmPassword?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                      {errors.confirmPassword?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* -------------------Error Section------------- */}
                  <p className="text-red-500">
                    <small>{errorElement}</small>
                  </p>

                  {/* ------------ Sign Up-------------- */}
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      className="btn btn-primary font-bold"
                      value="Sign Up"
                    />
                  </div>
                </form>
                <p className="text-center">
                  <small>
                    Already have an account?{" "}
                    <Link to="/login" className="text-white">
                      Please Login
                    </Link>
                  </small>
                </p>

                {/* --------------Divider----------- */}
                <div className="divider">OR</div>
                {/* -----------Social Login--------- */}
                <button
                  onClick={() => signInWithGoogle()}
                  className="btn btn-outline"
                >
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
