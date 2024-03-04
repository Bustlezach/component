import React, { useState } from 'react'
import Modal from '../components/Modal';
import Button from '../components/Button'

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClcik = () => {
    setShowModal(prev => true);
  };

  const handleClose = () => {
    setShowModal(prev => false);
  };

  const actionBar = <div>
    <Button onClick={ handleClose } primary>
      I Accept
    </Button>
  </div>;

  const modal = <Modal onClose={ handleClose } actionBar={actionBar}>
      <p>
        Here is an important agreement for you to accept
      </p>
    </Modal>;

  return (
    <div className='relative'>
      <Button onClick={ handleClcik } primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus facilisis mi sit amet sollicitudin. Etiam elementum auctor diam at dictum. Praesent ex tellus, accumsan imperdiet faucibus et, lobortis et nulla. Suspendisse commodo pharetra accumsan. Morbi in mauris et mauris tincidunt commodo. Duis rhoncus a magna non bibendum. Nam pellentesque faucibus justo, et euismod risus. Proin scelerisque erat turpis, ut condimentum elit feugiat at. Suspendisse gravida finibus orci nec maximus. Phasellus quis malesuada lectus. Mauris sollicitudin, leo cursus dictum facilisis, nisi massa interdum magna, ac ultricies tellus eros id est. Suspendisse at diam volutpat, vulputate metus in, varius felis. Pellentesque tortor enim, volutpat vitae dui vel, sagittis elementum felis. Quisque volutpat odio quis eleifend consectetur. Phasellus eleifend consequat dolor, quis dapibus quam lobortis nec. Donec in libero aliquet, mattis ex in, convallis nibh.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus facilisis mi sit amet sollicitudin. Etiam elementum auctor diam at dictum. Praesent ex tellus, accumsan imperdiet faucibus et, lobortis et nulla. Suspendisse commodo pharetra accumsan. Morbi in mauris et mauris tincidunt commodo. Duis rhoncus a magna non bibendum. Nam pellentesque faucibus justo, et euismod risus. Proin scelerisque erat turpis, ut condimentum elit feugiat at. Suspendisse gravida finibus orci nec maximus. Phasellus quis malesuada lectus. Mauris sollicitudin, leo cursus dictum facilisis, nisi massa interdum magna, ac ultricies tellus eros id est. Suspendisse at diam volutpat, vulputate metus in, varius felis. Pellentesque tortor enim, volutpat vitae dui vel, sagittis elementum felis. Quisque volutpat odio quis eleifend consectetur. Phasellus eleifend consequat dolor, quis dapibus quam lobortis nec. Donec in libero aliquet, mattis ex in, convallis nibh.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus facilisis mi sit amet sollicitudin. Etiam elementum auctor diam at dictum. Praesent ex tellus, accumsan imperdiet faucibus et, lobortis et nulla. Suspendisse commodo pharetra accumsan. Morbi in mauris et mauris tincidunt commodo. Duis rhoncus a magna non bibendum. Nam pellentesque faucibus justo, et euismod risus. Proin scelerisque erat turpis, ut condimentum elit feugiat at. Suspendisse gravida finibus orci nec maximus. Phasellus quis malesuada lectus. Mauris sollicitudin, leo cursus dictum facilisis, nisi massa interdum magna, ac ultricies tellus eros id est. Suspendisse at diam volutpat, vulputate metus in, varius felis. Pellentesque tortor enim, volutpat vitae dui vel, sagittis elementum felis. Quisque volutpat odio quis eleifend consectetur. Phasellus eleifend consequat dolor, quis dapibus quam lobortis nec. Donec in libero aliquet, mattis ex in, convallis nibh.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus facilisis mi sit amet sollicitudin. Etiam elementum auctor diam at dictum. Praesent ex tellus, accumsan imperdiet faucibus et, lobortis et nulla. Suspendisse commodo pharetra accumsan. Morbi in mauris et mauris tincidunt commodo. Duis rhoncus a magna non bibendum. Nam pellentesque faucibus justo, et euismod risus. Proin scelerisque erat turpis, ut condimentum elit feugiat at. Suspendisse gravida finibus orci nec maximus. Phasellus quis malesuada lectus. Mauris sollicitudin, leo cursus dictum facilisis, nisi massa interdum magna, ac ultricies tellus eros id est. Suspendisse at diam volutpat, vulputate metus in, varius felis. Pellentesque tortor enim, volutpat vitae dui vel, sagittis elementum felis. Quisque volutpat odio quis eleifend consectetur. Phasellus eleifend consequat dolor, quis dapibus quam lobortis nec. Donec in libero aliquet, mattis ex in, convallis nibh.
      </p>
    </div>
  );
}

export default ModalPage;