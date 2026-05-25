const navItems = [
  {
    label: "Data Engine",
    href: "#ipo-intelligence",
  },
  {
    label: "Research",
    href: "#nlf-framework",
  },
  {
    label: "Inner Circle",
    href: "#inner-circle",
  },
];

export const FixedNav = () => (
  <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-6 text-white sm:px-8">
    <a className="flex items-center gap-2" href="#top">
      <span className="h-5 w-5 bg-burntOrange" />
      <span className="text-lg font-bold uppercase tracking-[-0.05em] text-white sm:text-xl">
        MY-IPO <span className="text-burntOrange">Intel</span>
      </span>
    </a>

    <div className="hidden gap-10 text-[0.63rem] font-medium uppercase tracking-[0.3em] text-white/60 md:flex">
      {navItems.map((item) => (
        <a
          className="transition-colors hover:text-burntOrange"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </a>
      ))}
    </div>
  </nav>
);
