import PageHeader from "@/components/PageHeader";

const CART = [
  { nombre: "Glifosato 66% SG", meta: "Bidón × 20 kg · Atanor", qty: 40, unit: "× 20 kg" },
  { nombre: "Atrazina 50% SC", meta: "Bidón × 20 L · Red Surcos", qty: 20, unit: "× 20 L" },
  { nombre: "Urea Granel Profertil", meta: "A granel · Profertil", qty: 15, unit: "tn" },
];

export default function ClientePedido() {
  return (
    <div className="main">
      <PageHeader
        title="Confirmar cotización"
        subtitle="VISTA DEL CLIENTE · IDENTIFICACIÓN Y ENVÍO"
        backHref="/cliente/catalogo"
        backLabel="← Volver al catálogo"
      />

      <div className="content-grid">
        {/* LEFT: form */}
        <div>
          <div className="form-block">
            <div className="form-block-title">📦 Productos a cotizar (3)</div>
            <table className="art-table">
              <thead>
                <tr>
                  <th>Artículo</th>
                  <th>Presentación</th>
                  <th className="center">Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {CART.map((c) => (
                  <tr key={c.nombre}>
                    <td className="article-name">{c.nombre}</td>
                    <td style={{ color: "var(--muted)", fontSize: "0.72rem" }}>{c.meta}</td>
                    <td className="center">
                      <input
                        type="text"
                        className="qty-input has-value"
                        defaultValue={c.qty}
                      />
                    </td>
                    <td className="center">
                      <button className="summary-item-remove" style={{ color: "var(--gray-500)" }}>🗑</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="form-block">
            <div className="form-block-title">🪪 ¿Sos cliente nuestro?</div>
            <div className="id-option-row">
              <div className="id-option selected">
                <div className="id-opt-title">
                  <span className="radio"></span> Sí, soy cliente
                </div>
                <div className="id-opt-desc">
                  Ingresá tu CUIT o teléfono para que tu vendedor reciba el pedido directo.
                </div>
              </div>
              <div className="id-option">
                <div className="id-opt-title">
                  <span className="radio"></span> Soy nuevo
                </div>
                <div className="id-opt-desc">
                  Cotizamos igual. Te asignamos vendedor de la sucursal más cercana.
                </div>
              </div>
            </div>

            <div className="form-row">
              <div>
                <label className="form-label">CUIT o teléfono</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="20-30245678-3"
                />
                <div className="form-help success">
                  ✓ Reconocido: <strong>Juan Pérez</strong> — Sucursal Pigué — Vendedor: Andrés K.
                </div>
              </div>
            </div>
          </div>

          <div className="form-block">
            <div className="form-block-title">📝 Detalles del pedido</div>
            <div className="form-row cols-2">
              <div>
                <label className="form-label">Necesito esto para</label>
                <input type="text" className="form-input" placeholder="Ej: Octubre 2026" />
              </div>
              <div>
                <label className="form-label">Plazo de pago tentativo</label>
                <input type="text" className="form-input" placeholder="Ej: contado, junio 2027, cheque" />
              </div>
            </div>
            <div className="form-row" style={{ marginTop: 12 }}>
              <div>
                <label className="form-label">Observaciones (opcional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Notas para el vendedor"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: summary navy */}
        <div className="summary-col">
          <div className="summary-card">
            <h3>Resumen del pedido</h3>
            <div className="summary-items">
              {CART.map((c) => (
                <div className="summary-item" key={c.nombre}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="summary-item-name">{c.nombre}</div>
                    <div className="summary-item-qty">
                      {c.qty} {c.unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="srow">
              <span className="sl">Cliente</span>
              <span className="sv" style={{ fontSize: "0.78rem" }}>Juan Pérez</span>
            </div>
            <div className="srow">
              <span className="sl">Sucursal</span>
              <span className="sv" style={{ fontSize: "0.78rem" }}>Pigué</span>
            </div>
            <div className="srow">
              <span className="sl">Vendedor asignado</span>
              <span className="sv" style={{ fontSize: "0.78rem" }}>Andrés K.</span>
            </div>
            <div className="srow highlight">
              <span className="sl">Respuesta estimada</span>
              <span className="sv">&lt; 2 h hábiles</span>
            </div>

            <button className="summary-cta">Pedir cotización →</button>
            <div className="summary-note">
              Vas a recibir la cotización por WhatsApp y podés seguir el estado online.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
