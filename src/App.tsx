import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastManager, useToast } from './context/ToastManager';
import { ModalProvider } from '@components/serviceable/modal.service';
import TitleBig from '@components/common/TitleBig';

function App() {

  return (
    <div className="min-h-screen">

      <div className="flex w-full z-49 justify-center m-6">
        <TitleBig />
      </div>

      <header className='flex w-full z-50 justify-center sticky top-0'>
        <Header />  
      </header>

      <div className={`flex-grow 'pt-16' mt-4`}>
        <Routes>
          {routes.map((route, index) => {
            if (route.children) {
              return (
                <Route key={index} path={route.path} element={<route.component name={route.name} {...route.props} />}>
                  {route.children.map((childRoute, childIndex) => (
                    <Route key={childIndex} path={childRoute.path} element={<childRoute.component />} />
                  ))}
                </Route>
              );
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component name={route.name} {...route.props} />}
              />
            );
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <ToastManager>
            <ModalProvider>
              <App />
            </ModalProvider>
          </ToastManager>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default AppWrapper;
