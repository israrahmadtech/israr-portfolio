import CursorEffect from "../components/CursorEffect/CursorEffect";
import DarkModeToggle from "../components/DarkMode/DarkMode";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

export default function UserLayout({ children }) {
  return (
    <>
      <div
        id="root"
        className="relative w-full min-h-screen grid grid-cols-[350px_1fr] max-w-[1920px] mx-auto"
      >
        <Sidebar />

        <main
          id="main"
          className="w-full h-screen relative z-40 overflow-y-auto"
        >
          <DarkModeToggle />
          {children}
          <Footer />
        </main>
      </div>

      <CursorEffect />
    </>
  );
}
