import React, { Suspense, lazy, useState } from "react";
import { Main, Page } from "../tags/NewComponents";
import Loading from "../../pages/Loading";
import { ExploreContext } from "../../context/MyContext";

const TopBar = lazy(() => import("../../components/TopBar/TopBar"));
const LandingPage = lazy(() => import("../../pages/LandingPage"));
const HeroSection = lazy(() => import("../../pages/HeroSection"));
const ServiceSection = lazy(() => import("../../pages/ServiceSection"));

function Layout() {
  const [explore, setExplore] = useState(false);

  return (
    <ExploreContext.Provider value={{ explore, setExplore }}>
      <Page className=" layout  w-full h-full ">
        <Main className=" w-full h-full">
          {explore ? (
            <>
              <Suspense fallback={<Loading />}>
                <TopBar />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <HeroSection />
              </Suspense>

              <Suspense fallback={<Loading />}>
                <ServiceSection />
              </Suspense>
            </>
          ) : (
            <Suspense fallback={<Loading />}>
              <LandingPage />
            </Suspense>
          )}
        </Main>
      </Page>
    </ExploreContext.Provider>
  );
}

export default Layout;
