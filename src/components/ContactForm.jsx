import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sir2z7j",
        "template_ssw8wxj",
        form.current,
        "5xAo0GJGmMeTfUPd1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#11992e",
      },
    },
  });

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <Box
        component="div"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          "& .MuiInputLabel-root": { color: "#fff" }, // Set label color to white
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff", // Set border color to white
            },
            "&:hover fieldset": {
              borderColor: "#fff", // Set border color to white on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#11992e", // Set border color to green when focused
            },
            "& input": {
              color: "#fff", // Set text color to white
            },
            "& input::placeholder": {
              color: "#fff", // Set placeholder color to white
            },
          },
          "& .MuiInputBase-multiline": {
            "& textarea": {
              color: "#fff", // Set text color to white for multiline input
              "&::placeholder": {
                color: "#fff", // Set placeholder color to white for multiline input
              },
            },
            "&.Mui-focused": {
              "& textarea::placeholder": {
                color: "#fff", // Set placeholder color to green when focused
              },
              "& .MuiInputLabel-root-focused": {
                color: "#11992e", // Set label color to green when focused
              },
            },
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <div className="contact-form">
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Nombre"
            placeholder="Francisco Borja"
            name="user_name"
          />
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Email"
            placeholder="fjbl2788@gmail.com"
            name="user_email"
          />
          <TextField
            fullWidth
            required
            id="outlined-number"
            label="Telefono"
            placeholder="+593961842276"
            name="user_phone"
          />
          <TextField
            fullWidth
            required
            id="outlined-multiline-static"
            label="¿Deseas anotar alguna intensión?"
            multiline
            rows={4}
            placeholder="Mensaje..."
            name="message"
          />
          <ThemeProvider theme={theme}>
            <Button variant="contained" type="submit" color="primary">
              Enviar
            </Button>
          </ThemeProvider>
        </div>
      </Box>
    </form>
  );
};

export default ContactForm;
