import logo from './logo.svg';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from './screens/Home';
import SelectGroupScreen from './screens/SelectGroupScreen';
import VerifyEmail from './screens/VerifyEmail';
function App() {
  return (
   <Router>
   <Routes>  

      <Route path="/" element={<Home />} />  
      <Route  path = '/selectgroup' element = {<SelectGroupScreen />} />
      <Route  path = '/verifyemail' element = {<VerifyEmail />} />

   </Routes>
 </Router>
  );
}

export default App;
