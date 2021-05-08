import { ReactComponent as PlusSquare } from "./icons/plus-square.svg";
import { ReactComponent as MinusSquare } from "./icons/minus-square.svg";

export function Counter({
  label,
  onDecrement,
  onIncrement,
  unitPlural,
  unitSingle,
  value,
  background,
}) {
  return (
    <div className="counter">
      <p className="counter--label">{label}</p>
      <div className="counter--buttons" style={{ backgroundImage: background }}>
        <button onClick={onDecrement}>
          <MinusSquare />
        </button>
        <span>
          {value} {value > 1 ? unitPlural : unitSingle}
        </span>
        <button onClick={onIncrement}>
          <PlusSquare />
        </button>
      </div>
    </div>
  );
}
