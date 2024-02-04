import React from "react";
import { Card, CardHeader, CardContent, Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={<Avatar>{note.category[0].toUpperCase()}</Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
