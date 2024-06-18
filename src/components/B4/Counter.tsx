import { useDispatch, useSelector } from "react-redux";
import { counter } from "../../actions";

export default function Counter() {
  const stateCount: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counter("INCREASE", 1));
  };

  const handleDecrease = () => {
    dispatch(counter("DECREASE", 1));
  };
  return (
    <div>
      <p>Giá trị: {stateCount.countReducer}</p>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
    </div>
  );
}
