function App() {
  return (
    <main className="min-h-screen bg-pitchBlack px-6 py-10 text-white sm:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-burntOrange">
          Malaysia Institutional IPO Intelligence
        </p>
        <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl">
          Build the market intelligence layer before the crowd sees the
          narrative.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
          A dark institutional foundation is now initialized with React,
          TypeScript, Tailwind CSS, Framer Motion, Lucide, and Recharts.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["Framework", "Narrative & Liquidity"],
            ["Market", "Bursa Malaysia"],
            ["Focus", "IPO Intelligence"],
          ].map(([label, value]) => (
            <div
              className="border border-white/10 bg-charcoal/80 p-5 backdrop-blur"
              key={label}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                {label}
              </p>
              <p className="mt-3 text-lg font-semibold text-amberGold">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
