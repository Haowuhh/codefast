import Link from "next/link";
const ButtonLogin = (props) => {
  const {isLoggedIn, userName} = props
  if (isLoggedIn) {
    return <Link href="/dashboard">Welcome back {userName}</Link>;
  } else {
   return <button>Login</button>;
  }
};
export default ButtonLogin;
