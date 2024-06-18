import { useDispatch, useSelector } from "react-redux";
import { randomNumbers } from "../../actions";

export default function RandomNumber() {
  const stateRandom: any = useSelector((state) => {
    return state;
  });
  console.log(stateRandom);
  const dispatch = useDispatch();
  const handleRandom = () => {
    dispatch(randomNumbers("ADD"));
  };
  return (
    <div>
      <p>[{stateRandom.randomReducer.join(",")}]</p>
      <button onClick={handleRandom}>Generate Random Number</button>
    </div>
  );
}
