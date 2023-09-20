import React, { useState } from 'react';

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setHistory((prev) => [...prev, newMode]);
  }

  function back() {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  }
  return { mode: history[history.length - 1], transition, back };
};

export default useVisualMode;
