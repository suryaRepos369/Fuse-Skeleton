import { Input } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import Card from "./Card";
import React from "react";
import classes from "./login.module.css";

const Schedule = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  let emailIsValid = true;
  let passwordIsValid = true;
  let formIsValid = true;
  return (
    <React.Fragment>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="date"
              id="date"
              //   value={enteredEmail}
              //   onChange={emailChangeHandler}
              //   onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="time"
              id="time"
              //   value={enteredPassword}
              //   onChange={passwordChangeHandler}
              //   onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button variant="outlined" startIcon={<ScheduleSendIcon />}>
              send Reminder
            </Button>
            {/* <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button> */}
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Schedule;
