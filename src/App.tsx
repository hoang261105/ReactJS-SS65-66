import ListProfile from "./components/B2/ListProfile";
import Profile from "./components/B1/Profile";
import ListProduct from "./components/B3/ListProduct";
import Counter from "./components/B4/Counter";
import RandomNumber from "./components/B5/RandomNumber";
import ChangeState from "./components/B6/ChangeState";

export default function App() {
  return (
    <div>
      <Profile />
      <br />
      <ListProfile />
      <br />
      <ListProduct />
      <br />
      <Counter />
      <br />
      <RandomNumber />
      <br />
      <ChangeState />
    </div>
  );
}
