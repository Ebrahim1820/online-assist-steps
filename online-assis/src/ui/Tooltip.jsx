/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyleTooltip = styled.div`
  position: absolute;
  top: 80px;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #ddd;
  padding: 10px;
  border-radius: 4px;
  z-index: 1;
  min-width: 200px;
`;

function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <StyleTooltip>{text}</StyleTooltip>}
    </div>
  );
}
Tooltip.propTypes = {
  text: PropTypes.string.isRequired, // Assuming 'text' should be a string and required
  children: PropTypes.node.isRequired, // Assuming 'children' can be any valid React node and required
};

export default Tooltip;
