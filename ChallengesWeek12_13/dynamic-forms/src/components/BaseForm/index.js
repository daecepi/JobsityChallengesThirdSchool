import React, { useState } from "react";
import { formStructure } from '../../defaults';

import { Tabs, Tab } from "react-bootstrap";

import Card from "../Card";

import { BaseFormWrapper } from "../../styles/baseComponents";


import 'bootstrap/dist/css/bootstrap.min.css';


function BaseForm() {
  
  function loadForm () {
    const formGotten = localStorage.getItem('form');
    if(!formGotten){
        localStorage.setItem('form', JSON.stringify(formStructure));
        return formStructure;      
    }
    return formGotten;
  }

  const [key, keyChange] = useState("DeviceInfo");
  const [formData, changeFormData] = useState(loadForm); 

  console.log("Form data acquired", formData);

  return (
    <Card title="Base component">
      <BaseFormWrapper>
        <Tabs did="controlled-tab-example" activeKe y={key} onSelect={k => keyChange(k)}>
          {
              formData.tabs.map( tabs =>{
                return (
                    <Tab eventKey={tabs.id} title={tabs.name}>
                        {
                            tabs.attributes.map( attribute => {

                            })
                        }
                    </Tab>
                );
              })
          }
          
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
