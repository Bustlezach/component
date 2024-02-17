import React from 'react';
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'ree5u',
      label: 'Can i use REACT on a project?',
      Content: 'You can use React on any project you want. You can use React on any project you want You can use React on any project you want',
    },
    {
      id: 'yr65d',
      label: 'Can i use JavaScript on a project?',
      Content: 'You can use React on any project you want. You can use React on any project you wantYou can use React on any project you want',
    },
    {
      id: '54w7j',
      label: 'Can i use Css on a project?',
      Content: 'You can use React on any project you want. You can use React on any project you wantYou can use React on any project you want',
    },
  ];
 return <Accordion items={ items }/>;
}

export default AccordionPage;
