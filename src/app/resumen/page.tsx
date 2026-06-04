import Link from "next/link";

export default function Resumen() {
  return (
    <>
      <div className="page" style={{ paddingBottom: 0 }}>
        <Link
          href="/"
          className="hdr-back"
          style={{
            background: "var(--navy)",
            color: "#fff",
            padding: "6px 14px",
            borderRadius: 6,
            display: "inline-block",
            fontSize: "0.78rem",
            fontWeight: 600,
          }}
        >
          ← Volver al índice
        </Link>
        <div className="print-hint">
          📄 Imprimí esta página (Ctrl/Cmd + P) para llevar a la reunión.
        </div>
      </div>

      <div className="onepager">
        <div className="op-hdr">
          <div>
            <h1>Catálogo público + Cotización online</h1>
            <div className="sub">Propuesta · Agrupación Camponuevo S.A.</div>
          </div>
          <div className="meta">
            Versión 1.0<br />
            Junio 2026<br />
            Estado: <strong style={{ color: "var(--gold-main)" }}>Pendiente de aprobación</strong>
          </div>
        </div>

        <div className="op-section">
          <h2>El problema</h2>
          <p>
            En agroinsumos los precios no son públicos: cada vendedor cotiza
            según margen, volumen, plazo e historial del cliente. Hoy un
            segmento creciente de clientes prefiere autoservicio digital y no
            esperar a que el vendedor los llame. Si ACSA no ofrece ese canal,
            ese segmento se va a Bipolos, Agrofy, QIRA o competidores locales.
          </p>
        </div>

        <div className="op-section">
          <h2>La solución</h2>
          <p>
            App pública (web + WhatsApp + Instagram) donde el cliente{" "}
            <strong>arma su lista de productos sin ver precios</strong> y
            solicita cotización. El pedido se rutea automáticamente al vendedor
            asignado del cliente (o por sucursal si es nuevo). El vendedor
            cotiza con la herramienta interna actual y la respuesta vuelve al
            cliente por el mismo canal. Toda cotización pasa por vendedor
            humano — salvo Proamigo, que ya tiene margen estructurado.
          </p>
        </div>

        <div className="op-section">
          <h2>Por qué este modelo</h2>
          <ul>
            <li>Mantiene la confidencialidad del margen — el cliente nunca ve costo ni listas de precios.</li>
            <li>No canibaliza al equipo comercial: el sistema es herramienta del vendedor, lleva su nombre y firma.</li>
            <li>Acelera el ciclo de cotización con SLA de 2 horas hábiles y backup compartido entre vendedores.</li>
            <li>Captura datos estructurados (margen aplicado, plazo, cierre) que en 6 meses permiten activar auto-precio para clientes con histórico estable.</li>
            <li>Reutiliza ~70% del código del cotizador actual: lógica de costo, margen, IVA, flete, plazo y Proamigo.</li>
          </ul>
        </div>

        <div className="op-section">
          <h2>Objetivos de la fase 1 (primeros 90 días post-launch)</h2>
          <div className="op-grid">
            <div className="op-kpi">
              <div className="label">Pedidos digitales</div>
              <div className="value">≥ 80 / mes</div>
            </div>
            <div className="op-kpi">
              <div className="label">Tiempo medio de respuesta</div>
              <div className="value">&lt; 2 h hábiles</div>
            </div>
            <div className="op-kpi">
              <div className="label">Tasa de cierre</div>
              <div className="value">≥ 25 %</div>
            </div>
            <div className="op-kpi">
              <div className="label">Clientes nuevos (prospects)</div>
              <div className="value">≥ 15 / mes</div>
            </div>
            <div className="op-kpi">
              <div className="label">Canales de entrada</div>
              <div className="value">Web · WA · IG</div>
            </div>
            <div className="op-kpi">
              <div className="label">Sucursales operando</div>
              <div className="value">Todas</div>
            </div>
          </div>
        </div>

        <div className="op-cols">
          <div className="op-section">
            <h2>Roadmap (3 fases, ~11 semanas)</h2>
            <ul>
              <li><strong>Fase 1 (4 sem):</strong> catálogo web + carrito de cotización + tablero Kanban + asignación manual + mail al vendedor + PDF de cotización.</li>
              <li><strong>Fase 2 (3 sem):</strong> WhatsApp Cloud API integrado + asignación automática por cliente / CP + SLA visible + envío automático de cotización por WA.</li>
              <li><strong>Fase 3 (4 sem):</strong> Instagram Messaging + dashboard de métricas (tiempos, cierre, margen por sucursal) + sugerencia de margen basada en histórico.</li>
              <li><em>Fase 4 (futura):</em> auto-precio para clientes con &gt;5 cotizaciones cerradas.</li>
            </ul>
          </div>

          <div className="op-section">
            <h2>Costos operativos mensuales</h2>
            <ul>
              <li>Vercel Pro: <strong>USD 20</strong></li>
              <li>Supabase Pro: <strong>USD 25</strong></li>
              <li>Upstash Redis: <strong>USD 0–10</strong></li>
              <li>WhatsApp Cloud API: <strong>$0</strong> hasta 1.000 conv./mes; luego USD 0,005–0,06 por conv. según tipo</li>
              <li>Instagram Messaging API: <strong>$0</strong> (incluido en Meta)</li>
            </ul>
            <p style={{ marginTop: 6 }}>
              <strong>Total estimado: USD 50–80 / mes</strong> para los primeros meses.
            </p>
          </div>
        </div>

        <div className="op-cols">
          <div className="op-section">
            <h2>Riesgos y mitigación</h2>
            <ul>
              <li><strong>Filtrado de info al competidor:</strong> catálogo curado, sin stock numérico, sin precios.</li>
              <li><strong>Sobrecarga del equipo:</strong> SLA visible, asignación automática, métricas individuales.</li>
              <li><strong>Latencia de respuesta:</strong> backup colectivo si el asignado no responde en 2 hs.</li>
              <li><strong>Suplantación de identidad:</strong> OTP por WhatsApp para acceder a información sensible.</li>
            </ul>
          </div>

          <div className="op-section">
            <h2>Lo que NO hace la versión 1</h2>
            <ul>
              <li>No publica precios al cliente (excepto Proamigo).</li>
              <li>No procesa pagos online ni gestiona logística.</li>
              <li>No expone stock numérico — solo flag &quot;Disponible&quot; curado por admin.</li>
              <li>No automatiza el cierre — siempre interviene un vendedor humano.</li>
            </ul>
          </div>
        </div>

        <div className="op-decision">
          <h2>Decisión solicitada</h2>
          <p>
            Aprobación para iniciar <strong>Fase 1</strong> (4 semanas) — MVP
            de captura digital de pedidos. Sin compromiso a Fases 2 y 3 hasta
            evaluar resultados de la primera.
          </p>
        </div>

        <div className="op-footer">
          Agrupación Camponuevo S.A. · Documento interno · No distribuir
        </div>
      </div>
    </>
  );
}
