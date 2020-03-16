import React from 'react';
import { Header } from './components/header/header.component';
import { Container } from './components/container/container.component';
import { Overview } from './components/overview-card/overview-card.component';
import { Greeting } from './components/greeting/greeting.component';
import { Balance } from './components/balances/balances.component';
import { TransactionHistory } from './components/transaction-history/transaction-history.component';
import { AddTransaction } from './components/add-transaction/add-transaction.component';
import { TransactionsProvider } from './context/transactions.context';


function App() {
  return (
    <div>
      <TransactionsProvider>
        <Container>
          <Header />
          <Greeting message="Hello, Shaurya" />
          <Overview balance="-400"/>
          <Balance credit={500} debit={100}/>
          <TransactionHistory/>
          <AddTransaction />
        </Container>
      </TransactionsProvider>
    </div>
  );
}

export default App;
