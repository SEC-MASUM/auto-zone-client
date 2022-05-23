import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import bg from "../../../Assets/images/banner/slider-1.jpg";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                      type="text"
                      placeholder="Email"
                      className="input input-bordered glass"
                      {...register("email", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.email && (
                          <span className="text-primary">
                            This field is required
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                  {/* -------------Password Field--------------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Password"
                      className="input input-bordered glass"
                      {...register("password", { required: true })}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {errors.password && (
                          <span className="text-primary">
                            This field is required
                          </span>
                        )}
                      </span>
                    </label>
                    {/* -----------Forget Password--------- */}
                    <label className="label">
                      <Link to="" className="label-text-alt link link-hover">
                        Forgot password?
                      </Link>
                    </label>
                  </div>
                  {/* -------------------------- */}
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
                <button className="btn btn-outline">
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
