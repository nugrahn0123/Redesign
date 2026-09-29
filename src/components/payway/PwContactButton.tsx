export function PwContactButton() {
  return (
    <a
      href="mailto:cs@sakusultan.id"
      aria-label="Email CS Saku Sultan"
      className="fixed bottom-5 right-5 z-[100] group flex items-center gap-0 hover:gap-3 focus-visible:gap-3 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/50"
    >
      <span className="hidden md:block opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 translate-x-2 group-hover:translate-x-0 group-focus-visible:translate-x-0 transition-all duration-300 bg-[#042718] text-white text-sm font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
        Email CS
      </span>
      <span className="w-14 h-14 rounded-full bg-[#168344] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
        </svg>
      </span>
    </a>
  );
}