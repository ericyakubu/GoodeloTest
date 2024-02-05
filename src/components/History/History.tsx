import { FunctionComponent } from "react";
import classes from "./History.module.scss";
import Button from "../UI/Button";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const History: FunctionComponent = () => {
  return (
    <section className={classes.History}>
      <h3>Дней без душноты 0</h3>
      <Button
        text="История"
        type="button"
        icon={<HiOutlineArrowLongRight />}
        className={classes.History__btn}
      />
    </section>
  );
};

export default History;
