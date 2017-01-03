import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FormTest from './components/FormTest';
import NotFound from './components/NotFound';
import './css/style.css'
import { BrowserRouter , Match, Miss } from 'react-router'


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />  
        <Match exactly pattern="/formtest" component={FormTest} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
