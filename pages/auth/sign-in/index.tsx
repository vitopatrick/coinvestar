import AuthNav from "../../../components/auth-nav/auth-navbar";
import LoginForm from "../../../components/login-form/login-form";

const SignIn = () => {
  return (
    <>
      {/* container */}
      <main className=" min-h-screen bg-gradient-to-br from-blue-400 to-teal-500">
        <AuthNav
          cta={"Don't have an account"}
          path={"/sign-up"}
          urlName={"Create An account"}
        />
        <LoginForm />
      </main>
    </>
  );
};

export default SignIn;
