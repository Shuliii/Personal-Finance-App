import AuthLayout from "../../layouts/AuthLayout";
import LoginSignUpForm from "../../components/LoginSignupForm";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const {login, user} = useAuth();
  const Navigate = useNavigate();

  const onSubmit = (data) => {
    login(data);
    Navigate("/home");
  };

  return (
    <AuthLayout>
      <LoginSignUpForm title="Login" onSubmit={onSubmit} />
    </AuthLayout>
  );
};

export default LoginPage;
