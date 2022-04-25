import React from 'react';

import { themeContext, Theme } from '../../App';

interface Props {
  theme: Theme;
}

/**
 * class组件不能通过hooks直接获取context，需要使用 context.Consumer
 */
class Component extends React.Component<Props, any> {
  render() {
    return (
      <div className='component'>
        <h4>嵌套class组件</h4>
        <p>当前主题: {this.props.theme}</p>
      </div>
    );
  }
}

function Wrapper() {
  return (
    <themeContext.Consumer>
      {theme => {
        return <Component theme={theme} />;
      }}
    </themeContext.Consumer>
  );
}

export default Wrapper;
