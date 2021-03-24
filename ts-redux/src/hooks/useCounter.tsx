import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { decrease, increase, increaseBy } from "../redux/counter";
import { CounterProps } from "../components/Counter";

const useCounter = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const counterProps: CounterProps = {
    count,
    handleIncrease: () => dispatch(increase()),
    handleDecrease: () => dispatch(decrease()),
    handleIncreaseBy: (diff: number) => dispatch(increaseBy(diff)),
  };

  return counterProps;
};

export default useCounter;
