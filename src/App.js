import React from 'react';
import { LayoutDashboard, FileText, BarChart3, Pill, Mic, Search } from 'lucide-react';

const Sidebar = () => (
  <aside className="w-64 h-screen bg-white border-r border-gray-200 p-6 flex flex-col fixed left-0 top-0">
    <h1 className="text-xl font-semibold mb-10 tracking-tight text-gray-800">MediTimeline</h1>
    <nav className="space-y-4">
      <a href="#" className="flex items-center space-x-3 text-teal-600 font-medium bg-teal-50 p-2.5 rounded-xl"><LayoutDashboard size={20} /><span>Dashboard</span></a>
      <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 p-2.5 rounded-xl hover:bg-gray-50 transition"><FileText size={20} /><span>Records</span></a>
      <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 p-2.5 rounded-xl hover:bg-gray-50 transition"><BarChart3 size={20} /><span>Analytics</span></a>
    </nav>
  </aside>
);

const TimelineItem = ({ icon: Icon, title, date, type, children }) => (
  <div className="flex gap-4 mb-8 relative">
    <div className="mt-1 flex flex-col items-center">
      <div className="p-3 bg-teal-50 text-teal-600 rounded-full border border-teal-100 shadow-sm z-10">
        <Icon size={20} />
      </div>
      <div className="w-0.5 h-full bg-gray-200 absolute top-8 left-[23px] -z-0"></div>
    </div>
    <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
        <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded-md">{date}</span>
      </div>
      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-teal-50 text-teal-700 mb-4">{type}</span>
      {children}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar />
      <main className="flex-1 ml-64 p-10 max-w-5xl">
        {/* Top Bar with Smart Search */}
        <header className="mb-10 flex items-center bg-white p-2.5 pl-4 rounded-2xl border border-gray-100 shadow-sm">
          <Search className="text-teal-600 mr-2" size={20} />
          <input
            type="text"
            placeholder="Smart Search: Try 'Show recent vitals' or 'Amoxicillin'..."
            className="flex-1 p-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
          />
          <span className="text-xs bg-teal-50 text-teal-600 px-3 py-1.5 rounded-xl font-medium">Semantic AI</span>
        </header>

        {/* Header / Title */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Patient 360-Degree Timeline</h2>
          <p className="text-sm text-gray-500">Heterogeneous medical records, prescriptions, and notes.</p>
        </section>

        {/* Timeline Entries */}
        <section className="max-w-3xl">
          {/* Prescription Event */}
          <TimelineItem icon={Pill} title="Amoxicillin 500mg" date="OCT 25, 2026" type="Prescription">
            <p className="text-sm text-gray-600">Take 1 capsule orally twice daily with food for 7 days.</p>
            <div className="mt-3 flex gap-2">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Dosage: 500mg</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Qty: 14</span>
            </div>
          </TimelineItem>

          {/* Structured Vitals (Lab Report Event) */}
          <TimelineItem icon={FileText} title="Blood Analysis & Vitals Report" date="OCT 22, 2026" type="Lab Report">
            <div className="border border-gray-100 rounded-xl overflow-hidden mt-3">
              <table className="w-full text-left text-xs text-gray-600">
                <thead className="bg-gray-50 text-gray-700 border-b border-gray-100">
                  <tr>
                    <th className="p-3">Metric</th>
                    <th className="p-3">Result</th>
                    <th className="p-3">Reference Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">Blood Pressure</td>
                    <td className="p-3 text-teal-600 font-semibold">120/80 mmHg</td>
                    <td className="p-3 text-gray-400">90/60 - 120/80</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Heart Rate</td>
                    <td className="p-3 text-teal-600 font-semibold">72 bpm</td>
                    <td className="p-3 text-gray-400">60 - 100 bpm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TimelineItem>

          {/* Unstructured Voice/OCR Note Event */}
          <TimelineItem icon={Mic} title="Doctor Notes (OCR Scanned + Voice transcript)" date="OCT 20, 2026" type="Doctor's Note">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 space-y-2">
              <p className="font-semibold text-gray-700">Scanned Document OCR Text:</p>
              <p className="italic bg-white p-3 rounded-lg border border-gray-200">
                "Patient presented mild chest discomfort. Non-radiating, duration 2 days. Clear lung fields. Advised ECG and routine blood count."
              </p>
            </div>
          </TimelineItem>
        </section>
      </main>
    </div>
  );
}
