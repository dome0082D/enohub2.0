import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Mail, Phone, CheckCircle, ArrowLeft, Award } from "lucide-react";
import { sommelier, cantine } from "@/lib/mock-data";
import sommelierImg from "@/assets/sommelier-tasting.jpg";

export const Route = createFileRoute("/sommelier/$sommelierId")({
  head: ({ params }) => {
    const s = sommelier.find((x) => x.id === params.sommelierId);
    return {
      meta: [
        { title: s ? `${s.nome} ${s.cognome} — EnoHub` : "Sommelier — EnoHub" },
        { name: "description", content: s?.bio?.slice(0, 150) || "" },
      ],
    };
  },
  component: SommelierProfilePage,
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold">Sommelier non trovato</h1>
        <Link to="/sommelier" className="mt-4 inline-block text-wine underline">Torna ai sommelier</Link>
      </div>
    </div>
  ),
});

function SommelierProfilePage() {
  const { sommelierId } = Route.useParams();
  const s = sommelier.find((x) => x.id === sommelierId);

  if (!s) throw notFound();

  const cantineSp = cantine.filter((c) => s.cantineSponsorizzate.includes(c.id));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Profile card */}
      <div className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-muted">
            <img src={sommelierImg} alt={`${s.nome} ${s.cognome}`} className="h-full w-full object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="font-serif text-3xl font-bold text-foreground">{s.nome} {s.cognome}</h1>
            <p className="mt-1 text-muted-foreground">{s.titolo}</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> {s.localita}
            </p>
            {s.disponibile && (
              <p className="mt-2 flex items-center gap-1 text-sm font-medium text-accent-foreground">
                <CheckCircle className="h-4 w-4" /> Disponibile per consulenze
              </p>
            )}
            <button className="mt-4 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-wine-light transition-colors">
              Richiedi Contatto
            </button>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 rounded-xl border bg-card p-6 shadow-sm md:p-8">
        <div className="space-y-6">
          <DetailRow label="Bio" value={s.bio} />
          <DetailRow
            label="Specializzazioni"
            value={
              <div className="flex flex-wrap gap-2">
                {s.specializzazioni.map((sp) => (
                  <span key={sp} className="rounded-full border px-3 py-1 text-sm text-foreground">{sp}</span>
                ))}
              </div>
            }
          />
          <DetailRow
            label="Certificazioni"
            value={
              <ul className="list-disc pl-5 space-y-1 text-foreground">
                {s.certificazioni.map((c) => <li key={c}>{c}</li>)}
              </ul>
            }
          />
          <DetailRow label="Email" value={s.email} />
          <DetailRow label="Telefono" value={s.telefono} />
        </div>
      </div>

      {/* Cantine sponsorizzate */}
      {cantineSp.length > 0 && (
        <div className="mt-6">
          <h2 className="font-serif text-xl font-bold text-wine">Cantine Sponsorizzate</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cantineSp.map((c) => (
              <Link
                key={c.id}
                to="/cantine/$cantinaId"
                params={{ cantinaId: c.id }}
                className="rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-foreground">{c.nome}</h3>
                <p className="text-sm text-muted-foreground">{c.regione}, {c.denominazione}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Note di Degustazione placeholder */}
      <div className="mt-6 rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="font-serif text-xl font-bold text-wine">Le mie Note di Degustazione</h2>
        <hr className="my-3" />
        <p className="text-sm text-muted-foreground">Le note di degustazione saranno disponibili dopo la registrazione.</p>
      </div>

      <div className="mt-8">
        <Link to="/sommelier" className="inline-flex items-center gap-2 text-sm text-wine hover:underline">
          <ArrowLeft className="h-4 w-4" /> Torna ai sommelier
        </Link>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-6">
      <dt className="w-40 shrink-0 font-semibold text-wine">{label}</dt>
      <dd className="flex-1 border-l-2 border-muted pl-4 text-foreground">{value}</dd>
    </div>
  );
}
