import React from "react";
import { Button } from "antd";

export default function MyButton(props) {
  const { type, content } = props;
  return <Button type={type}>{content}</Button>;
}
