import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Form from "../../ui/Form";
import Tooltip from "../../ui/Tooltip";
import DropDown from "../../ui/DropDown";

// eslint-disable-next-line react/prop-types
export function StepTwo({ title, tooltipText1, tooltipText2 }) {
  const options = [
    { value: "Option0", label: " Select a value..." },
    { value: "Option1", label: "500,000 €" },
    { value: "Option2", label: "600,000 €" },
    { value: "Option3", label: "700,000 €" },
    { value: "Option4", label: "800,000 €" },
  ];
  const [currentOption, setCurrentOption] = useState();

  function handleSelectOption(newValue) {
    setCurrentOption(() => newValue);
  }

  return (
    <>
      <Form>
        <Row>
          <Heading as="h1">{title}</Heading>
          {/* UMSATZ VON LETZTE */}
          <Row type="horizental">
            <label htmlFor="lastSales" style={{ marginRight: "5px" }}>
              Umsatz Von Letzte:{" "}
            </label>
            <Tooltip text={tooltipText1}>
              <span
                className="material-symbols-outlined "
                style={{ color: "#d1d5db" }}
              >
                info
              </span>
            </Tooltip>
          </Row>
          <Input type="text" id="lastSales" value={"400,000 €"} />

          {/* AUSWAHLEN */}
          <Row type="horizental">
            <label style={{ marginRight: "5px" }}>Auswahlt: </label>
            <Tooltip text={tooltipText2}>
              <span
                className="material-symbols-outlined "
                style={{ color: "#d1d5db" }}
              >
                info
              </span>
            </Tooltip>
          </Row>

          {/* DROPDOWN */}
          <DropDown
            defaultValue={options[0]}
            value={currentOption}
            onChange={(e) => handleSelectOption(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.key} value={option.value}>
                {option.label}
              </option>
            ))}
          </DropDown>

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
