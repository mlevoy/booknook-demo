import { useState } from "react";
import { loginUser } from "../service";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    loginUser(email, password).then((response) => {
      if (response.id) {
        history.push("/StudentList");
      }
    });
  };
  return (
    <div>
      <div className="row text-center my-5">
        <h1>Welcome To BookNook!</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col col-12 mb-2">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col col-12">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={() => login()}
          className="btn btn-success green-button col-4 mt-4"
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};
export default Login;
