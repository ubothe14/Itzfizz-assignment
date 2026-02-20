type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { label: "Client Satisfaction", value: "98%" },
  { label: "Projects Delivered", value: "250+" },
  { label: "Average Rating", value: "4.9★" },
];

interface StatsProps {
  className?: string;
}

export default function Stats({ className = "" }: StatsProps) {
  return (
    <div
      className={`grid w-full max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-3 ${className}`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="glass-card group relative flex flex-col items-start"
          data-stat-index={index}
        >
          <div className="absolute -left-px top-4 h-10 w-[1px] origin-top scale-y-0 bg-gradient-to-b from-white via-white/60 to-transparent opacity-0 transition duration-500 group-hover:scale-y-100 group-hover:opacity-100" />
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-hero-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

