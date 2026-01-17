import React from 'react';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';
import ContactCard, { ContactInfo } from '../components/ContactCard/ContactCard.tsx';
import './Contact.css';

const Contact: React.FC = () => {
  const contacts: ContactInfo[] = [
    {
      icon: <Mail />,
      label: 'Email',
      link: 'mailto:ted.c.jenks@gmail.com',
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ted-jenks-ab631a1a3',
    },
    {
      icon: <Github />,
      label: 'GitHub',
      link: 'https://github.com/ted-jenks',
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
