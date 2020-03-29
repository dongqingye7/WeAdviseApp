import React from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AppointmentForm from './AppointmentForm.js';
import Status from './Status';

function Schedule() {
  return (
    <div className="Schedule">
      <Tabs defaultActiveKey="Status" id="scheduleTab">
        <Tab eventKey="Status" title="Status">
          <Status />
        </Tab>
        <Tab eventKey="MakeAppointment" title="Make Appointment">
          <AppointmentForm />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Schedule;
