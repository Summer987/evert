import React, {ReactNode} from 'react'
import {Header} from "../Components/Header";
import {LeftMenu} from "../Components/LeftMenu";

interface IMainLayout {
  children: ReactNode
}

export const MainLayout: React.FC<IMainLayout> = ({children}) => {

  return (
    <>
      <Header></Header>
      <LeftMenu></LeftMenu>
      MainLayout
      {children}
    </>
  )
}