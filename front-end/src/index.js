import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TemplateComponent from './components/_TemplateComponent';
import NotFound from './components/NotFound';
import './index.css';
import { BrowserRouter , Match, Miss } from 'react-router'


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />  
        <Match exactly pattern="/component_template" component={TemplateComponent} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
