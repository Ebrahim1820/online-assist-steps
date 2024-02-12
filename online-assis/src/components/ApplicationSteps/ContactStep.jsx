// import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Form from "../../ui/Form";
// import Tooltip from "../../ui/Tooltip";
// import DropDown from "../../ui/DropDown";

// eslint-disable-next-line react/prop-types
export function ContactStep({ title }) {
  // const [currentOption, setCurrentOption] = useState();

  // function handleSelectOption(newValue) {
  //   setCurrentOption(() => newValue);
  // }

  return (
    <>
      <Form>
        <Row>
          <Heading as="h1">{title}</Heading>
          {/* UMSATZ VON LETZTE */}
          <label htmlFor="name" style={{ marginRight: "5px" }}>
            Name:{" "}
          </label>
          <Input type="text" id="name" placeholder="Enter your name" />
          {/* EMAIL */}
          <label htmlFor="email" style={{ marginRight: "5px" }}>
            E-mail:{" "}
          </label>
          <Input type="text" id="email" placeholder="user@example.com" />
          {/* PHONE NUMBER */}
          <label htmlFor="tel" style={{ marginRight: "5px" }}>
            Telefonnummer:{" "}
          </label>
          <Input type="text" id="tel" placeholder="+491234567" />
          {/* MESSAGE */}
          <label htmlFor="request" style={{ marginRight: "5px" }}>
            Frage:{" "}
          </label>

          <textarea
            name="body"
            id="request"
            placeholder={"Schreiben Sie bitte Ihre Anfrege... "}
            rows={10}
            cols={35}
            onChange={() => {}}
            style={{ padding: "1rem" }}
          />

          <Row type="horizontal">
            <Button onClick={() => alert("Kontakt Form")}>Kontakt</Button>
            <Button type="submit" onClick={() => alert("Weiter Form")}>
              Weiter
            </Button>
          </Row>
        </Row>
      </Form>
    </>
  );
}
