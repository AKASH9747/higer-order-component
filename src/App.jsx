import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import WithAuth from "./hoc/WithAuth";

const ProtectedRoute = ({ element }) => {
  const token = false;
  return token ? element : <Navigate to="/" />;
};

const App = () => {
  const AuthenticatedDashboard = WithAuth(Dashboard);
  const AuthenticatedProfile = WithAuth(Profile);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Heigher order components</h1>
              <p>Login components for authenticated user!!</p>
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<AuthenticatedDashboard />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<AuthenticatedProfile />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
