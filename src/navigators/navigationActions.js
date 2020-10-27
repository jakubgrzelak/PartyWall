import * as React from 'react';
import { NavigationActions } from '@react-navigation/native';
import retry from 'retry';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function reset(name, params) {
  navigationRef.current?.reset(name, params);
}

export function goBack(name, params) {
  try {
    navigationRef.current?.goBack();
  } catch (e) {
    console.log('Cannot go back');
  }
}

export function back() {
  navigationRef.dispatch(
    NavigationActions.back({
      key: null,
    })
  );
}

export function navigateWaitingForRefInitialization(routeName, params) {
  const operation = retry.operation({ maxRetryTime: 5000 });
  operation.attempt(() => {
    try {
      navigate(routeName, params);
    } catch (e) {
      if (!operation.retry(e)) {
        throw e;
      }
    }
  });
}
