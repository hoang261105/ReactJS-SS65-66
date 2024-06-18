import { useDispatch, useSelector } from "react-redux";
import { changeReducer } from "../../actions";

export default function ChangeState() {
  const changeState: any = useSelector((state) => {
    return state;
  });
  console.log(changeState);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeReducer("CHANGE"));
  };
  return (
    <div>
      <p>{changeState.changeReducer}</p>
      <button onClick={handleChange}>Change State</button>
    </div>
  );
}
