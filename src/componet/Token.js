import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Box } from "@mui/system";
import * as yup from "yup";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function Tokenbox() {
  const [open, setOpen] = React.useState(false);

  const sendMail = async (values, action) => {
    await axios.post(
      "https://api-forge-node.onrender.com/tempId/create",
      values
    );
    action.resetForm();
    submitMailId();
  };

  const submitMailId = async () => {
    setOpen(false);
    alert("Token Was Sent To Your Email");
  };

  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        className="token"
        sx={{
          color: "white",
          backgroundColor: "#002884",
          margin: "21px 0px 21px 10px",
          padding: "6px",
        }}
        onClick={handleClickOpen}
      >
        TOKEN
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box sx={{ padding: "12px 12px", fontSize: "24px", fontWeight: "600" }}>
          Create Token
        </Box>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, action) => {
              sendMail(values, action);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Box>
                  <Box sx={{ width: { xs: "240px", sm: "350px" } }}>
                    Enter Email To Get Token
                  </Box>
                  <Field
                    className="inputBox"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                  />
                  {errors.email && touched.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                  <Box>
                    <Button
                      className="token"
                      sx={{
                        color: "white",
                        backgroundColor: "#002884",
                        marginBottom: "12px",
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
