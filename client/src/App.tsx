import NavBar from '@/components/NavBar';

import { useTheme } from '@/hooks/useTheme';
import { ThemeContext } from '@/context';

function App() {
  const [theme, changeTheme] = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App'>
        <NavBar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
