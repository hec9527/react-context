import React, { useContext } from 'react';
import { themeContext } from '../../App';

/**
 * hooks组件可以通过useContext获取context
 */
const Component: React.FC = () => {
  const theme = useContext(themeContext);

  return (
    <div className='component'>
      <h4>嵌套hooks组件</h4>
      <p>当前主题：{theme}</p>
    </div>
  );
};

export default Component;
