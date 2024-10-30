import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <main className="min-h-screen max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
