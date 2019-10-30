import React from "react";

//----------------------------------------------------//
//----------------------------------------------------//

interface IAppProps {}

interface IAppState {
  hasError: boolean;
}

class ErrorBoundry extends React.Component<IAppProps, IAppState> {
  state = {
    hasError: false
  };

  componentDidCatch(error: any, info: any) {
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
