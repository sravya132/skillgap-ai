import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import authService from "../../services/authService";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

const [loading, setLoading] = useState(false);

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm();

const password = watch("password");

const onSubmit = async (data) => {

  try {

    setLoading(true);

    await authService.register({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    toast.success("Registration Successful!");

    navigate("/login");

  } catch (error) {

    toast.error(
      error?.response?.data || "Registration Failed"
    );

  } finally {

    setLoading(false);

  }

};

  return (
    <div className="min-h-screen flex bg-[#F8F5F0]">

      {/* Left Panel */}

      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-amber-100 to-orange-50 items-center justify-center p-16">

        <div>

          <h1 className="text-5xl font-bold leading-tight text-stone-800">
            Join
            <span className="text-amber-600"> SkillGap AI</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Upload your resume, discover missing skills,
            receive AI-powered career guidance and prepare
            for interviews — all in one platform.
          </p>

        </div>

      </div>

      {/* Right Panel */}

      <div className="flex flex-1 items-center justify-center p-8">

        <div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-10 shadow-lg">

          <h2 className="text-center text-3xl font-bold">
            Create Account
          </h2>

          <p className="mt-3 text-center text-stone-500">
            Start your AI career journey today.
          </p>

          <form
  onSubmit={handleSubmit(onSubmit)}
  className="mt-8 space-y-5"
>

            {/* Name */}

            <input
  type="text"
  placeholder="Full Name"
  {...register("name", {
    required: "Name is required",
  })}
  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-500"
/>

{errors.name && (
  <p className="text-sm text-red-500">
    {errors.name.message}
  </p>
)}

            {/* Email */}

            <input
  type="email"
  placeholder="Email Address"
  {...register("email", {
    required: "Email is required",
  })}
  className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-500"
/>

{errors.email && (
  <p className="text-sm text-red-500">
    {errors.email.message}
  </p>
)}

            {/* Password */}

<div>

  <div className="relative">

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      {...register("password", {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
      })}
      className="w-full rounded-xl border border-stone-300 px-4 py-3 pr-12 outline-none focus:border-amber-500"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2"
    >
      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}
    </button>

  </div>

  {errors.password && (
    <p className="mt-1 text-sm text-red-500">
      {errors.password.message}
    </p>
  )}

</div>

            {/* Confirm Password */}

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full rounded-xl border border-stone-300 px-4 py-3 pr-12 outline-none focus:border-amber-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Terms */}

            <label className="flex items-center gap-2 text-sm text-stone-600">

              <input
  type="checkbox"
  {...register("terms", {
    required: "Accept Terms",
  })}
  className="accent-amber-600"
/>
              I agree to the Terms & Conditions

            </label>
            {errors.terms && (
  <p className="text-sm text-red-500">
    {errors.terms.message}
  </p>
)}

            {/* Register */}

            <button
  type="submit"
  disabled={loading}
  className={`w-full rounded-xl py-3 font-semibold text-white transition ${
    loading
      ? "cursor-not-allowed bg-amber-400"
      : "bg-amber-600 hover:bg-amber-700"
  }`}
>
  {loading ? "Creating Account..." : "Create Account"}
</button>
            {/* Divider */}

            <div className="flex items-center gap-4">

              <hr className="flex-1" />

              <span className="text-sm text-stone-400">
                OR
              </span>

              <hr className="flex-1" />

            </div>

            {/* Google */}

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-stone-300 py-3 font-medium transition hover:bg-stone-50"
            >
              <FcGoogle size={22} />

              Continue with Google

            </button>

          </form>

          <p className="mt-8 text-center text-sm text-stone-600">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-amber-600 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;