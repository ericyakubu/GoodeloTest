import { FunctionComponent } from "react";
import classes from "./Landing.module.scss";
import {
  CompanyLogo,
  History,
  Satisfaction,
  Temperature,
} from "../../components";

const Landing: FunctionComponent = () => {
  return (
    <main className={classes.Landing}>
      <section className={classes.Landing__col}>
        <Satisfaction />
        <section className={classes.Landing__col__row}>
          <History />
          <CompanyLogo />
        </section>
      </section>
      <Temperature />
    </main>
  );
};

export default Landing;
