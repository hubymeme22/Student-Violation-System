import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const inputHandler = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  const resetInput = () => {
    setValue(initialValue);
  };

  return [value, inputHandler, resetInput];
}

export default useInput;
