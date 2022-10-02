import { NavBar, SideBar } from '@/components';

import { useTheme } from '@/hooks/useTheme';
import { ThemeContext } from '@/context';

function App() {
  const [theme, changeTheme] = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App'>
        <NavBar changeTheme={changeTheme} />
        <SideBar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
