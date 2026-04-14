interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-accent-400" />
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-neutral-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
