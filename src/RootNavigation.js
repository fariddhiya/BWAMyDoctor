import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (name, params) => {
  navigationRef.navigate(name, params);
};

export const resetDetail = async (name, screens) => {
  navigationRef.reset({
    index: 0,
    routes: [{name: name}],
  });
  await navigationRef.navigate(name, screens);
};

export const reset = (name, params) => {
  navigationRef.reset({
    index: 0,
    routes: [{name: name, screens: params}],
  });
};

export const goBack = () => {
  navigationRef.goBack();
};

export const navigationEvent = name => {
  navigationRef.isFocused(name);
};

export const getParams = (name, params) => {
  navigationRef.getParams(name, params);
};

export const resetHome = params => {
  navigationRef.reset({
    index: 1,
    routes: [
      {
        name: 'MainApp',
      },
      {
        name: params,
      },
    ],
  });
};
