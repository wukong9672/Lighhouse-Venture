import { Reveal } from "../../animations/Reveal";
import { learningSteps } from "../../data/homeExperience";

export const IPOLearningJourney = () => (
  <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
    <div
      className="absolute inset-0 -z-20 opacity-35"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,.94), rgba(0,0,0,.72), rgba(0,0,0,.92)), url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-canvas via-transparent to-canvas" />

    <div className="mx-auto max-w-[1440px]">
      <Reveal className="max-w-4xl">
        <p className="section-kicker">Visual learning experience</p>
        <h2 className="section-title">
          Teach the user what to look at before showing them more data.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-5 lg:grid-cols-4">
        {learningSteps.map((step, index) => (
          <Reveal
            className="glass-panel min-h-[260px] p-6"
            delay={index * 0.08}
            key={step}
          >
            <p className="text-5xl font-bold text-white/20">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-12 text-xl font-light leading-8 text-bodyStrong">
              {step}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
