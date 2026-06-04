import Link from "next/link";

interface Props {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backHref,
  backLabel = "← Volver",
}: Props) {
  const hoy = new Date().toLocaleDateString("es-AR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="hdr">
      <div className="hdr-left">
        <div className="hdr-logo">A</div>
        <div>
          <div className="hdr-title">{title}</div>
          {subtitle && <div className="hdr-sub">{subtitle}</div>}
        </div>
      </div>
      <div className="hdr-right">
        <span className="hdr-date">{hoy}</span>
        {backHref && (
          <Link href={backHref} className="hdr-back">
            {backLabel}
          </Link>
        )}
      </div>
    </header>
  );
}
