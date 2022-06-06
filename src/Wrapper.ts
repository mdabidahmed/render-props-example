import { useState } from 'react';

const Wrapper = (props: any) => {

  const handleAdd = () => {
    setCount(pre => pre + 1);
  };

  const handleRemove = () => {
    setCount(pre => pre - 1);
  };
  const [count, setCount] = useState(0);
  return props.count(count, handleAdd, handleRemove);
};

export default Wrapper;
