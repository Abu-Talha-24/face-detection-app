import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'Enter the link of the image to find the faces'}
      </p>

      <div className='center'>
        
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center inputFont' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow link ph3 dib white bg-purple'
            onClick={onButtonSubmit}
          ><p>Detect</p></button>
        </div>

      </div>

    </div>
  );
}

export default ImageLinkForm;