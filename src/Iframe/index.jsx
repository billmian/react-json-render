import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MyButton } from "../components";

export default function IframeContainer(props) {
  const [contentRef, setContentRef] = useState(null);
  const doc = contentRef?.contentWindow?.document;
  console.log("🚀 ~ file: index.jsx ~ line 8 ~ IframeContainer ~ doc", doc)
  const mountNode = doc?.body;
  const insertionTarget = doc?.head;
  return (
    <iframe ref={setContentRef}>
      {mountNode && createPortal(MyButton, mountNode)}
    </iframe>
  );
}
