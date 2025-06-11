import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const WithAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const navigate = useNavigate();
    const token = true;

    useEffect(() => {
      if (!token) {
        navigate("/");
      }
    }, [token, navigate]);

    return token ? <WrappedComponent {...props} /> : null;
  };

  return WithAuthComponent;
};

export default WithAuth;
