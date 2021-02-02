import React from "react";
import { Input } from "antd";

export default function MyInput(props) {
  const { value } = props;
  return <Input value={value}></Input>;
}
