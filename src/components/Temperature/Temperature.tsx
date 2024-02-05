import { FunctionComponent } from "react";
import classes from "./Temperature.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const Temperature: FunctionComponent = () => {
  const { co2, temp } = useSelector((state: RootState) => state.temperature);

  const tempNum = Math.floor(+temp);
  const co2Num = +Number(co2).toFixed(1);
  const err = co2Num > 800 || tempNum > 27;

  return (
    <section
      className={`${classes.Temperature} ${
        err ? classes.Temperature__error : ""
      }`}
    >
      <div>
        <h3>{tempNum} °C</h3>
        <p>Температура</p>
      </div>
      <div>
        <h3>
          {co2Num} <span>ppm</span>
        </h3>
        <p>CO2</p>
      </div>
    </section>
  );
};

export default Temperature;
