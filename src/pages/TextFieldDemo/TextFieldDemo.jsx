import React from 'react';
import { TextField, Slider } from '../../components';
import { inputContainer, headingStyle, mainContainer } from './style';
import { DEFAULT_BANNER_IMAGE, images } from '../../config/constant';

const TextFieldDemo = () => (
  <>
    <div style={mainContainer}>
      <Slider altText="Image not found" banners={images} defaultBanner={DEFAULT_BANNER_IMAGE} duration={2000} height={200} random />
    </div>
    <div style={inputContainer}>
      <h4 style={headingStyle}><b>This is a disable Input</b></h4>
      <TextField value="Disabled Input" disabled />
      <h4 style={headingStyle}><b>A Valid Input</b></h4>
      <TextField value="Accessible" />
      <h4 style={headingStyle}><b>An Input with error</b></h4>
      <TextField value="101" errorMessage="Could not be greater than" />
    </div>
  </>
);
export default TextFieldDemo;
