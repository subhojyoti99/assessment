import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ContactMe, CreateContainer, Header, MainContainer, MenuContainer } from './components';
import Footer from './components/Footer';

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col">
          <Header />

          <main className="mt-4 md:mt-6 px-6 md:px-10 py-5 md:py-8 w-full bg-slate-400 text-white rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl">
            <Routes>
              <Route path="/*" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
              <Route path="/menuContainer" element={<MenuContainer />} />
              <Route path="/contactMe" element={<ContactMe />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;