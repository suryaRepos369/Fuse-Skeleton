import { Input } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import Card from "./Card";
import React from "react";
import classes from "./login.module.css";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fuseDark } from "@fuse/colors";

const Schedule = () => {
  const navigate = useNavigate();
  const formdata = useSelector(({ fuse }) => fuse.formdata);
  console.log("Store data:", formdata);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  let emailIsValid = true;
  let passwordIsValid = true;
  let formIsValid = true;

  function sendHandler() {
    alert(
      "clicked the Schedule send button this page will redirect back to the login page"
    );
    navigate("/login");
  }
  return (
    <React.Fragment>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">Date</label>
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
            <label htmlFor="password">Time</label>
            <input
              type="time"
              id="time"
              //   value={enteredPassword}
              //   onChange={passwordChangeHandler}
              //   onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button
              variant="outlined"
              startIcon={<ScheduleSendIcon />}
              onClick={sendHandler}
            >
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
