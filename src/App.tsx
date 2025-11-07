import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-beige">
      <Toaster richColors />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;