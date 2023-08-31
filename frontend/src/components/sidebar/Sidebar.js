
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import AgentSidebar from "./AgentSidebar";
import LandlordSidebar from "./LandlordSidebar";
import TanentSidebar from "./TanentSidebar";


export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const [game, setGame] = useState('2')
  return (
    <>
    {(() => {
        switch (game) {
          case '1':
            return <TanentSidebar />
          case '2':
            return <LandlordSidebar />
          case '3':
            return <AgentSidebar />
          default:
            return null
        }
      })()}
    
    </>
  );

};
