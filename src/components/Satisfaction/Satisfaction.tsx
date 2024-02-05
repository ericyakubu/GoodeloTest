import { FunctionComponent } from "react";
import classes from "./Satisfaction.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const Satisfaction: FunctionComponent = () => {
  const { co2, temp } = useSelector((state: RootState) => state.temperature);

  const tempNum = Math.floor(+temp);
  const co2Num = +Number(co2).toFixed(1);

  const err = co2Num > 800 || tempNum > 27;

  return (
    <section
      className={`${classes.Satisfaction} ${
        err ? classes.Satisfaction__error : ""
      }`}
    >
      <h3>Душнила {err ? "не" : ""} доволен вами</h3>
      <p>Все показатели {err ? "не" : ""} в норме</p>
    </section>
  );
};

export default Satisfaction;
