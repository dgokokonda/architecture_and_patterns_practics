import "./App.css";
import { useState } from "react";

// Концепции Реакт:
// Декларативность - позволяет декларативно описывать html, добавлять обработчики событий и усатнавливать связь между данными
// Реактивность - состоит из состояния, отслеживает изменения во всех данных и отображает html только по изменениям; реактивный (рекурсивный) рендер компонентов. На основе состояния данных формируется виртуальный ДОМ и сравнивается с ДОМ и рендерит изменения.
// Иммутабельность - непрямое изменение (т.е. работа с копиями данных), т.е. объект не может изменять свои свойства после создания.

// Иммутабельное добавление, удаление
var a = [1, 2, 3];
var b = [...a, 4]; // спред оператор
var n = { c: 1 };
var o = Object.assign({}, n, { a, b }); // непрямое указание ссылки на объект
console.log("equal", n === o);
// также деструктуризация и рест оператор
const oCopy = { ...o, c: undefined }; // способ удаления свойства, лучше чем:
const oCopy1 = { ...o };
delete oCopy1.c;
// Для массивов юзать slice+push, slice+splice, slice и тд или спред оператор, map, reduce, filter

// -----------------------------------

/* <div dangerouslySetInnerHTML={{__html: 'text<br/>text'}}></div>  не безопасно!!!  */

// --------------JSX---------------
// <Fragment></Fragment> or <></> - позволяет в html на родительском уровне передавать несколько корневых элементов,
// например: <> <p>1<p> <p>2</p> </>  or <Fragment> <p>1<p> <p>2</p> </Fragment>

// -----------------------------
// 4 особенности useState:
// 1 - асинхронное изменение данных
// 2 - не вызывает ререндер если состояние не поменялось, и кол-во ререндера можно ограничивать условиями
// 3 - сетстейт работает автоматическими батчами, т.е. если сетстейт вызовем в какой-то обработчике, то он будет вызван один раз
// 4 - в него можем передавать любые функции
// const [state, setState] = useState(SYMBOL_O); - setState асинхронная функция

// setState(scopeCount => scopeCount + 1) - в функцию передаем функцию когда нужно сделать замыкание или же передаем просто данные

// Когда мы пытаемся менять свойства объекта в замыкании, ререндер не произойдет, т.к. реакт не отслеживает изменения внутри объекта:
// const [counter, setCounter] = useState({count: 0});
// setCounter((lastCounter) => {
  // lastCounter.counter++
  // return lastCounter;
// })

// правильнее делать так:
// setCounter((lastCounter) => {
  // return {...lastCounter, counter: lastCounter.counter+1};
// })


// Передача функции:
// const [state, setState] = useState(func);
// / const [state, setState] = useState(func(1)); - ререндер и вызов неоднократно
// const [state, setState] = useState(() => func(1)); вызов функции один раз
// -----------------------------

const classParam = "test";
const text = "Hello world!!!";
const SYMBOL_X = "X";
const SYMBOL_O = "O";
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function GameProcess({ isFinish, isDraw, currentStep }) {
  if (!isDraw && !isFinish) {
    return (
      <span>
        {" "}
        Ход: <GameSymbol cell={currentStep} />
      </span>
    );
  } else if (isDraw) {
    return <span>Ничья!</span>;
  } else
    return (
      <span>{`Finish! Winner is ${
        currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O
      }`}</span>
    );
}

function GameCell({ isFinish, cell, onClick }) {
  return (
    <button disabled={isFinish} className="game-item" onClick={onClick}>
      <GameSymbol cell={cell} />
    </button>
  );
}

function GameSymbol({ cell }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "symbol--o";
    if (symbol === SYMBOL_X) return "symbol--x";
    return "";
  };

  return <span className={`symbol ${getSymbolClassName(cell)}`}>{cell}</span>;
}

function useGameState() {
  // custom hook
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [state, setState] = useState(SYMBOL_O);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [isFinish, setFinish] = useState(false);
  const isDraw = !isFinish && cells.filter((val) => val).length === 9; // ничья

  const handleClick = (index) => {
    if (cells[index]) return;

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    setCells(cellsCopy);
    setFinish(
      lines.some(
        (line) =>
          line.every((i) => cellsCopy[i] === SYMBOL_O) ||
          line.every((i) => cellsCopy[i] === SYMBOL_X)
      )
    );
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
  };
  const reset = () => {
    setCells([null, null, null, null, null, null, null, null, null]);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setFinish(false);
  };

  return {
    cells,
    currentStep,
    isFinish,
    isDraw,
    handleClick,
    reset,
  };
}

function UserComponent({ name, age, text, renderTextByParam }) {
  const [param] = useState(true);
  return (
    <span>
      {`${name}, ${age}`}
      <span>{text}</span>
      <span>{renderTextByParam(param)}</span>
    </span>
  );
}

function App() {
  const { cells, currentStep, isFinish, isDraw, handleClick, reset } =
    useGameState();
  const userData = {
    name: "Ivanov",
    age: 42,
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className={classParam}>{text}</p>
      </header>
      <p className="game-step">
        <GameProcess
          currentStep={currentStep}
          isFinish={isFinish}
          isDraw={isDraw}
        />
      </p>
      <div className="game">
        {cells.map((cell, i) => (
          <GameCell
            key={i}
            cell={cell}
            isFinish={isFinish}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
      <UserComponent
        {...userData}
        text={
          <>
            <p>123</p>
            <span>345</span>
          </>
        }
        renderTextByParam={(param) => <span>Text by {param && "param"}</span>}
      />
    </div>
  );
}

export default App;
