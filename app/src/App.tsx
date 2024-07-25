import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyListPage from './pages/CompanyListPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CompanyListPage />} />
                <Route path="/company/:id" element={<CompanyDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
