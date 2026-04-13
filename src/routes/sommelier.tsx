import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { sommelier } from "@/lib/mock-data";
import sommelierImg from "@/assets/sommelier-tasting.jpg";

export const Route = createFileRoute("/sommelier")({
  head: () => ({
    meta: [
      { title: "Sommelier — EnoHub" },
      { name: "description", content: "Trova i migliori sommelier professionisti. Filtra per località, specializzazione e certificazione." },
      { property: "og:title", content: "Sommelier — EnoHub" },
      { property: "og:description", content: "Trova i migliori sommelier professionisti su EnoHub." },
    ],
  }),
  component: SommelierPage,
});

function SommelierPage() {
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroLocalita, setFiltroLocalita] = useState("");
  const [filtroDisponibilita, setFiltroDisponibilita] = useState("Tutte");
  const [filtroSpecializzazioni, setFiltroSpecializzazioni] = useState<string[]>([]);
  const [filtroCertificazioni, setFiltroCertificazioni] = useState<string[]>([]);

  const tutteSpecializzazioni = Array.from(new Set(sommelier.flatMap((s) => s.specializzazioni)));
  const tutteCertificazioni = Array.from(new Set(sommelier.flatMap((s) => s.certificazioni)));

  const toggleFilter = (arr: string[], item: string, setter: (v: string[]) => void) => {
    setter(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
  };

  const sommelierFiltrati = sommelier.filter((s) => {
    const matchNome = !filtroNome || `${s.nome} ${s.cognome}`.toLowerCase().includes(filtroNome.toLowerCase());
    const matchLocalita = !filtroLocalita || s.localita.toLowerCase().includes(filtroLocalita.toLowerCase());
    const matchDisp = filtroDisponibilita === "Tutte" || (filtroDisponibilita === "Disponibili" && s.disponibile) || (filtroDisponibilita === "Non disponibili" && !s.disponibile);
    const matchSpec = filtroSpecializzazioni.length === 0 || filtroSpecializzazioni.some((sp) => s.specializzazioni.includes(sp));
    const matchCert = filtroCertificazioni.length === 0 || filtroCertificazioni.some((c) => s.certificazioni.some((sc) => sc.includes(c)));
    return matchNome && matchLocalita && matchDisp && matchSpec && matchCert;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="font-serif text-3xl font-bold text-foreground">Professionisti del Vino</h1>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        {/* Filtri */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="font-semibold text-foreground">Filtra Professionisti</h2>
            <hr className="my-3" />
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Nome:</label>
                <input
                  type="text"
                  placeholder="Es. Marco Bianchi"
                  value={filtroNome}
                  onChange={(e) => setFiltroNome(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Località:</label>
                <input
                  type="text"
                  placeholder="Es. Milano, Londra"
                  value={filtroLocalita}
                  onChange={(e) => setFiltroLocalita(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Disponibilità:</label>
                <select
                  value={filtroDisponibilita}
                  onChange={(e) => setFiltroDisponibilita(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Tutte</option>
                  <option>Disponibili</option>
                  <option>Non disponibili</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Specializzazioni:</label>
                <div className="mt-1 max-h-40 space-y-1 overflow-y-auto rounded-md border p-2">
                  {tutteSpecializzazioni.map((sp) => (
                    <label key={sp} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={filtroSpecializzazioni.includes(sp)}
                        onChange={() => toggleFilter(filtroSpecializzazioni, sp, setFiltroSpecializzazioni)}
                        className="accent-wine"
                      />
                      {sp}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Certificazioni:</label>
                <div className="mt-1 space-y-1 rounded-md border p-2">
                  {["WSET", "AIS", "Court of Master Sommeliers", "FISAR"].map((cert) => (
                    <label key={cert} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={filtroCertificazioni.includes(cert)}
                        onChange={() => toggleFilter(filtroCertificazioni, cert, setFiltroCertificazioni)}
                        className="accent-wine"
                      />
                      {cert}
                    </label>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  setFiltroNome(""); setFiltroLocalita(""); setFiltroDisponibilita("Tutte");
                  setFiltroSpecializzazioni([]); setFiltroCertificazioni([]);
                }}
                className="w-full rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground hover:bg-wine-light"
              >
                Cerca
              </button>
            </div>
          </div>
        </aside>

        {/* Grid sommelier */}
        <div className="flex-1">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {sommelierFiltrati.map((s) => (
              <Link
                key={s.id}
                to="/sommelier/$sommelierId"
                params={{ sommelierId: s.id }}
                className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={sommelierImg}
                    alt={`${s.nome} ${s.cognome}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground">{s.nome} {s.cognome}</h3>
                  <p className="text-sm text-muted-foreground">{s.titolo}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {s.localita}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.specializzazioni.map((sp) => (
                      <span key={sp} className="rounded-full border px-2.5 py-0.5 text-xs text-foreground">{sp}</span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="block w-full rounded-md border bg-secondary py-2 text-center text-sm font-medium text-secondary-foreground group-hover:bg-accent">
                      Vedi Profilo
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {sommelierFiltrati.length === 0 && (
            <p className="mt-8 text-center text-muted-foreground">Nessun sommelier trovato con i filtri selezionati.</p>
          )}
        </div>
      </div>
    </div>
  );
}
