export default function Header() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">
        UrbanLoop Dashboard
      </h2>

      <div className="text-sm text-gray-500">
        Welcome
      </div>
    </header>
  );
}