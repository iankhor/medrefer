### Brief steps
1. create your project folder   
```create-react-app medrefer```

2. install packages  
```npm i```

3. install additional packages  
```npm i react-router@4.0.0-alpha.4 history --save```

4. create a folder called components under src  
```src\components```  

5. Delete the original App.js, App.css files in src  

6. In index.js, import the functions as follows  
```import { BrowserRouter, Match, Miss} from 'react-router' ```

7. In the components folder, create a file called App.js and NotFound.js

8. In App.js, add the following code.  
```html
import React, { Component } from 'react'

class App extends Component {
    render(){
        return(
            <div> 
                App page
            </div>
        )
    }
}

export default App
```

9. In NotFound.js, add the following code.
```html
import React, { Component } from 'react'
import StaticHTMLTemplate from './_TemplateStaticHTML'

class NotFound extends Component {
    render(){
        return(
            <div> 
                <h1> Not Found page</h1>
            </div>
        )
    }
}

export default NotFound
```

10. In the index.js file, add the following code.
```html
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NotFound from './components/NotFound';
import './index.css';
import { BrowserRouter , Match, Miss } from 'react-router'


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

```

