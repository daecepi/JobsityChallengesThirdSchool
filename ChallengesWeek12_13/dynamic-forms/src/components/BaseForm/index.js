import React, { useState } from "react";

import { Tabs, Tab } from "react-bootstrap";

import Card from "../Card";

import { BaseFormWrapper } from "../../styles/baseComponents";

import 'bootstrap/dist/css/bootstrap.min.css';

function BaseForm() {
  const [key, keyChange] = useState("home");


  loa

  return (
    <Card title="Base component">
      <BaseFormWrapper>
        <Tabs did="controlled-tab-example" activeKe y={key} onSelect={k => keyChange(k)}>
          <Tab eventKey="DeviceInfo" title="Home">
            <p>HOla</p>
          </Tab>
          <Tab eventKey="Sensors" title="Profile">
            <p>HOla2</p>
          </Tab>
          <Tab eventKey="Settings" title="Contact">
            <p>HOla</p>
          </Tab>
          <Tab eventKey="Settings" title="Contact">
            <p>HOla</p>
          </Tab>
        </Tabs>
      </BaseFormWrapper>
    </Card>
  );
}

export default BaseForm;
