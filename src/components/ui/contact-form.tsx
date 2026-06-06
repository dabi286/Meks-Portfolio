"use client";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10 bg-white/80 border border-primary-100 rounded-2xl shadow-xl max-w-xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-2 text-primary-600 tracking-tight">Contact Information</h2>
      <p className="text-gray-500 mb-4 text-center max-w-md">Feel free to reach out for collaboration, project inquiries, or just to connect!</p>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition">
          <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 8a6 6 0 00-12 0" /></svg>
          <a href="mailto:mekzdaquiz16@gmail.com" className="text-lg font-medium text-gray-800 hover:underline break-all">mekzdaquiz16@gmail.com</a>
        </div>
        <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition">
          <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.586 6.586l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z" /></svg>
          <a href="tel:+639943205311" className="text-lg font-medium text-gray-800 hover:underline">+63 909 468 8185</a>
        </div>
      </div>
    </div>
  );
}