import React from 'react';
import { LayoutDashboard, FileText, BarChart3, Pill, Mic, Search } from 'lucide-react';

const Sidebar = () => (
  <aside className="w-64 h-screen bg-white border-r border-gray-200 p-6 flex flex-col">
    <h1 className="text-xl font-semibold mb-10 tracking-tight">MediTimeline</h1>
    <nav className="space-y-4">
      <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-softTeal"><LayoutDashboard size={20} /><span>Dashboard</span></a>
      <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-softTeal"><FileText size={20} /><span>Records</span></a>
      <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-softTeal"><BarChart3 size={20} /><span>Analytics</span></a>
    </nav>
  </aside>
);

const TimelineItem = ({ icon: Icon, title, date, type, children }) => (
  <div className="flex gap-4 mb-8">
    <div className="mt-1 flex flex-col items-center">
      <div className="p-2 bg-softTeal/10 text-softTeal rounded-full">
        <Icon size={18} />
      </div>
      <div className="w-px h-full bg-gray-200 mt-2"></div>
    </div>
    <div className="flex-1 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-lg">{title}</h3>
        <span className="text-xs text-gray-400 font-mono">{date}</span>
      </div>
      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-gray-100 mb-3">{type}</span>
      {children}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="flex h-screen bg-bgLight">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-10">
        <header className="mb-10 flex items-center bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
          <Search className="text-gray-400 ml-2" />
          <input type="text" placeholder="Semantic Search (e.g., 'show recent lab results')" className="flex-1 p-2 outline-none ml-2" />
        </header>

        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Patient 360-degree Timeline</h2>

          <TimelineItem icon={Pill} title="Amoxicillin 500mg" date="OCT 25, 2026" type="Prescription">
            <p className="text-sm text-gray-600">Twice daily for 7 days.</p>
          </TimelineItem>

          <TimelineItem icon={FileText} title="Blood Analysis Report" date="OCT 22, 2026" type="Lab Report">
            <div className="border border-gray-100 p-3 rounded-xl bg-gray-50 mt-2">
                <p className="text-xs font-mono text-gray-500">[Structured Vitals Placeholder]</p>
            </div>
          </TimelineItem>

          <TimelineItem icon={Mic} title="Consultation Note" date="OCT 20, 2026" type="Doctor's Note">
            <div className="border border-gray-100 p-3 rounded-xl bg-gray-50 mt-2">
                <p className="text-xs font-mono text-gray-500">[Unstructured OCR Preview Placeholder]</p>
            </div>
          </TimelineItem>
        </section>
      </main>
    </div>
  );
}
