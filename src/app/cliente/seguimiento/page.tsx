import PageHeader from "@/components/PageHeader";

const PRODUCTOS = [
  { nombre: "Glifosato 66% SG", cant: "40 × 20 kg" },
  { nombre: "Atrazina 50% SC", cant: "20 × 20 L" },
  { nombre: "Urea Granel Profertil", cant: "15 tn" },
];

export default function ClienteSeguimiento() {
  return (
    <div className="main">
      <PageHeader
        title="Seguimiento del pedido"
        subtitle="VISTA DEL CLIENTE · ESTADO EN VIVO"
        backHref="/"
        backLabel="← Índice"
      />

      <div className="status-banner">
        <div>
          <div className="num">COT-2026-001847</div>
          <div className="title">Tu cotización está en curso</div>
          <div className="meta">
            Juan Pérez · Pedido hoy a las 9:43 · 3 productos · Sucursal Pigué
          </div>
        </div>
        <button className="btn-wa-circle">💬 Abrir WhatsApp</button>
      </div>

      <div className="content-grid">
        {/* LEFT */}
        <div>
          <div className="timeline">
            <div className="timeline-h">Estado del pedido</div>

            <div className="tl-step done">
              <div className="tl-dot">✓</div>
              <div className="tl-content">
                <div className="tl-title">Pedido recibido</div>
                <div className="tl-time">Hoy · 9:43</div>
                <div className="tl-desc">
                  Recibimos tu pedido por web. Lo encolamos para Andrés Kriger.
                </div>
              </div>
            </div>

            <div className="tl-step done">
              <div className="tl-dot">✓</div>
              <div className="tl-content">
                <div className="tl-title">Tomado por el vendedor</div>
                <div className="tl-time">Hoy · 10:12</div>
                <div className="tl-desc">
                  Andrés tomó tu pedido y lo está cotizando.
                </div>
              </div>
            </div>

            <div className="tl-step active">
              <div className="tl-dot">●</div>
              <div className="tl-content">
                <div className="tl-title">Cotizando…</div>
                <div className="tl-time">En curso</div>
                <div className="tl-desc">
                  Estamos armando tu cotización. Te avisamos por WhatsApp cuando esté lista.
                </div>
              </div>
            </div>

            <div className="tl-step">
              <div className="tl-dot">4</div>
              <div className="tl-content">
                <div className="tl-title" style={{ color: "var(--gray-500)" }}>
                  Cotización enviada
                </div>
                <div className="tl-desc" style={{ color: "var(--gray-500)" }}>
                  Recibís PDF + resumen por WhatsApp.
                </div>
              </div>
            </div>
          </div>

          <div className="form-block">
            <div className="form-block-title">📦 Productos pedidos</div>
            <table className="art-table">
              <tbody>
                {PRODUCTOS.map((p) => (
                  <tr key={p.nombre}>
                    <td className="article-name">{p.nombre}</td>
                    <td className="right" style={{ fontWeight: 700, fontFamily: "var(--mono)" }}>
                      {p.cant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT: vendedor */}
        <div className="summary-col">
          <div className="summary-card">
            <h3>Tu vendedor asignado</h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  color: "var(--navy-dark)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1rem",
                }}
              >
                AK
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Andrés Kriger</div>
                <div style={{ fontSize: "0.75rem", opacity: 0.75, marginTop: 2 }}>
                  Sucursal Pigué
                </div>
              </div>
            </div>

            <div className="srow" style={{ marginTop: 8 }}>
              <span className="sl">Pedido</span>
              <span className="sv" style={{ fontSize: "0.78rem" }}>COT-001847</span>
            </div>
            <div className="srow">
              <span className="sl">Estado</span>
              <span className="sv" style={{ fontSize: "0.78rem", color: "var(--gold-light)" }}>
                Cotizando
              </span>
            </div>
            <div className="srow">
              <span className="sl">Tiempo transcurrido</span>
              <span className="sv" style={{ fontSize: "0.78rem" }}>38 min</span>
            </div>
            <div className="srow highlight">
              <span className="sl">Tiempo restante</span>
              <span className="sv">~1 h 22 min</span>
            </div>

            <button className="btn-whatsapp">💬 Escribir a Andrés por WhatsApp</button>
            <div className="summary-note">
              Esta cotización también te llega por WhatsApp cuando esté lista.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
