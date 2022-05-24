import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import bg from "../../../Assets/images/banner/slider-1.jpg";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  let errorElement;
  if (googleError || emailError) {
    errorElement = (
      <p className="text-red-500">
        <small>{googleError?.message || emailError?.message}</small>
      </p>
    );
  }
  if (googleLoading || emailLoading) {
    return <Loading />;
  }

  if (googleUser || emailUser) {
    navigate("/");
    console.log(googleUser || emailUser);
  }
  const onSubmit = async (data) => {
    console.log(data);
    await signInWithEmailAndPassword(data.email, data.password);
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
                <h2 className="text-primary text-2xl font-bold">Login</h2>
                <p>Welcome back again </p>
                {/* -----------Form----------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    {/* -----------Forget Password--------- */}
                    <label className="label">
                      <Link to="" className="label-text-alt link link-hover">
                        Forgot password?
                      </Link>
                    </label>
                  </div>
                  {/* -------------------Error Section------------- */}
                  <label className="label">{errorElement}</label>
                  {/* --------------Login------------ */}
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      className="btn btn-primary font-bold"
                      value="Login"
                    />
                  </div>
                </form>
                <p className="text-center">
                  <small>
                    New to Auto Zone?{" "}
                    <Link to="/signup" className="text-white">
                      Create New Account
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

export default Login;
