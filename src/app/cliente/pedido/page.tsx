import PageHeader from "@/components/PageHeader";

export default function ClientePedido() {
  return (
    <div className="page">
      <PageHeader
        title="Vista del cliente"
        subtitle="MOBILE · PEDIR COTIZACIÓN"
        backHref="/"
        backLabel="← Índice"
      />

      <div className="phone-wrap">
        <div className="phone">
          <div className="phone-notch"></div>
          <div className="phone-status">
            <span>9:43</span>
            <span>📶 100%</span>
          </div>

          <div className="phone-content">
            <div className="app-bar">
              <div className="app-bar-row">
                <div className="app-logo">
                  Pedir cotización
                  <small>3 PRODUCTOS</small>
                </div>
                <button className="app-icon-btn">✕</button>
              </div>
            </div>

            <div className="section-h">📦 Productos a cotizar</div>

            <div className="cart-row">
              <div>
                <div className="cart-row-name">Glifosato 66% SG</div>
                <div className="cart-row-meta">Bidón × 20 kg</div>
              </div>
              <div className="qty-ctrl">
                <button>−</button>
                <input type="text" defaultValue="40" />
                <button>+</button>
              </div>
              <button className="cart-row-remove">🗑</button>
            </div>

            <div className="cart-row">
              <div>
                <div className="cart-row-name">Atrazina 50% SC</div>
                <div className="cart-row-meta">Bidón × 20 L</div>
              </div>
              <div className="qty-ctrl">
                <button>−</button>
                <input type="text" defaultValue="20" />
                <button>+</button>
              </div>
              <button className="cart-row-remove">🗑</button>
            </div>

            <div className="cart-row">
              <div>
                <div className="cart-row-name">Urea Granel Profertil</div>
                <div className="cart-row-meta">A granel · toneladas</div>
              </div>
              <div className="qty-ctrl">
                <button>−</button>
                <input type="text" defaultValue="15" />
                <button>+</button>
              </div>
              <button className="cart-row-remove">🗑</button>
            </div>

            <div className="section-h">🪪 ¿Sos cliente nuestro?</div>

            <div style={{ padding: "0 16px" }}>
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
                  <span className="radio"></span> Soy nuevo, cotizamos igual
                </div>
                <div className="id-opt-desc">
                  Te asignamos un vendedor de la sucursal más cercana.
                </div>
              </div>
            </div>

            <div className="form-section" style={{ marginTop: 6 }}>
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

            <div className="form-section">
              <label className="form-label">Necesito esto para</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ej: Octubre 2026"
              />
            </div>

            <div className="form-section">
              <label className="form-label">Plazo de pago tentativo</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ej: contado, junio 2027, cheque"
              />
            </div>

            <div className="form-section">
              <label className="form-label">Observaciones (opcional)</label>
              <input
                type="text"
                className="form-input"
                placeholder="Notas para el vendedor"
              />
            </div>

            <div style={{ padding: 16 }}>
              <button className="btn-primary">Pedir cotización →</button>
              <div
                className="form-help"
                style={{ textAlign: "center", marginTop: 10, lineHeight: 1.4 }}
              >
                Recibís la cotización en menos de 2 hs hábiles.<br />
                Vendedor asignado: <strong>Andrés Kriger</strong> · Sucursal Pigué.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
