import React from "react"
import HeaderComp from "./components/HeaderComp/HeaderComp"
import EntryComp from "./components/EnterComp/EntryComp"
import data from "./components/data"

export default function App() {
  return(
    <>
      <HeaderComp/>
      <EntryComp travelData={data}/>
    </>
  )
}