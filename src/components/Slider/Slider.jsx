import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getNextRoundRobin, getRandomNumber } from '../../lib/utils/math';
import { sliderContainer } from './style';
import { images } from '../../config/constant';

const Slider = (props) => {
  const {
    altText, banners, height, duration, random, defaultBanner,
  } = props;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const maxLength = images.length;
      const newIndex = random ? getRandomNumber(maxLength) : getNextRoundRobin(maxLength, index);
      setIndex(newIndex);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={sliderContainer}>
        <img src={banners[index] ? banners[index] : defaultBanner} alt={altText} height={height} />
      </div>
    </>
  );
};

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf,
  height: PropTypes.number,
  duration: PropTypes.number,
  random: PropTypes.bool,
  defaultBanner: PropTypes.string.isRequired,
};

Slider.defaultProps = {
  altText: [],
  random: false,
  banners: [],
  height: 10,
  duration: 2,
};

export default Slider;
