import React from 'react';
import App from './App';

export default {
  title: 'Application',
  component: App
};

export const Application = () => <App></App>;

Application.story = {
  name: 'Void Factory',
  parameters: {
    actions: { disabled: true },
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  }
};
