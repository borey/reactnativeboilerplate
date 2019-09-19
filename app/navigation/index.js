import React from 'react';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';

const AppNavigator = () => {
  return (
    <NavigationStack
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default AppNavigator;
