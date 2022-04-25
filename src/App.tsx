import { createContext, useState } from 'react';
import FunctionComponent from './components/function-component';
import ClassComponent from './components/class-component';
import './App.css';

export type Theme = 'dark' | 'light';

export const themeContext = createContext<Theme>('light');

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  const handleChangeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <themeContext.Provider value={theme}>
      <div className='App'>
        <p>
          <span> 修改主题：</span>
          <label onClick={handleChangeTheme.bind(undefined, 'dark')}>
            <input type='radio' name='theme' id='' checked={theme === 'dark'} />
            <span>dark</span>
          </label>
          <label onClick={handleChangeTheme.bind(undefined, 'light')}>
            <input type='radio' name='theme' id='' checked={theme === 'light'} />
            <span>light</span>
          </label>
        </p>
        <hr />
        <SubComponent />
      </div>
    </themeContext.Provider>
  );
}

/** 这是app的子组件，SubComponent的子组件调过SubComponent访问App中的状态 */
function SubComponent() {
  return (
    <div className='component sub-component'>
      <p>这是app的直接子组件，该组件不订阅主题的变化，也不传递主题值，该组件的子组件通过context获取app中的主题</p>
      <FunctionComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
