import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import authService from "../../services/authService";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

  try {

    setLoading(true);

    const response = await authService.login(data);

    if (
      response.token === "User Not Found" ||
      response.token === "Invalid Password"
    ) {

      toast.error(response.token);
      return;

    }

    localStorage.setItem("token", response.token);
    localStorage.setItem("name", response.name);
    localStorage.setItem("email", response.email);

    toast.success(`Welcome back, ${response.name}!`);

    navigate("/dashboard");

  } catch (error) {

    toast.error("Login failed");

    console.log(error);

  } finally {

    setLoading(false);

  }

};

  return (
    <div className="min-h-screen bg-[#F8F5F0] flex">

      {/* Left Section */}

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-br from-amber-100 to-orange-50 p-16">

        <div>

          <h1 className="text-5xl font-bold leading-tight text-stone-800">
            Welcome Back to
            <span className="text-amber-600"> SkillGap AI</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Continue your AI-powered career journey by analyzing
            resumes, discovering skill gaps and preparing for interviews.
          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="flex flex-1 items-center justify-center p-8">

        <div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-10 shadow-lg">

          <h2 className="text-center text-3xl font-bold">
            Login
          </h2>

          <p className="mt-3 text-center text-stone-500">
            Welcome back! Please sign in.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >

            {/* Email */}

            <div>

              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-amber-500"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* Password */}

            <div>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-stone-300 px-4 py-3 pr-12 outline-none transition focus:border-amber-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* Remember Me */}

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm text-stone-600">

                <input
                  type="checkbox"
                  className="accent-amber-600"
                />

                Remember Me

              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-amber-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}

            <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-amber-600 py-3 font-semibold text-white transition hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Signing In..." : "Login"}
</button>

          </form>

          <p className="mt-8 text-center text-sm text-stone-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-amber-600 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;