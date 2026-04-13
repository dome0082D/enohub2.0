import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Globe, Mail, Phone, ArrowLeft } from "lucide-react";
import { cantine } from "@/lib/mock-data";
import heroVineyard from "@/assets/hero-vineyard.jpg";
import wineCellar from "@/assets/wine-cellar.jpg";

export const Route = createFileRoute("/cantine/$cantinaId")({
  head: ({ params }) => {
    const cantina = cantine.find((c) => c.id === params.cantinaId);
    return {
      meta: [
        { title: cantina ? `${cantina.nome} — EnoHub` : "Cantina — EnoHub" },
        { name: "description", content: cantina?.storia?.slice(0, 150) || "" },
        { property: "og:title", content: cantina ? `${cantina.nome} — EnoHub` : "Cantina — EnoHub" },
      ],
    };
  },
  component: CantinaProfilePage,
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold">Cantina non trovata</h1>
        <Link to="/cantine" className="mt-4 inline-block text-wine underline">Torna alle cantine</Link>
      </div>
    </div>
  ),
});

function CantinaProfilePage() {
  const { cantinaId } = Route.useParams();
  const cantina = cantine.find((c) => c.id === cantinaId);

  if (!cantina) {
    throw notFound();
  }

  return (
    <div>
      {/* Cover image */}
      <div className="relative h-64 md:h-80">
        <img src={heroVineyard} alt={cantina.nome} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16">
        {/* Header */}
        <div className="-mt-12 flex items-end gap-6 rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg border bg-background text-sm text-muted-foreground">
            Logo
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-foreground md:text-3xl">{cantina.nome}</h1>
            <p className="mt-1 flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {cantina.regione}, {cantina.denominazione}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
          {/* Main content */}
          <div className="flex-1 space-y-8">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-wine">La Nostra Storia</h2>
              <hr className="my-3" />
              <p className="text-foreground leading-relaxed">{cantina.storia}</p>

              <h2 className="mt-8 font-serif text-xl font-bold text-wine">Galleria</h2>
              <hr className="my-3" />
              <div className="grid gap-4 sm:grid-cols-2">
                <img src={wineCellar} alt="Cantina" loading="lazy" className="rounded-lg object-cover h-48 w-full" />
                <img src={heroVineyard} alt="Vigneti" loading="lazy" className="rounded-lg object-cover h-48 w-full" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-80">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">In Breve</h3>
              <hr className="my-3" />
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold">Regione:</dt>
                  <dd className="text-muted-foreground">{cantina.regione}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Denominazione:</dt>
                  <dd className="text-muted-foreground">{cantina.denominazione}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Filosofia:</dt>
                  <dd className="text-muted-foreground">{cantina.filosofia}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Sito Web:</dt>
                  <dd className="text-wine">{cantina.sitoWeb}</dd>
                </div>
              </dl>
              <button className="mt-6 w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-wine-light transition-colors">
                Contatta la Cantina
              </button>
            </div>
          </aside>
        </div>

        <div className="mt-8">
          <Link to="/cantine" className="inline-flex items-center gap-2 text-sm text-wine hover:underline">
            <ArrowLeft className="h-4 w-4" /> Torna alle cantine
          </Link>
        </div>
      </div>
    </div>
  );
}
