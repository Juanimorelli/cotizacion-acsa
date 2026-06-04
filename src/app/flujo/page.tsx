import PageHeader from "@/components/PageHeader";

export default function Flujo() {
  return (
    <div className="page">
      <PageHeader
        title="Flujo end-to-end del pedido"
        subtitle="DESDE LA CONSULTA HASTA LA COTIZACIÓN ENTREGADA"
        backHref="/"
        backLabel="← Índice"
      />

      <div className="flow-stages">
        <div className="flow-stage">
          <div className="flow-num">1</div>
          <div>
            <h3>El cliente inicia el contacto</h3>
            <p>
              El cliente entra por uno de tres canales y arma su lista de
              productos sin ver precios. Si es cliente existente, se identifica
              con CUIT o teléfono; si no, se cotiza igual como prospect.
            </p>
            <div className="flow-channels">
              <span className="channel-pill channel-web">🌐 Web pública</span>
              <span className="channel-pill channel-wa">💬 WhatsApp Cloud API</span>
              <span className="channel-pill channel-ig">📷 Instagram Messaging</span>
            </div>
          </div>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-stage">
          <div className="flow-num">2</div>
          <div>
            <h3>El sistema encola y rutea</h3>
            <p>
              El pedido entra a Supabase con número único. El motor de
              asignación elige vendedor según:{" "}
              <strong>(a)</strong> vendedor asignado del cliente si existe;{" "}
              <strong>(b)</strong> sucursal por CP / localidad si es prospect;{" "}
              <strong>(c)</strong> balance de carga dentro de la sucursal en
              caso de empate.
            </p>
          </div>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-stage">
          <div className="flow-num">3</div>
          <div>
            <h3>Notificación al vendedor asignado</h3>
            <p>
              El vendedor recibe alerta por WhatsApp del grupo comercial y en
              el tablero web. Tiene <strong>2 hs hábiles</strong> para tomarlo.
              Si no lo toma, el pedido aparece como &quot;sin atender&quot; para
              toda la red y cualquier vendedor puede levantarlo.
            </p>
          </div>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-stage">
          <div className="flow-num">4</div>
          <div>
            <h3>El vendedor arma la cotización</h3>
            <p>
              Click en &quot;Tomar&quot; → abre el cotizador interno (la app
              actual ya hace todo esto: costo, margen por artículo, IVA, flete,
              plazo, Proamigo). El pedido viene pre-cargado con los productos
              del cliente. El sistema sugiere margen basado en histórico del
              cliente cuando exista.
            </p>
          </div>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-stage">
          <div className="flow-num">5</div>
          <div>
            <h3>Cotización entregada al cliente</h3>
            <p>
              Vendedor confirma → se genera PDF con número, validez, plazo de
              pago, observaciones. Sale automáticamente{" "}
              <strong>por el mismo canal por el que llegó</strong>: si vino por
              WhatsApp, vuelve por la misma conversación; si fue web, queda en
              seguimiento + se envía por WhatsApp si dejó número.
            </p>
          </div>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-stage">
          <div className="flow-num">6</div>
          <div>
            <h3>Conversación humana toma el control</h3>
            <p>
              Cualquier ida y vuelta posterior (contraoferta, ajuste de
              cantidades, dudas) sigue por el mismo chat con el vendedor humano.
              Si el cliente acepta, se marca cerrada y eventualmente se
              convierte en orden de compra en el ERP.
            </p>
          </div>
        </div>
      </div>

      <div className="flow-foot">
        <h2>Principios del modelo</h2>
        <div className="flow-foot-grid">
          <div>
            <h3>🔒 Confidencialidad</h3>
            <p>
              El precio nunca es público. El cliente siempre pasa por un
              vendedor (excepto Proamigo). El catálogo no expone stock numérico
              del ERP.
            </p>
          </div>
          <div>
            <h3>⚡ Velocidad</h3>
            <p>
              SLA de 2 hs hábiles. Si el asignado no responde, la red toma el
              pedido. El cliente ve el estado en tiempo real.
            </p>
          </div>
          <div>
            <h3>🤝 No canibaliza al vendedor</h3>
            <p>
              La app es herramienta del equipo comercial, no reemplazo. Cada
              cotización lleva nombre y firma del vendedor.
            </p>
          </div>
          <div>
            <h3>📊 Captura datos para evolucionar</h3>
            <p>
              Cada margen aplicado se guarda. En 6 meses se puede activar
              auto-precio para clientes con histórico estable.
            </p>
          </div>
        </div>
      </div>

      <div className="flow-foot">
        <h2>Stack técnico</h2>
        <div className="stack-grid">
          <div className="stack-card">
            <strong>Front + back</strong>
            <span>
              Next.js 16, React 19, TypeScript
              <br />
              (mismo del cotizador actual)
            </span>
          </div>
          <div className="stack-card">
            <strong>Datos</strong>
            <span>
              Supabase (catálogo, pedidos, clientes)
              <br />
              SQL Server ERP (costo / margen vendedor)
              <br />
              Upstash Redis (cache)
            </span>
          </div>
          <div className="stack-card">
            <strong>Mensajería</strong>
            <span>
              WhatsApp Cloud API (Meta directo)
              <br />
              Instagram Graph API
              <br />
              1.000 conv. / mes gratis
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
