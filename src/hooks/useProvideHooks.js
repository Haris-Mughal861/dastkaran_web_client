import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useProvideHooks = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  return {
    loading: loading || false, // Fallback to false if loading is undefined
    setLoading: setLoading || (() => {}), // Fallback to empty function
    dispatch: dispatch || (() => {}), // Fallback to empty function if dispatch is undefined
  };
};

export default useProvideHooks;
