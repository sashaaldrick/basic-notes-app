import React from "react";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddButton = () => {
  return (
    <Link to="/note/new" className="floating-button">
      <AddCircleOutlineIcon />
    </Link>
  );
};

export default AddButton;
