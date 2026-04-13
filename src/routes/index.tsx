import { createFileRoute, Link } from "@tanstack/react-router";
import { Wine, Users, Calendar, Search, ArrowRight } from "lucide-react";
import heroVineyard from "@/assets/hero-vineyard.jpg";
import wineGlass from "@/assets/wine-glass.jpg";
import wineCellar from "@/assets/wine-cellar.jpg";
import sommelierTasting from "@/assets/sommelier-tasting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EnoHub — Connetti Cantine e Sommelier" },
      { name: "description", content: "La piattaforma professionale che connette cantine vinicole e sommelier in Italia e nel mondo." },
      { property: "og:title", content: "EnoHub — Connetti Cantine e Sommelier" },
      { property: "og:description", content: "La piattaforma professionale che connette cantine vinicole e sommelier." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <img
          src={heroVineyard}
          alt="Vigneti toscani al tramonto"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            Il Mondo del Vino,<br />Connesso.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            EnoHub è la piattaforma che unisce cantine vinicole e sommelier professionisti. Scopri, connettiti e collabora.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/cantine"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-wine-light hover:shadow-lg"
            >
              <Wine className="h-5 w-5" />
              Esplora Cantine
            </Link>
            <Link
              to="/sommelier"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/50 bg-transparent px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Users className="h-5 w-5" />
              Trova Sommelier
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Cosa puoi fare su EnoHub
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Wine className="h-8 w-8 text-wine" />}
            title="Scopri le Cantine"
            description="Esplora le migliori cantine italiane, filtra per regione, denominazione e filosofia produttiva."
            link="/cantine"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-wine" />}
            title="Trova Sommelier"
            description="Cerca professionisti del vino per specializzazione, certificazione e disponibilità."
            link="/sommelier"
          />
          <FeatureCard
            icon={<Calendar className="h-8 w-8 text-wine" />}
            title="Partecipa agli Eventi"
            description="Degustazioni, masterclass e vendemmie: scopri gli eventi organizzati dalle cantine."
            link="/eventi"
          />
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Il Fascino del Vino
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl">
              <img src={wineGlass} alt="Calice di vino rosso" loading="lazy" width={800} height={600} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">Degustazione</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img src={wineCellar} alt="Cantina con botti di legno" loading="lazy" width={800} height={600} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">Tradizione</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img src={sommelierTasting} alt="Sommelier professionista" loading="lazy" width={800} height={600} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">Professionalità</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wine py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Unisciti alla Community
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Registrati come cantina o sommelier e inizia a connetterti con i professionisti del vino.
          </p>
          <Link
            to="/registrazione"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground bg-transparent px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Registrati Ora
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <Link to={link} className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-wine group-hover:gap-2 transition-all">
        Scopri <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
