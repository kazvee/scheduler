import React, { useState } from 'react';

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);

  function transition(newMode) {
    setMode(newMode);
  }

  return { mode, transition };
};

export default useVisualMode;
