import React from "react";
import { useContent } from "../hooks";

export default function Browse() {
  //we need the series and films
  const { series } = useContent("series");
  const { films} = useContent("films");

  console.log(series);
  console.log(films);
  //we  need slides
  // pass it o the browse container
  return <p>Hello from the Browse</p>;
}
