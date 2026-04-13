import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { eventi } from "@/lib/mock-data";

export const Route = createFileRoute("/eventi")({
  head: () => ({
    meta: [
      { title: "Eventi — EnoHub" },
      { name: "description", content: "Scopri gli eventi organizzati dalle cantine: degustazioni, masterclass e vendemmie." },
      { property: "og:title", content: "Eventi — EnoHub" },
    ],
  }),
  component: EventiPage,
});

function EventiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-serif text-3xl font-bold text-foreground">Eventi</h1>
      <p className="mt-2 text-muted-foreground">Degustazioni, masterclass e vendemmie organizzate dalle cantine.</p>

      <div className="mt-8 space-y-4">
        {eventi.map((e) => (
          <div key={e.id} className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground">{e.titolo}</h2>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(e.data).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {e.luogo}
                </p>
                <p className="mt-3 text-sm text-foreground">{e.descrizione}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Link
                to="/cantine/$cantinaId"
                params={{ cantinaId: e.cantinaId }}
                className="text-sm font-medium text-wine hover:underline"
              >
                {e.cantinaNome} →
              </Link>
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-wine-light transition-colors">
                Partecipa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
