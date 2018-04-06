import React, { Component } from 'react';
import { Header, Footer } from 'components';

class Layout extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main className="container" role="main">
          {this.props.children}
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Layout;
