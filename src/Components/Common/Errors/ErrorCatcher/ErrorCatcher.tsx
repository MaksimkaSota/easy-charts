import { type ReactElement, type ReactNode, Component } from 'react';
import { Error } from '../Error/Error';
import { ErrorPopup } from '../ErrorPopup/ErrorPopup';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import { EventType } from '../../../../utils/types/enums';

type PropsType = {
  children: ReactNode;
};
type StateType = {
  UIError: Nullable<ErrorType>;
  promiseError: Nullable<ErrorType>;
};

export class ErrorCatcher extends Component<PropsType, StateType> {
  state: StateType = {
    UIError: null,
    promiseError: null,
  };

  static getDerivedStateFromError() {
    return {
      UIError: {
        message: 'Some UI error! We are sorry... We will fix it soon!',
      },
    };
  }

  componentDidMount(): void {
    window.addEventListener(EventType.Unhandledrejection, this.catchUnhandledPromiseErrors);
  }

  componentWillUnmount(): void {
    window.removeEventListener(EventType.Unhandledrejection, this.catchUnhandledPromiseErrors);
  }

  catchUnhandledPromiseErrors = (event: PromiseRejectionEvent): void => {
    this.setState({
      promiseError: {
        code: event.reason.response?.status,
        message: 'Some Connection error! We are sorry... We will fix it soon!',
      },
    });
  };

  render(): ReactElement {
    const { UIError, promiseError } = this.state;
    const { children } = this.props;

    if (UIError) {
      return <Error message={UIError.message} isGlobalError />;
    }

    return (
      <>
        {children}
        <ErrorPopup
          errorObject={promiseError}
          resetError={(error: Nullable<ErrorType>): void => {
            this.setState({ promiseError: error });
          }}
        />
      </>
    );
  }
}
