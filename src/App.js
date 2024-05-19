import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import BasicText from './Basic_text';
import Footer from './Footer';
import LoadingPage from './loading';
import './styles.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState('');

  function handleSearch() {
    setLoaded(true);
  }

  return (
    <div className="App body">
      <Header />
      <Form onCityChange={setCity} onSearch={handleSearch} />
      {loaded ? (
        <BasicText city={city} />
      ) : (
        <LoadingPage />
      )}
      <Footer />
    </div>
  );
}
