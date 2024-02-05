import { FunctionComponent } from "react";
import classes from "./CompanyLogo.module.scss";

const CompanyLogo: FunctionComponent = () => {
  return (
    <section className={classes.Company}>
      <img src="./GoodeloLogo.svg" alt="GoodeloLogo" />
    </section>
  );
};

export default CompanyLogo;
