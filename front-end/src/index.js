import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage/App';
import ReferralApp from './components/ReferralApp/App';
import FormTest from './components/_Example/FormTest';
import NotFound from './components/NotFound';
import './css/style.css'
import { BrowserRouter , Match, Miss } from 'react-router'


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainPage} />  
        <Match exactly pattern="/referral" component={ReferralApp} />  
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
