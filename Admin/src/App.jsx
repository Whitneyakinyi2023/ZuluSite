// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPanel from './Pages/adminPanel.jsx';
const App = () => {
  return (
    <Router>
      <div>
        {/* Other components or layout can be added here */}
        <Switch>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          {/* Other routes for non-admin views */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
