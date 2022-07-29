import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DataInput from "./MessageFormInputBox";
import ImageInput from "./MessageFormImageInput";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoIcon from "@mui/icons-material/AddPhotoAlternate";
import { flexbox } from "@mui/system";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  border: "1px solid blue",
  borderRadius: "15px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState();
  const [file, setFile] = React.useState(null);
  const [url, setUrl] = React.useState([]);
  const [video, setVideo] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const imageUpload = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log("image is ", reader.result);
      setUrl(reader.result);

      //localStorage.setItem("image", reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };

  const videoUpload = (event) => {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log("vieo file is ", reader.result);
      setVideo(reader.result);

      //localStorage.setItem("image", reader.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };
  //const imageUpload = () => {};
  console.log("url is ", url);

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        style={{ backgroundColor: "skyblue", padding: "15px" }}
        onClick={handleOpen}
      >
        Add Message to be scheduled
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ width: "100%", height: "100%" }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            whats in your mind ...?
          </Typography>
          <Typography id="modal-modal-description">
            {/* <input
              style={{
                backgroundColor: "grey",
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid",
                borderRadius: "20px",
                width: "50%",
                height: "auto",
              }}
              type="text"
              placeholder="whats in your mind"
            ></input> */}

            <Box component="form" noValidate autoComplete="off">
              <div>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-multiline-flexible"
                  label="Enter ur thoughts.."
                  multiline
                  maxRows={8}
                  value={value}
                  //onChange={handleChange}
                />
              </div>
            </Box>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add images / Videos
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <ImageInput /> */}
            <CssBaseline />
            <Container maxWidth="sm">
              <Box
                sx={{
                  bgcolor: "#cfe8fc",
                  height: "auto",
                  backgroundImage: { url },
                }}
              >
                <input
                  type="file"
                  placeholder="upload  photo"
                  accept="image/*"
                  onChange={imageUpload}
                ></input>
                <Button endIcon={<AddPhotoIcon />}></Button>
                <input
                  type="file"
                  placeholder="upload  Video"
                  accept="video/*"
                  onChange={videoUpload}
                ></input>
                <Button endIcon={<AddPhotoIcon />}></Button>
                {url.length > 0 ? (
                  <div>
                    <img
                      style={{ width: "300px", height: "100px" }}
                      src={url}
                      alt="not found"
                    />
                    <Button color="error" endIcon={<DeleteIcon />}></Button>
                  </div>
                ) : (
                  ""
                )}
                {video ? (
                  <div>
                    <video
                      style={{ width: "100px", height: "100px" }}
                      src={video}
                      alt="not found"
                    />
                    <Button endIcon={<DeleteIcon />}></Button>
                  </div>
                ) : (
                  ""
                )}
              </Box>
            </Container>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ textAlign: "center" }}
          >
            <Button style={{ textAlign: "center" }} color="success">
              Next
            </Button>
            <Button style={{ textAlign: "center" }} color="info">
              Preview
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
