import React from "react";
import CSRPage from "./CSR/page";

const HomePage = async () => {
  return (
    <div>
      <p>현재 화면에 보여지는 것은 CSR렌더링</p>
      <CSRPage />
    </div>
  );
};

export default HomePage;
