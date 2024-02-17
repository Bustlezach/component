import React from 'react';
import Button from '../components/Button';
import { GoBellFill, GoCloud, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
  };
  return (
    <div className="App">
      App
      <div>
        <Button
         className='mb-2' 
         primary 
         onClick={handleClick}
        > 
        <GoBellFill />
        Click me!
        </Button>
      </div>
      <div>
        <Button warning rounded>
           < GoCloud />
           Hi there!
        </Button>
      </div>
      <div>
        <Button secondary>
          Submit
        </Button>
      </div>
      <div>
        <Button danger>
          Button
        </Button>
      </div>
      <div>
        <Button rounded outline primary>
           < GoDatabase />
           Computer
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
