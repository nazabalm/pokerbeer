import React from 'react';

import Step from './Step';

interface FooterProps {
  steps: Step[];
}

const Footer = ({ steps }: FooterProps) => {
  return <footer>
    {steps.map(step => (<Step {...step} />))}
  </footer>
}

export default Footer;