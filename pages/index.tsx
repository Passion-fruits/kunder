import Footer from "../components/footer";
import MainPage from "../components/main";
import React from "react";
import profile from "../api/profile";
export default function Home() {
  React.useEffect(() => {
    profile.checkFollow(1000);
  }, []);
  return (
    <>
      <MainPage />
      <Footer />
    </>
  );
}
