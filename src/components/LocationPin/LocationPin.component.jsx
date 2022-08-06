import "./LocationPin.style.css";
import { Icon } from "@iconify/react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="mdi-light:map-marker" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);
export default LocationPin;
