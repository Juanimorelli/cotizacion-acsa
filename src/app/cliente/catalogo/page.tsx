import PageHeader from "@/components/PageHeader";

interface Producto {
  nombre: string;
  meta: string;
  rubro: string;
  disponible: boolean;
}

const PRODUCTOS: Producto[] = [
  { nombre: "Glifosato 66% SG", meta: "Bidón × 20 kg · Atanor", rubro: "HERBICIDAS", disponible: true },
  { nombre: "Atrazina 50% SC", meta: "Bidón × 20 L · Red Surcos", rubro: "HERBICIDAS", disponible: true },
  { nombre: "2,4-D Sal Amina 60%", meta: "Bidón × 20 L · Atanor", rubro: "HERBICIDAS", disponible: false },
  { nombre: "Acetoclor 90% EC", meta: "Bidón × 20 L · Syngenta", rubro: "HERBICIDAS", disponible: true },
  { nombre: "Dicamba 58%", meta: "Bidón × 20 L · Atanor", rubro: "HERBICIDAS", disponible: true },
  { nombre: "Metsulfuron Metil 60%", meta: "Bolsa × 1 kg · Atanor", rubro: "HERBICIDAS", disponible: true },
  { nombre: "Cipermetrina 25%", meta: "Bidón × 20 L · Red Surcos", rubro: "INSECTICIDAS", disponible: true },
  { nombre: "Clorpirifos 48%", meta: "Bidón × 20 L · Atanor", rubro: "INSECTICIDAS", disponible: true },
  { nombre: "Lambda Cialotrina 5%", meta: "Bidón × 5 L · Syngenta", rubro: "INSECTICIDAS", disponible: false },
  { nombre: "Urea Granel Profertil", meta: "A granel · Profertil", rubro: "FERTILIZANTES", disponible: true },
  { nombre: "MAP Granel Profertil", meta: "A granel · Profertil", rubro: "FERTILIZANTES", disponible: false },
  { nombre: "DAP Granel Profertil", meta: "A granel · Profertil", rubro: "FERTILIZANTES", disponible: true },
  { nombre: "Silobolsa 9×60 CGS", meta: "200 µ · 9 pies × 60 m", rubro: "SILOBOLSAS", disponible: true },
];

// Cantidades simuladas en carrito
const CART = [
  { nombre: "Glifosato 66% SG", qty: 40, unit: "× 20 kg" },
  { nombre: "Atrazina 50% SC", qty: 20, unit: "× 20 L" },
  { nombre: "Urea Granel Profertil", qty: 15, unit: "tn" },
];

const RUBROS = ["HERBICIDAS", "INSECTICIDAS", "FUNGICIDAS", "FERTILIZANTES", "SILOBOLSAS"];

export default function ClienteCatalogo() {
  const grouped = new Map<string, Producto[]>();
  for (const p of PRODUCTOS) {
    if (!grouped.has(p.rubro)) grouped.set(p.rubro, []);
    grouped.get(p.rubro)!.push(p);
  }

  return (
    <div className="main">
      <PageHeader
        title="Catálogo público"
        subtitle="VISTA DEL CLIENTE · MOBILE / DESKTOP"
        backHref="/"
        backLabel="← Índice"
      />

      <div className="toolbar">
        <div className="toolbar-search">
          <span className="toolbar-search-icon">🔍</span>
          <input type="text" placeholder="Buscar producto, marca o principio activo…" />
        </div>
        <div className="toolbar-filters">
          <button className="filter-chip active">Todos</button>
          {RUBROS.map((r) => (
            <button key={r} className="filter-chip">
              {r.charAt(0) + r.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="content-grid">
        {/* TABLA */}
        <div className="content">
          <table className="art-table">
            <thead>
              <tr>
                <th>Artículo</th>
                <th>Presentación</th>
                <th className="center">Estado</th>
                <th className="center">Cantidad</th>
                <th className="center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(grouped.entries()).map(([rubro, items]) => (
                <>
                  <tr key={`r-${rubro}`} className="rubro-row">
                    <td colSpan={5}>
                      {rubro} ({items.length})
                    </td>
                  </tr>
                  {items.map((p) => {
                    const inCart = CART.find((c) => c.nombre === p.nombre);
                    return (
                      <tr key={p.nombre} className={inCart ? "selected" : ""}>
                        <td className="article-name">{p.nombre}</td>
                        <td style={{ color: "var(--muted)", fontSize: "0.72rem" }}>{p.meta}</td>
                        <td className="center">
                          {p.disponible ? (
                            <span className="stock-pill ok">
                              <span className="dot"></span>Disponible
                            </span>
                          ) : (
                            <span className="stock-pill no">
                              <span className="dot"></span>Sin stock
                            </span>
                          )}
                        </td>
                        <td className="center">
                          <input
                            type="text"
                            className={`qty-input ${inCart ? "has-value" : ""}`}
                            defaultValue={inCart ? String(inCart.qty) : ""}
                            placeholder="0"
                          />
                        </td>
                        <td className="center">
                          {p.disponible ? (
                            <button className="btn-add-row">+ Agregar</button>
                          ) : (
                            <button className="btn-cot-row">Cotizar</button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* SUMMARY (sidebar navy idéntico al cotizador) */}
        <div className="summary-col">
          <div className="summary-card">
            <h3>Mi lista de cotización</h3>
            <div className="summary-items">
              {CART.map((c) => (
                <div className="summary-item" key={c.nombre}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="summary-item-name">{c.nombre}</div>
                    <div className="summary-item-qty">
                      {c.qty} {c.unit}
                    </div>
                  </div>
                  <button className="summary-item-remove">×</button>
                </div>
              ))}
            </div>

            <div className="srow">
              <span className="sl">Productos</span>
              <span className="sv">3</span>
            </div>
            <div className="srow">
              <span className="sl">Sucursal sugerida</span>
              <span className="sv" style={{ fontSize: "0.78rem" }}>Pigué</span>
            </div>
            <div className="srow highlight">
              <span className="sl">Tiempo de respuesta</span>
              <span className="sv">&lt; 2 h hábiles</span>
            </div>

            <button className="summary-cta">Pedir cotización →</button>
            <div className="summary-note">
              Los precios los confirma tu vendedor según volumen, plazo y condiciones.
              Sin compromiso de compra.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
