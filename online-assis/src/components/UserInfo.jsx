import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Form from "../ui/Form";
import Tooltip from "../ui/Tooltip";
import { StepTwo } from "./ApplicationSteps/StepTwo";
import { ContactStep } from "./ApplicationSteps/ContactStep";

function UserInfo() {
  const [customerNumber, setCustomerNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  function handleCustomerNumberChange(event) {
    const value = event.target.value;
    event.preventDefault();
    setCustomerNumber("");
    if (value.trim() !== "") {
      setCustomerNumber(value);
      setErrorMessage("");
    } else {
      setErrorMessage("Customer number is required.");
    }
  }

  function habdleContactButton(event) {
    event.preventDefault();
    if (step < totalSteps && customerNumber.trim() !== "") {
      setStep(totalSteps);
    } else {
      setErrorMessage("Customer number is required.");
    }
  }

  const handleNextStep = (event) => {
    if (customerNumber.trim() !== "") {
      if (step === totalSteps) {
        // If it's the last step, loop back to the first step
        setStep(1);
        setCustomerNumber("");
      } else {
        // Otherwise, go to the next step
        setStep(step + 1);
      }
    } else {
      setErrorMessage("Customer number is required.");
      event.preventDefault();
    }
  };

  return (
    <>
      {step === 1 && (
        <Form>
          <Row>
            <Heading as="h1">TODO: Step 1</Heading>
            <Row type="horizental">
              <label htmlFor="_customerNumber" style={{ marginRight: "5px" }}>
                Kundennummer:{" "}
              </label>
              <Tooltip text={"Please enter your customer numbe! "}>
                <span
                  className="material-symbols-outlined "
                  style={{ color: "#d1d5db" }}
                >
                  info
                </span>
              </Tooltip>
            </Row>

            <Input
              type="text"
              value={customerNumber}
              onChange={handleCustomerNumberChange}
              id="_customerNumber"
              placeholder="Customer Number"
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          </Row>
          <Row type="horizontal" style={{ marginTop: "4rem" }}>
            <Button type="submit" onClick={habdleContactButton}>
              Kontakt
            </Button>
            <Button type="submit" onClick={handleNextStep}>
              Weiter
            </Button>
          </Row>
        </Form>
      )}
      {step === 2 && (
        <StepTwo
          title="Step 2"
          tooltipText1="This is text for infor 1"
          tooltipText2="This text is for info 2"
        ></StepTwo>
      )}
      {step === 3 && (
        <Form>
          <Row>
            <Heading as="h1">TODO: Step 3</Heading>
            <Row type="horizental">
              <label htmlFor="_customerNumber" style={{ marginRight: "5px" }}>
                Kundennummer:{" "}
              </label>
              <Tooltip text={"Please enter your customer numbe! "}>
                <span
                  className="material-symbols-outlined "
                  style={{ color: "#d1d5db" }}
                >
                  info
                </span>
              </Tooltip>
            </Row>

            <Input
              type="text"
              value={customerNumber}
              onChange={handleCustomerNumberChange}
              id="_customerNumber"
              placeholder="Customer Number"
            />
            <Row type="horizontal" style={{ marginTop: "4rem" }}>
              <Button type="submit" onClick={() => alert("Contact")}>
                Kontakt
              </Button>
              <Row type="horizontal">
                <Button type="submit" onClick={handleNextStep}>
                  Weiter
                </Button>
                <Button type="submit" onClick={handleNextStep}>
                  Speichern&Weiter
                </Button>
              </Row>
            </Row>
          </Row>
        </Form>
      )}
      {step === 4 && (
        <ContactStep title="Kontakt Step" />
        // <Form>
        //   <Row>
        //     <Heading as="h1">TODO: Step 4</Heading>
        //     <Row type="horizental">
        //       <label htmlFor="_customerNumber" style={{ marginRight: "5px" }}>
        //         Kundennummer:{" "}
        //       </label>
        //       <Tooltip text={"Please enter your customer numbe! "}>
        //         <span
        //           className="material-symbols-outlined "
        //           style={{ color: "#d1d5db" }}
        //         >
        //           info
        //         </span>
        //       </Tooltip>
        //     </Row>

        //     <Input
        //       type="text"
        //       value={customerNumber}
        //       onChange={handleCustomerNumberChange}
        //       id="_customerNumber"
        //       placeholder="Customer Number"
        //     />
        //     <Row type="horizontal" style={{ marginTop: "4rem" }}>
        //       <Button type="submit" onClick={() => alert("Contact")}>
        //         Kontakt
        //       </Button>
        //       <Button type="submit" onClick={handleNextStep}>
        //         Weiter
        //       </Button>
        //     </Row>
        //   </Row>
        // </Form>
      )}
    </>
  );
}

export default UserInfo;
