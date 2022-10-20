import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <center>
      <>
        <Pagination color="primary"  className="text-white" count={10} variant="text" shape="rounded" />
      </>
    </center>
  );
}
