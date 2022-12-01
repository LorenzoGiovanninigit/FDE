import React, { useState } from "react";
import { Collapse, Button, CardBody, Card, AccordionHeader } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapseContainer">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item>
          <Accordion.Header>Contatti</Accordion.Header>
          <Accordion.Body>Contatti</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
