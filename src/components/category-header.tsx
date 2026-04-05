interface CategoryHeaderProps {
  title: string;
  subtitle?: string;
}

export function CategoryHeader({ title, subtitle }: CategoryHeaderProps) {
  const defaultSubtitle =
    "Hier eine kleine Auswahl unseres Angebotes. Wir haben auch alle weiteren Modelle dieser Hersteller im Programm. Wir beraten Sie gerne.";

  return (
    <section
      className="relative overflow-hidden bg-card px-4 pb-20 pt-24 sm:px-6 md:pb-28 md:pt-32 lg:px-8"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%)",
      }}
    >
      {/* Decorative lime bar */}
      <div className="absolute top-0 left-0 h-1.5 w-32 bg-lime sm:w-48" />

      {/* Background texture element */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lime/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <h1
          className="font-heading font-bold uppercase leading-[0.95] tracking-tight text-foreground"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
          }}
        >
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-6 md:text-xl">
          {subtitle ?? defaultSubtitle}
        </p>

        {/* Decorative accent dots */}
        <div className="mt-8 flex items-center gap-2">
          <span className="block h-2.5 w-2.5 rounded-full bg-lime" />
          <span className="block h-2.5 w-8 rounded-full bg-lime/40" />
          <span className="block h-2.5 w-2.5 rounded-full bg-lime/20" />
        </div>
      </div>
    </section>
  );
}
