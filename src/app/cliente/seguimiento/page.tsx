import PageHeader from "@/components/PageHeader";

export default function ClienteSeguimiento() {
  return (
    <div className="page">
      <PageHeader
        title="Vista del cliente"
        subtitle="MOBILE · SEGUIMIENTO DEL PEDIDO"
        backHref="/"
        backLabel="← Índice"
      />

      <div className="phone-wrap">
        <div className="phone">
          <div className="phone-notch"></div>
          <div className="phone-status">
            <span>14:22</span>
            <span>📶 100%</span>
          </div>

          <div className="phone-content">
            <div className="app-bar">
              <div className="app-bar-row">
                <div className="app-logo">
                  ACSA
                  <small>SEGUIMIENTO</small>
                </div>
                <button className="app-icon-btn">☰</button>
              </div>
            </div>

            <div className="ticket">
              <div className="ticket-num">COT-2026-001847</div>
              <div className="ticket-title">Tu cotización está en curso</div>
              <div className="ticket-meta">
                <strong>Juan Pérez</strong>
                <br />
                Pedido el martes 4 de junio a las 9:43
                <br />
                3 productos · Sucursal Pigué
              </div>
            </div>

            <div className="channel-banner">
              💬 Esta cotización también te llega por WhatsApp
            </div>

            <div className="vendor-card">
              <div className="v-avatar">AK</div>
              <div>
                <div className="v-name">Andrés Kriger</div>
                <div className="v-sub">Tu vendedor en Pigué</div>
              </div>
              <div className="v-actions">
                <button className="v-btn-wa">💬 WhatsApp</button>
              </div>
            </div>

            <div className="timeline">
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

            <div className="section-h">Productos pedidos</div>
            <div style={{ background: "#fff", padding: "6px 16px 16px" }}>
              <div
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: "0.85rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Glifosato 66% SG</span>
                <strong>40 × 20 kg</strong>
              </div>
              <div
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: "0.85rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Atrazina 50% SC</span>
                <strong>20 × 20 L</strong>
              </div>
              <div
                style={{
                  padding: "8px 0",
                  fontSize: "0.85rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Urea Granel Profertil</span>
                <strong>15 tn</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
