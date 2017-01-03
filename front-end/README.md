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
```import { BrowserRouter, Match, Miss} from 'react-router'```

7. In the components folder, create a file called App.js and NotFound.js

8. In App.js, add the following code.  
```
import React, { Component } from 'react'  
  
class App extends Component {  
    render(){  
        return(  
            &lt;div&gt;    
                App page  
            &lt;/div&gt;   
        )  
    }  
}  

export default App  
```

9. In NotFound.js, add the following code.
```
import React, { Component } from 'react'   
import StaticHTMLTemplate from './_TemplateStaticHTML'  

class NotFound extends Component {  
    render(){  
        return(  
            &lt;div&gt;   
                &lt;h1&gt; Not Found page&lt;/h1&gt;  
            &lt;/div&gt;  
        )  
    }  
}  

export default NotFound  
```

10. In the index.js file, add the following code.
```
import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './components/App';  
import NotFound from './components/NotFound';  
import './index.css';  
import { BrowserRouter , Match, Miss } from 'react-router'  


const Root = () =&gt;  {  
  return (  
    &lt;BrowserRouter&gt;   
      &lt;div&gt;   
        &lt;Match exactly pattern="/" component={App} /&gt;   
        &lt;Miss component={NotFound} /&gt;     
      &lt;/div&gt;   
    &lt;/BrowserRouter&gt;   
  )  
}  


ReactDOM.render(  
  &lt;Root /&gt; ,  
  document.getElementById('root')  
);  
```

