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
      { name: 'white', value: '#FFFFFF', default: true },
      { name: 'Capital Azur', value: 'linear-gradient(342.21deg, #FFFFFF 0%, #F4F8F8 100%)', default: true },
    ]
  }
};