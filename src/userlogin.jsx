import { useState, useEffect } from "react";

function UserLogin({ logout }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function Login() {
  const [isloggedin, setisloggedin] = useState(false);

  useEffect(() => {
    const status = sessionStorage.getItem("isloggedin");
    setisloggedin(status === "true");
  }, []);

  const login = () => {
    sessionStorage.setItem("isloggedin", "true");
    setisloggedin(true);
  };

  const logout = () => {
    sessionStorage.setItem("isloggedin", "false");
    setisloggedin(false);
  };

  if (isloggedin) {
    return <UserLogin logout={logout} />;
  }

  return (
    <div>
      <h2>Status: Logged Out</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default UserLogin;
