import * as FieldsComponent from "../components";
import { createElement } from "react";

function PageMetaEngine(pageMeta) {
  const { type, props, children } = pageMeta;
  let FieldChildren = [];
  if (Array.isArray(children) && children.length !== 0) {
    FieldChildren = children.map((childMeta) => {
      return PageMetaEngine(childMeta);
    });
  }
  return createElement(FieldsComponent[type], props, FieldChildren);
}

export default PageMetaEngine;

//总体格式：
// {
//   type,
//   props,
//   children
// }
