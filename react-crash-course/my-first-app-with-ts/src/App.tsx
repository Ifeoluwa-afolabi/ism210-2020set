import React from 'react';
import './App1.css';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld8 from './components/HelloWorld8';
import HelloWorld7 from './components/HelloWorld7/HelloWorld7';
const App: React.FC = () => {
 return (
 <div className="Container">
 <div className="Column1">
 <HelloWorld8 />
 </div>
 <div className="Column2">
 <HelloWorld4 />
 </div>
 <div className="Column3">
 <HelloWorld7 />
 </div>
 </div>
 );
}
export default App;