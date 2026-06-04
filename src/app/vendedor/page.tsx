import PageHeader from "@/components/PageHeader";

export default function VendedorTablero() {
  return (
    <div className="main">
      <PageHeader
        title="Panel comercial · Pedidos pendientes"
        subtitle="VENDEDOR · TABLERO KANBAN"
        backHref="/"
        backLabel="← Índice"
      />

      <div className="toolbar">
        <div className="toolbar-search">
          <span className="toolbar-search-icon">🔍</span>
          <input type="text" placeholder="Buscar cliente, producto, número…" />
        </div>
        <div className="toolbar-filters">
          <button className="filter-chip active">Mi cartera</button>
          <button className="filter-chip">Sin asignar</button>
          <button className="filter-chip">Mi sucursal</button>
          <button className="filter-chip">Toda la red</button>
          <span style={{ width: 1, height: 18, background: "var(--border2)", margin: "0 4px" }}></span>
          <button className="filter-chip">Todos</button>
          <button className="filter-chip">💬 WA</button>
          <button className="filter-chip">📷 IG</button>
          <button className="filter-chip">🌐 Web</button>
        </div>
      </div>

      <div className="kanban">
        {/* Recibido */}
        <div className="kanban-col">
          <div className="kanban-col-h">
            <span>📥 Recibido</span>
            <span className="col-count warn">5</span>
          </div>

          <div className="kc urgent">
            <div className="kc-row1">
              <span className="kc-num">#001852</span>
              <span className="channel-pill channel-wa">💬 WA</span>
            </div>
            <div className="kc-cliente">Estancia Las Tres Marías</div>
            <div className="kc-meta">Trenque Lauquen · Nuevo (prospect)</div>
            <div className="kc-items">
              • 100 lts Glifosato 66%
              <br />• 25 bolsas Urea
            </div>
            <div className="kc-footer">
              <span className="kc-sla urgent">⏱ 2 h 15 min</span>
              <button className="kc-action">Tomar</button>
            </div>
          </div>

          <div className="kc warn">
            <div className="kc-row1">
              <span className="kc-num">#001851</span>
              <span className="channel-pill channel-ig">📷 IG</span>
            </div>
            <div className="kc-cliente">Roberto Suárez</div>
            <div className="kc-meta">Carhué · Asignado a Andrés K.</div>
            <div className="kc-items">
              • 30 bidones Acetoclor 90%
              <br />• 5 silobolsas 9×60
            </div>
            <div className="kc-footer">
              <span className="kc-sla warn">⏱ 1 h 40 min</span>
              <button className="kc-action">Tomar</button>
            </div>
          </div>

          <div className="kc">
            <div className="kc-row1">
              <span className="kc-num">#001850</span>
              <span className="channel-pill channel-web">🌐 Web</span>
            </div>
            <div className="kc-cliente">Juan Pérez</div>
            <div className="kc-meta">Pigué · Asignado a Andrés K.</div>
            <div className="kc-items">
              • 40 bidones Glifosato 66%
              <br />• 15 tn Urea Granel
              <br />• 20 bidones Atrazina 50%
            </div>
            <div className="kc-footer">
              <span className="kc-sla">⏱ 28 min</span>
              <button className="kc-action">Tomar</button>
            </div>
          </div>
        </div>

        {/* En curso */}
        <div className="kanban-col">
          <div className="kanban-col-h">
            <span>✋ En curso</span>
            <span className="col-count">3</span>
          </div>

          <div className="kc">
            <div className="kc-row1">
              <span className="kc-num">#001847</span>
              <span className="channel-pill channel-wa">💬 WA</span>
            </div>
            <div className="kc-cliente">Don Vicente SA</div>
            <div className="kc-meta">Coronel Suárez · Cliente PROAMIGO</div>
            <div className="kc-items">
              • 200 bidones Glifosato 66%
              <br />• 50 tn MAP Granel
            </div>
            <div className="kc-footer">
              <span className="kc-sla">Andrés K. · 25 min</span>
              <button className="kc-action">Continuar</button>
            </div>
          </div>

          <div className="kc">
            <div className="kc-row1">
              <span className="kc-num">#001845</span>
              <span className="channel-pill channel-web">🌐 Web</span>
            </div>
            <div className="kc-cliente">Florencia Bories</div>
            <div className="kc-meta">General Acha · Recurrente</div>
            <div className="kc-items">
              • 8 bolsas Metsulfuron 60%
              <br />• 12 bidones 2,4-D
            </div>
            <div className="kc-footer">
              <span className="kc-sla">Andrés K. · 1 h 10 m</span>
              <button className="kc-action">Continuar</button>
            </div>
          </div>

          <div className="kc">
            <div className="kc-row1">
              <span className="kc-num">#001843</span>
              <span className="channel-pill channel-ig">📷 IG</span>
            </div>
            <div className="kc-cliente">Agrop. El Cerrito</div>
            <div className="kc-meta">Macachín · Cliente nuevo</div>
            <div className="kc-items">
              • 6 bidones Cipermetrina
              <br />• 4 bidones Clorpirifos
            </div>
            <div className="kc-footer">
              <span className="kc-sla">Andrés K. · 2 h</span>
              <button className="kc-action">Continuar</button>
            </div>
          </div>
        </div>

        {/* Cotizado */}
        <div className="kanban-col">
          <div className="kanban-col-h">
            <span>📤 Cotizado</span>
            <span className="col-count">4</span>
          </div>

          <div className="kc">
            <div className="kc-row1">
              <span className="kc-num">#001839</span>
              <span className="channel-pill channel-wa">💬 WA</span>
            </div>
            <div className="kc-cliente">Hnos. Martínez SA</div>
            <div className="kc-meta">Pigué · USD 18.450</div>
            <div className="kc-items ok">✓ Enviado por WhatsApp ayer 17:30</div>
            <div className="kc-footer">
              <span className="kc-sla">Esperando respuesta</span>
              <button className="kc-action info">Reenviar</button>
            </div>
          </div>

          <div className="kc">
            <div className="kc-row1">
              <span className="kc-num">#001837</span>
              <span className="channel-pill channel-web">🌐 Web</span>
            </div>
            <div className="kc-cliente">Carlos Lerena</div>
            <div className="kc-meta">Maza · USD 6.220</div>
            <div className="kc-items ok">✓ Cotización abierta por el cliente</div>
            <div className="kc-footer">
              <span className="kc-sla">Visto hace 14 min</span>
              <button className="kc-action info">Ver detalle</button>
            </div>
          </div>

          <div className="kc">
            <div className="kc-row1">
              <span className="kc-num">#001834</span>
              <span className="channel-pill channel-ig">📷 IG</span>
            </div>
            <div className="kc-cliente">Diego Almada</div>
            <div className="kc-meta">Carhué · USD 2.150</div>
            <div className="kc-items">Enviada el lunes 2 / jun</div>
            <div className="kc-footer">
              <span className="kc-sla">Pendiente</span>
              <button className="kc-action info">Seguir</button>
            </div>
          </div>
        </div>

        {/* Cerrado */}
        <div className="kanban-col">
          <div className="kanban-col-h">
            <span>✅ Cerrado</span>
            <span className="col-count">12</span>
          </div>

          <div className="kc success">
            <div className="kc-row1">
              <span className="kc-num">#001826</span>
              <span className="channel-pill channel-wa">✓ ACEPTADA</span>
            </div>
            <div className="kc-cliente">Don Vicente SA</div>
            <div className="kc-meta">USD 42.800 · → OC #4521</div>
          </div>

          <div className="kc success">
            <div className="kc-row1">
              <span className="kc-num">#001824</span>
              <span className="channel-pill channel-wa">✓ ACEPTADA</span>
            </div>
            <div className="kc-cliente">La Esperanza SRL</div>
            <div className="kc-meta">USD 12.140 · → OC #4520</div>
          </div>

          <div className="kc gray">
            <div className="kc-row1">
              <span className="kc-num">#001822</span>
              <span
                className="channel-pill"
                style={{ background: "var(--gray-200)", color: "var(--gray-700)" }}
              >
                ✗ NO TOMÓ
              </span>
            </div>
            <div className="kc-cliente">Agrop. La Loma</div>
            <div className="kc-meta">USD 8.500 · &quot;muy caro vs. comp.&quot;</div>
          </div>

          <div className="kc success">
            <div className="kc-row1">
              <span className="kc-num">#001820</span>
              <span className="channel-pill channel-wa">✓ ACEPTADA</span>
            </div>
            <div className="kc-cliente">Pedro Aguirre</div>
            <div className="kc-meta">USD 3.220 · → OC #4519</div>
          </div>
        </div>
      </div>
    </div>
  );
}
