import React from 'react';
import { Fragment } from 'react';
import HeaderComp from "./newcomponents/HeaderComp"
import FooterComp from "./newcomponents/FooterComp"
import MainComp from "./newcomponents/MainComp"

function App() {
  return(
    <Fragment>
        <HeaderComp />
        <MainComp />
        <FooterComp />
    </Fragment>
  )
}

export default App