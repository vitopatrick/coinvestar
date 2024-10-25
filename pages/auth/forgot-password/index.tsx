import AuthNav from "../../../components/auth-nav/auth-navbar";
import ForgottenPasswordForm from "../../../components/forgot-password/forgotten-password";

const ForgottenPassword = () => {
  return (
    <>
      {/* page Wrapper class */}
      <div className=" min-h-screen bg-gradient-to-br from-blue-400 to-teal-500">
        <AuthNav
          cta="Already Have An Account ?"
          path="sign-in"
          urlName={"Sign in today"}
        />
        <ForgottenPasswordForm />
      </div>
    </>
  );
};

export default ForgottenPassword;
