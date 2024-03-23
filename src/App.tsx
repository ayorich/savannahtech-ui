import { ChakraProvider, theme } from '@chakra-ui/react';
import LandingPage from './components/pages/landingPage';

export const App = () => (
  <ChakraProvider theme={theme}>
    <LandingPage />
  </ChakraProvider>
);
