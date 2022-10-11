// CounterSlice içerisinde bulunan fonksiyonlardır.
import { decrement, increment } from "./counterSlice";

// useSelector => state içerisindeki değerleri okumamızı sağlar. State içindeki value'e ye ulaşır.
// useDispatch => state içerisindeki değişen değerlerdir.
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="redux">
      <h1>Redux App</h1>
      <h3>Your Count : {count}</h3>
      <button onClick={handleIncrement}>Increment +1</button> <br/>
      <button onClick={handleDecrement}>Decrement -1</button>
    </div>
  );
}

export default App;
