import React from "react";
import { Link } from "react-router-dom";

const getDate = (note) => {
  let date;
  note.updated
    ? (date = new Date(note.updated).toLocaleDateString())
    : (date = new Date(note.created).toLocaleDateString());
  return date;
};

const getTime = (note) => {
  let time;
  note.updated
    ? (time = new Date(note.updated).toLocaleTimeString())
    : (time = new Date(note.created).toLocaleTimeString());
  return time;
};

const getTitle = (note) => {
  const title = note.body.split("\n")[0];
  if (title.length > 45) return title.slice(0, 45).concat("...");
  return title;
};

const getContentPreview = (note) => {
  const title = getTitle(note);
  let content = note.body.replaceAll("\n", "");
  content = content.replaceAll(title, "");

  if (content.length > 40) {
    return content.slice(0, 40) + "...";
  } else {
    return content;
  }
};

const NoteBody = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getDate(note)}</span>
          <span>{getTime(note)}</span>
          {getContentPreview(note)}
        </p>
      </div>
    </Link>
  );
};

export default NoteBody;
