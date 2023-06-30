import { lazy, Suspense } from "react";
import "./App.css";
import { Page } from "./components/tags/NewComponents";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Page className=" App fixed w-screen h-screen overflow-scroll overflow-x-hidden bg-[#242424]">
      <main className=" relative max-w-[1000px] h-full mx-auto ">
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Page>
  );
}

export default App;
