import AuthNav from "../../../components/auth-nav/auth-navbar";
import SignUpForm from "../../../components/sign-up-form/sign-up-form";
import StepTwo from "../../../components/sign-up-form/origin-form";
import { useState } from "react";
import FormProvider from "../../../components/sign-up-form/context/FormContext";

const SignUp = () => {
  const [stepTwo, setStepTwo] = useState(false);

  return (
    <FormProvider>
      {/* page Wrapper class */}
      <div className=" min-h-screen bg-gradient-to-br from-blue-400 to-teal-500">
        <AuthNav
          cta="Already Have An Account ?"
          path="sign-in"
          urlName={"Sign in today"}
        />
        {stepTwo && <StepTwo move={setStepTwo} />}
        {!stepTwo && <SignUpForm move={setStepTwo} />}
      </div>
    </FormProvider>
  );
};

export default SignUp;
