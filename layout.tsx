import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-6">Logistics Tracker</h1>
        <nav className="space-y-4">
          <Link href="/" className="block px-4 py-2 rounded-md hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/shipments" className="block px-4 py-2 rounded-md hover:bg-gray-200">
            Shipments
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;

