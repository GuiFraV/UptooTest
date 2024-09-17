import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex bg-[#28292e]">
      <Sidebar />
      <div className="flex-1 p-4 bg-[#f6f7f9] rounded-tl-[40px]">
        <Dashboard />
      </div>
    </div>
  );
}
