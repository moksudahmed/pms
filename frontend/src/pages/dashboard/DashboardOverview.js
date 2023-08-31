
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import LandlordDashboard from "./LandlordDashboard";
import TenantDashboard from "./TenantDashboard";
import PropertyManagerDashboard from "./PropertyManagerDashboard";
export default () => {
  const [game, setGame] = useState('3')
  return (
    <>
    {(() => {
        switch (game) {
          case '1':
            return <TenantDashboard />
          case '2':
            return <LandlordDashboard />
          case '3':
            return <PropertyManagerDashboard />
          default:
            return null
        }
      })()}
    
    </>
  );
};
