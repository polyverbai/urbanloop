import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Organizations", href: "/dashboard/organizations" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Stakeholders", href: "/dashboard/stakeholders" },
  { name: "Opportunities", href: "/dashboard/opportunities" },
  { name: "Assessments", href: "/dashboard/assessments" },
  { name: "Documents", href: "/dashboard/documents" },
  { name: "Reports", href: "/dashboard/reports" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-green-700">
          UrbanLoop
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-3 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}