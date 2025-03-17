import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, userName, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {userName}
      </Link>
    );
  } else {
    return <button className="btn btn-primary">Login</button>;
  }
};
export default ButtonLogin;
