import React, { useState } from 'react';

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);

  return { mode };
};

export default useVisualMode;
