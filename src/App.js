import React from 'react';
import ProductContainer from './containers/ProductContainer'
import Footer from './components/Footer'
import Header from './components/Header';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer'
function App() {
  return (
    <div>
      <Header/>
      <main id="mainContainer">
        <div className="container">
          <ProductContainer/>
          <MessageContainer/>
         <CartContainer/>
        </div>
      </main>
      <Footer/>
    
    </div>
  );
}
export default App;
