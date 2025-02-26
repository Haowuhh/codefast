import Link from "next/link";
const ButtonLogin = (props) => {
  const {isLoggedIn, userName} = props
  if (isLoggedIn) {
    return <Link href="/dashboard" className="btn btn-primary">Welcome back {userName}</Link>;
  } else {
   return <button className="btn btn-primary">Login</button>;
  }
};
export default ButtonLogin;
