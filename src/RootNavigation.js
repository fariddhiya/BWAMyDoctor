import {createNavigationContainerRef} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const setNavigator = nav => {
  navigator = nav;
};

const navigate = (name, params) => {
  navigationRef.navigate(name, params);
};

const reset = (name, params) => {
  navigationRef.reset({
    index: 0,
    routes: [{name: name, scren: params}],
  });
};

const goBack = () => {
  navigationRef.goBack();
};

export {navigationRef, setNavigator, navigate, reset, goBack};
