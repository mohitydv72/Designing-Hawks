/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return null;
};

export default ScrollTop