import React from "react";

class ErrorBoundry extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Oops. Something went wrong !</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
