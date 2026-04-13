import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { cantine } from "@/lib/mock-data";
import wineCellar from "@/assets/wine-cellar.jpg";

export const Route = createFileRoute("/cantine")({
  head: () => ({
    meta: [
      { title: "Cantine — EnoHub" },
      { name: "description", content: "Esplora tutte le cantine iscritte su EnoHub. Filtra per regione, città e nome." },
      { property: "og:title", content: "Cantine — EnoHub" },
      { property: "og:description", content: "Esplora tutte le cantine iscritte su EnoHub." },
    ],
  }),
  component: CantinePage,
});

function CantinePage() {
  const [filtroRegione, setFiltroRegione] = useState("");
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroFilosofia, setFiltroFilosofia] = useState("");

  const cantineFiltrate = cantine.filter((c) => {
    const matchRegione = !filtroRegione || c.regione.toLowerCase().includes(filtroRegione.toLowerCase());
    const matchNome = !filtroNome || c.nome.toLowerCase().includes(filtroNome.toLowerCase());
    const matchFilosofia = !filtroFilosofia || c.filosofia.toLowerCase().includes(filtroFilosofia.toLowerCase());
    return matchRegione && matchNome && matchFilosofia;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="font-serif text-3xl font-bold text-foreground">Cantine</h1>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        {/* Filtri sidebar */}
        <aside className="w-full shrink-0 lg:w-64">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="font-semibold text-foreground">Filtra Cantine</h2>
            <hr className="my-3" />
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Nome:</label>
                <input
                  type="text"
                  placeholder="Es. Tenuta..."
                  value={filtroNome}
                  onChange={(e) => setFiltroNome(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Regione:</label>
                <input
                  type="text"
                  placeholder="Es. Toscana"
                  value={filtroRegione}
                  onChange={(e) => setFiltroRegione(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Filosofia:</label>
                <input
                  type="text"
                  placeholder="Es. Biologico"
                  value={filtroFilosofia}
                  onChange={(e) => setFiltroFilosofia(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                onClick={() => { setFiltroNome(""); setFiltroRegione(""); setFiltroFilosofia(""); }}
                className="w-full rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground hover:bg-wine-light"
              >
                Resetta Filtri
              </button>
            </div>
          </div>
        </aside>

        {/* Grid cantine */}
        <div className="flex-1">
          <div className="grid gap-6 sm:grid-cols-2">
            {cantineFiltrate.map((cantina) => (
              <Link
                key={cantina.id}
                to="/cantine/$cantinaId"
                params={{ cantinaId: cantina.id }}
                className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={wineCellar}
                    alt={cantina.nome}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground">{cantina.nome}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {cantina.regione}, {cantina.denominazione}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cantina.tags.map((tag) => (
                      <span key={tag} className="rounded-full border px-3 py-0.5 text-xs text-foreground">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="w-full block rounded-md border bg-secondary py-2 text-center text-sm font-medium text-secondary-foreground group-hover:bg-accent">
                      Vedi Pagina
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {cantineFiltrate.length === 0 && (
            <p className="mt-8 text-center text-muted-foreground">Nessuna cantina trovata con i filtri selezionati.</p>
          )}
        </div>
      </div>
    </div>
  );
}
