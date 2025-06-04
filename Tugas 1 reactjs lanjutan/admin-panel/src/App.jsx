import './App.css';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <AdminPanel />
      </div>
    </div>
  );
}

export default App;
