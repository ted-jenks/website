import React from 'react';
import './ContactCard.css';

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  link: string;
}

interface ContactCardProps {
  contact: ContactInfo;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const handleClick = () => {
    window.open(contact.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-card" onClick={handleClick}>
      <div className="contact-icon">
        {contact.icon}
      </div>
      <p className="contact-label">{contact.label}</p>
    </div>
  );
};

export default ContactCard;
