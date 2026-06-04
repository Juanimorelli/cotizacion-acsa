import PageHeader from "@/components/PageHeader";

interface Producto {
  nombre: string;
  meta: string;
  emoji: string;
  disponible: boolean;
  featured?: boolean;
}

const PRODUCTOS: Producto[] = [
  { nombre: "Glifosato 66% SG", meta: "Bidón × 20 kg · Atanor", emoji: "🧪", disponible: true },
  { nombre: "Atrazina 50% SC", meta: "Bidón × 20 L · Red Surcos", emoji: "🧪", disponible: true },
  { nombre: "2,4-D Sal Amina 60%", meta: "Bidón × 20 L · Atanor", emoji: "🧪", disponible: false },
  { nombre: "Acetoclor 90% EC", meta: "Bidón × 20 L · Syngenta", emoji: "🧪", disponible: true },
  { nombre: "Dicamba 58%", meta: "Bidón × 20 L · Atanor", emoji: "🧪", disponible: true },
  { nombre: "Metsulfuron Metil 60%", meta: "Bolsa × 1 kg · Atanor", emoji: "🧪", disponible: true },
  { nombre: "Urea Granel Profertil", meta: "A granel · Profertil", emoji: "🌱", disponible: true, featured: true },
  { nombre: "MAP Granel Profertil", meta: "A granel · Profertil", emoji: "🌱", disponible: false },
];

export default function ClienteCatalogo() {
  return (
    <div className="page">
      <PageHeader
        title="Vista del cliente"
        subtitle="MOBILE · CATÁLOGO PÚBLICO"
        backHref="/"
        backLabel="← Índice"
      />

      <div className="phone-wrap">
        <div className="phone">
          <div className="phone-notch"></div>
          <div className="phone-status">
            <span>9:41</span>
            <span>📶 100%</span>
          </div>

          <div className="phone-content">
            <div className="app-bar">
              <div className="app-bar-row">
                <div className="app-logo">
                  ACSA
                  <small>AGRUPACIÓN CAMPONUEVO</small>
                </div>
                <button className="app-icon-btn">☰</button>
              </div>
              <div className="app-search">
                <span>🔍</span>
                <span>Buscar producto, marca o principio activo…</span>
              </div>
            </div>

            <div className="chips-row">
              <span className="chip chip-active">Todos</span>
              <span className="chip">Herbicidas</span>
              <span className="chip">Insecticidas</span>
              <span className="chip">Fungicidas</span>
              <span className="chip">Fertilizantes</span>
              <span className="chip">Semillas</span>
              <span className="chip">Silobolsas</span>
            </div>

            <div className="section-h">Herbicidas · 12 productos</div>

            {PRODUCTOS.map((p) => (
              <div
                key={p.nombre}
                className={`product-card ${p.featured ? "featured" : ""}`}
              >
                <div className="product-thumb">{p.emoji}</div>
                <div className="product-info">
                  <div className="product-name">{p.nombre}</div>
                  <div className="product-meta">{p.meta}</div>
                  <div className="product-actions">
                    {p.disponible ? (
                      <>
                        <span className="badge-stock badge-stock-ok">
                          <span className="badge-dot"></span>Disponible
                        </span>
                        <button className="btn-add">+</button>
                      </>
                    ) : (
                      <>
                        <span className="badge-stock badge-stock-no">
                          <span className="badge-dot"></span>Sin stock — Cotizamos
                        </span>
                        <button className="btn-link-text">Cotizar</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-bar">
              <span>
                Mi lista de cotización <span className="badge-count">3</span>
              </span>
              <span>Pedir cotización →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
