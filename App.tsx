import RootNavigation from './navigation';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
