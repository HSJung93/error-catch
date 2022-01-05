import React, { Component } from 'react';
import * as Sentry from '@sentry/react';

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  compoentDidCatch(error, info) {
    console.log('error occured.');
    console.log({
      error,
      info
    });
    this.setState({
      error: true
    });
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, { extra: info });
    }
  }

  render() {
    if (this.state.error) {
      return <h1> error occured!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;