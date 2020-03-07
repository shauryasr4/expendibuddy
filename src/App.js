import React from 'react';
import { Header } from './components/header/header.component';
import { Container } from './components/container/container.component';
import { Overview } from './components/overview-card/overview-card.component';
import { Greeting } from './components/greeting/greeting.component';
import { Balance } from './components/balances/balances.component';


function App() {
  return (
    <div>
      <Container>
        <Header />
        <Greeting message="Hello, Shaurya" />
        <Overview balance="-400"/>
        <Balance />
      </Container>
    </div>
  );
}

export default App;
