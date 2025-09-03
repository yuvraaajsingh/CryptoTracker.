import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import "./PaginationDashboard.css";

export default function PaginationDashboard({ page, handlePageChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
      />
    </div>
  );
}
