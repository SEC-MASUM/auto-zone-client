import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bg from "../../../Assets/images/banner/slider-1.jpg";
const SignUp = () => {
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
        class="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="hero-overlay bg-opacity-60">
          <div class="min-h-screen max-h-fit flex justify-center items-center my-10 px-2">
            <div class="card w-full md:max-w-sm shadow-2xl glass ">
              <div class="card-body">
                <h2 className="text-primary text-2xl font-bold">Sign Up</h2>
                <p>Create your brand new account</p>
                {/* -----------Form----------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* -----------Name Field-------------- */}
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      class="input input-bordered glass"
                      {...register("name", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    <label class="label">
                      <span class="label-text-alt">
                        {errors.name && (
                          <span className="text-primary">
                            This field is required
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                  {/* -----------Email Field-------------- */}
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      class="input input-bordered glass"
                      {...register("email", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    <label class="label">
                      <span class="label-text-alt">
                        {errors.email && (
                          <span className="text-primary">
                            This field is required
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                  {/* -------------Password Field--------------- */}
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Password"
                      class="input input-bordered glass"
                      {...register("password", { required: true })}
                    />
                    <label class="label">
                      <span class="label-text-alt">
                        {errors.password && (
                          <span className="text-primary">
                            This field is required
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                  {/* -------------Confirm Password Field--------------- */}
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Password"
                      class="input input-bordered glass"
                      {...register("confirmPassword", { required: true })}
                    />
                    <label class="label">
                      <span class="label-text-alt">
                        {errors.confirmPassword && (
                          <span className="text-primary">
                            This field is required
                          </span>
                        )}
                      </span>
                    </label>
                  </div>
                  {/* ------------ Sign Up-------------- */}
                  <div class="form-control mt-6">
                    <input
                      type="submit"
                      class="btn btn-primary font-bold"
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
                <div class="divider">OR</div>
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

export default SignUp;
