import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import AppRoutes from "../src/Routes/AppRoutes";
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <Router>
      <RootLayout>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-50">
            <AppRoutes />
          </main>
        </div>
      </RootLayout>
    </Router>
  );
}

export default App;
