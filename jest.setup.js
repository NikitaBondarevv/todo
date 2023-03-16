import React from 'react'

global.React = React;
global.Component = React.Component;
global.fetch = () => Promise.resolve({ json: () => ({}) })
