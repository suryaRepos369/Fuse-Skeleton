import * as React from "react";
import Box from "@mui/material/Box";
import { log } from "util";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    // setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <form>
          {/* <input
            type="file"
            placeholder="Upload image"
            onChange={handleChange}
          ></input> */}
        </form>
      </div>
    </Box>
  );
}
