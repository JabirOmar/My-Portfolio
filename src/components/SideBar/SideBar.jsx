import React from "react";
import { Container } from "../tags/NewComponents";
import DesktopSideBar from "./DesktopSideBar";

function SideBar() {
  return (
    <Container className=" w-fit ">
      <DesktopSideBar />
    </Container>
  );
}

export default SideBar;
