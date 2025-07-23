import React from 'react';
import Nav from './componets/Nav';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useRef } from 'react';
import { useState } from 'react';
function Counter() {
  // ✅ Good: top-level in a function component
  const [count, setCount] = useState(0);
  // ...
}

function useWindowWidth() {
  // ✅ Good: top-level in a custom Hook
  const [width, setWidth] = useState(window.innerWidth);
  // ...
}
export default function App() {
  const myRef = useRef(null);
  return (
    <div ref={myRef} className="min-h-screen bg-gray-100">
      <Nav />
      <main className="p-4">
       
      </main>

    </div>
  );
}