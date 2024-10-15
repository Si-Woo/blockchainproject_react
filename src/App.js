import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Product from './pages/Product/Product';
import Members from './pages/Members';
import Donation from './pages/Donation/Donation';
import NotFound from './pages/NotFound';

function RouterContainer() {
  return (
    // <Router basename="/blockchainproject_react"> // github repogitory 주소
    <Router basename="/"> // 지정 도메인 배포
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Box as="main" flex="1" py={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/members" element={<Members />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterContainer />
    </ChakraProvider>
  );
}

export default App;
