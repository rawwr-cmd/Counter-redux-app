import Counter from "./components/Counter";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

// import ClassCounter from "./components/classBasedCounter";

function App() {
  //accessing the store
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
    // <ClassCounter />
  );
}

export default App;
