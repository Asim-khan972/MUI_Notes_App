import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

const MyStyledComponent = styled("div")({
  marginTop: "20px",
  marginBottom: "20px",
  display: "block",
});

export default function Create() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details, category);
    }

    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, details, category }),
    }).then(() => navigate("/"));
  };

  return (
    <Container>
      <MyStyledComponent>
        <Typography
          variant="h4"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a New Note
        </Typography>
      </MyStyledComponent>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <MyStyledComponent>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Note title "
            variant="outlined"
            color="secondary"
            required
            fullWidth
            error={titleError}
          />
        </MyStyledComponent>
        <MyStyledComponent>
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            label="Details "
            variant="outlined"
            color="secondary"
            required
            fullWidth
            multiline
            rows={4}
            error={detailsError}
          />
        </MyStyledComponent>
        <MyStyledComponent>
          <FormControl>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminders"
              />
              <FormControlLabel value="work" control={<Radio />} label="Work" />
            </RadioGroup>
          </FormControl>
        </MyStyledComponent>

        <MyStyledComponent>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<SendIcon />}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </MyStyledComponent>
      </form>
    </Container>
  );
}
