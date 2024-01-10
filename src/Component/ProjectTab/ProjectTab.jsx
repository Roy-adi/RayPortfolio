import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FrontEnd from '../AllProjets/FrontEnd';
import './ProjectTab.css'; // Import the CSS file for styling
import FullStack from '../AllProjets/FullStack';
import SmallProjects from '../AllProjets/SmallProjects';

function ProjectTab() {
  return (
    <div className='taby-container container'>
      <p className='project-title'>Projects </p>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 taby-tabs"
        justify
      >
        <Tab eventKey="home" id='project-tab' title="Small Projects" >
          <SmallProjects/>
        </Tab>
        <Tab eventKey="profile" id='project-tab' title="Front End">
          <FrontEnd />
        </Tab>
        <Tab eventKey="longer-tab" id='project-tab' title="Full Stack">
          <FullStack/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProjectTab;
