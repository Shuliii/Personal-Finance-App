import AuthLayout from "../../layouts/AuthLayout";
import LoginSignUpForm from "../../components/LoginSignupForm";

const SignupPage = () => {
  return (
    <AuthLayout>
      <LoginSignUpForm title="Sign Up" />
    </AuthLayout>
  );
};

export default SignupPage;
