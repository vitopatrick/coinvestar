// @ts-ignore
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [isText, setIsText] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleIsText = () => {
    setIsText(!isText);
  };

  const router = useRouter();

  const loginUser = async (event: any) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      // check if the email is a valid email address
      switch (error.code) {
        case "auth/invalid-email":
          return toast(
            "Invalid Email Address,please use a valid email address",
            {
              type: "error",
              bodyClassName: "toast",
              position: "bottom-center",
            }
          );
        case "auth/internal-error":
          return toast("Server Error Please Refresh your browser or tab", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/wrong-password":
          return toast("Password is incorrect", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/user-not-found":
          return toast("User Does not exist", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/network-request-failed":
          return toast("Poor internet Connection", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        default:
          return toast(error.code, {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
      }
    }
  };

  return (
    <>
      <div className="w-[90%] lg:w-[35%] mx-auto p-4 shadow-sm border bg-slate-50 rounded-lg translate-y-1/2">
        <form>
          {/* form header */}
          <div>
            <h3 className="text-blue-900 text-4xl font-bold ">Log In</h3>
          </div>
          {/* Email or sub account */}
          <div className="flex flex-col mt-8">
            <label htmlFor="email" className="text-sm text-blue-900">
              Email/Sub-Account
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded my-3 text-base px-2 py-3 w-full outline-none bg-blue-50 border border-blue-400"
              />
            </div>
          </div>
          {/* password fieldset */}
          <div className="mt-4 flex flex-col">
            <label htmlFor="password" className="text-sm text-blue-900">
              Password
            </label>
            <div className="flex items-center mt-3 bg-blue-50 border py-2 rounded border-blue-400">
              <input
                type={isText ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent outline-none py-1 pl-2"
              />
              <div className="pr-4">
                {/* change type based on state changes */}
                {isText ? (
                  <BsEye onClick={toggleIsText} />
                ) : (
                  <BsEyeSlash onClick={toggleIsText} />
                )}
              </div>
            </div>
          </div>
          {/* login button */}
          <button
            onClick={loginUser}
            className="font-main md:bg-blue-600 bg-blue-600 text-white text-[1rem] mt-8 rounded shadow inline-block w-full py-2"
          >
            Log in
          </button>
          <div className="flex justify-end my-4">
            <Link
              href="/auth/forgot-password"
              className="justify-end text-sm font-main capitalize text-bg"
            >
              forgot password
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
