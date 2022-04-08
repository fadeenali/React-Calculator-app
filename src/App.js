import { useState } from "react";
import "./App.css";

function NewCalc() {
  const [calc, setCalc] = useState("");
  const ops = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const clear = () => {
    setCalc("");
  };

  const backSpace = () => {
    setCalc(calc.slice(0, -1));
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  return (
    <>
      <div className="app">
        <div className="clac-wrapper">
          <div className="display">{calc || "0"}</div>
          <hr />

          <div className="btns">
            <button onClick={clear} id="clear">
              Ac
            </button>
            <button onClick={backSpace} id="backSpace">
              <i className="fa-solid fa-delete-left"></i>
            </button>

            <button onClick={() => updateCalc("/")} className="sameColor">
              <i className="fa-solid fa-divide"></i>
            </button>
            <button onClick={() => updateCalc("7")} className="num">
              7
            </button>
            <button onClick={() => updateCalc("8")} className="num">
              8
            </button>
            <button onClick={() => updateCalc("9")} className="num">
              9
            </button>
            <button onClick={() => updateCalc("*")} className="sameColor">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button onClick={() => updateCalc("4")} className="num">
              4
            </button>
            <button onClick={() => updateCalc("5")} className="num">
              5
            </button>
            <button onClick={() => updateCalc("6")} className="num">
              6
            </button>
            <button onClick={() => updateCalc("-")} className="sameColor">
              <i className="fa-solid fa-minus"></i>
            </button>
            <button onClick={() => updateCalc("1")} className="num">
              1
            </button>
            <button onClick={() => updateCalc("2")} className="num">
              2
            </button>
            <button onClick={() => updateCalc("3")} className="num">
              3
            </button>
            <button onClick={() => updateCalc("+")} className="sameColor">
              <i className="fa-solid fa-plus"></i>
            </button>
            <button onClick={() => updateCalc("0")} className="num">
              0
            </button>
            <button onClick={() => updateCalc(".")} className="num">
              .
            </button>
            <button onClick={calculate} id="mainResult">
              <i className="fa-solid fa-equals"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCalc;
