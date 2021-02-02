import React from "react";
import PageMetaEngine from "./PageMetaEngine";
import ReactDom from "react-dom";
import IframeContainer from "./Iframe";

const App = () => {
  return (
    <div>
      This is the page built by dm-react-cli
      <IframeContainer></IframeContainer>
    </div>
  );
};

export default App;
