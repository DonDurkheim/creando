import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import "./WhatsAppButton.css";

const whatsappNumber = "5215512345678"; // Replace with your actual WhatsApp number in international format, no + or spaces
const message = encodeURIComponent("Hello! I would like to get in touch.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

const WhatsAppButton = () => (
  <a
    href={whatsappLink}
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp size={56} color="#fff" />
  </a>
);

export default WhatsAppButton;
