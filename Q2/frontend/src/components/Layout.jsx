export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-400 text-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl w-full font-bold text-center">
            Movie Manager
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 p-4 mt-auto">
        <div className="container mx-auto text-center">
          &copy; 2025 Movie Manager
        </div>
      </footer>
    </div>
  );
}
