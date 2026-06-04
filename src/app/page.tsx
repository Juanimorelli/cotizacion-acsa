import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function Hub() {
  return (
    <div className="page">
      <PageHeader
        title="Catálogo Público + Cotización Online"
        subtitle="PROPUESTA · AGRUPACIÓN CAMPONUEVO S.A."
      />

      <div className="panel">
        <div className="intro-callout">
          Set de pantallas navegables para presentar la propuesta antes de
          aprobarla. Datos de muestra (productos reales del catálogo, clientes
          ficticios). Para la reunión, imprimí el{" "}
          <strong>resumen ejecutivo</strong> y mostrá las pantallas en vivo
          desde acá.
        </div>

        <div className="section-title">👤 Vista del cliente · mobile</div>
        <div className="cards-grid">
          <Link href="/cliente/catalogo" className="card-link">
            <span className="pill pill-cliente">Cliente · Mobile</span>
            <h3>Catálogo público</h3>
            <p>Productos con flag &quot;Disponible&quot;, buscador y filtro por rubro. Sin precios visibles.</p>
          </Link>
          <Link href="/cliente/pedido" className="card-link">
            <span className="pill pill-cliente">Cliente · Mobile</span>
            <h3>Pedir cotización</h3>
            <p>Carrito sin precio + identificación (CUIT, teléfono o prospect).</p>
          </Link>
          <Link href="/cliente/seguimiento" className="card-link">
            <span className="pill pill-cliente">Cliente · Mobile</span>
            <h3>Seguimiento del pedido</h3>
            <p>El cliente ve &quot;Recibido → Asignado a Juan → Cotizado&quot;. Cero ansiedad.</p>
          </Link>
        </div>

        <div className="section-title">🧑‍💼 Vista del equipo comercial · desktop</div>
        <div className="cards-grid">
          <Link href="/vendedor" className="card-link">
            <span className="pill pill-vendedor">Vendedor · Desktop</span>
            <h3>Tablero Kanban</h3>
            <p>Recibido → En curso → Cotizado → Cerrado. Filtros por cartera y sucursal. SLA visible.</p>
          </Link>
        </div>

        <div className="section-title">📋 Documentación para presentar</div>
        <div className="cards-grid">
          <Link href="/flujo" className="card-link">
            <span className="pill pill-doc">Diagrama</span>
            <h3>Flujo end-to-end</h3>
            <p>Recorrido del pedido desde Web / WhatsApp / Instagram hasta la respuesta al cliente.</p>
          </Link>
          <Link href="/resumen" className="card-link">
            <span className="pill pill-doc">Imprimible</span>
            <h3>Resumen ejecutivo</h3>
            <p>1 página: problema, solución, costos, plazo, métricas de éxito.</p>
          </Link>
        </div>

        <div className="section-title">Decisiones cerradas</div>
        <div className="decisions">
          <strong>1. Sin precio público</strong> — toda cotización pasa por vendedor, excepto Proamigo.<br />
          <strong>2. Stock visible</strong> = flag &quot;Disponible&quot; curado por admin (no expone ERP).<br />
          <strong>3. Solo cotizar</strong> — no hay confirmación de compra online ni pago.<br />
          <strong>4. Asignación por cliente</strong> + base compartida (filtro &quot;mi cartera&quot; por default).<br />
          <strong>5. Multi-sucursal</strong> — se infiere del cliente asignado; clientes nuevos por CP / localidad.<br />
          <strong>6. Prospects</strong> — clientes que no existen en el ERP se cotizan igual; el vendedor decide si los crea.
        </div>
      </div>
    </div>
  );
}
