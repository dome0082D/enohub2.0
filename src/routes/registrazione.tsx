import { createFileRoute, Link } from "@tanstack/react-router";
import { Wine, User, Mail, Lock, Phone, FileText } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/registrazione")({
  head: () => ({
    meta: [
      { title: "Registrati — EnoHub" },
      { name: "description", content: "Crea il tuo account EnoHub come cantina o sommelier." },
    ],
  }),
  component: RegistrazionePage,
});

function RegistrazionePage() {
  const [tipo, setTipo] = useState<"sommelier" | "cantina" | null>(null);
  const [accettaPrivacy, setAccettaPrivacy] = useState(false);

  if (!tipo) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="w-full max-w-lg text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground">Registrati su EnoHub</h1>
          <p className="mt-2 text-muted-foreground">Scegli il tipo di profilo</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => setTipo("cantina")}
              className="group flex flex-col items-center gap-4 rounded-xl border-2 border-transparent bg-card p-8 shadow-sm transition-all hover:border-wine hover:shadow-md"
            >
              <Wine className="h-12 w-12 text-wine" />
              <span className="font-serif text-xl font-bold text-foreground">Cantina</span>
              <span className="text-sm text-muted-foreground">Registra la tua cantina e connettiti con sommelier professionisti</span>
            </button>
            <button
              onClick={() => setTipo("sommelier")}
              className="group flex flex-col items-center gap-4 rounded-xl border-2 border-transparent bg-card p-8 shadow-sm transition-all hover:border-wine hover:shadow-md"
            >
              <User className="h-12 w-12 text-wine" />
              <span className="font-serif text-xl font-bold text-foreground">Sommelier</span>
              <span className="text-sm text-muted-foreground">Crea il tuo profilo professionale e trova collaborazioni</span>
            </button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Hai già un account?{" "}
            <Link to="/login" className="font-medium text-wine hover:underline">Accedi</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg rounded-xl border bg-card p-8 shadow-sm">
        <div className="flex items-center gap-2">
          <button onClick={() => setTipo(null)} className="text-sm text-wine hover:underline">← Indietro</button>
        </div>
        <h1 className="mt-4 font-serif text-2xl font-bold text-foreground">
          Registrati come {tipo === "cantina" ? "Cantina" : "Sommelier"}
        </h1>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          {tipo === "sommelier" ? (
            <>
              <InputField label="Nome" placeholder="Mario" icon={<User className="h-4 w-4" />} />
              <InputField label="Cognome" placeholder="Rossi" icon={<User className="h-4 w-4" />} />
              <InputField label="Qualifica" placeholder="Head Sommelier" icon={<FileText className="h-4 w-4" />} />
              <InputField label="Specializzazione" placeholder="Borgogna, Fine Dining" icon={<FileText className="h-4 w-4" />} />
            </>
          ) : (
            <>
              <InputField label="Nome Cantina" placeholder="Tenuta..." icon={<Wine className="h-4 w-4" />} />
              <InputField label="Regione" placeholder="Toscana" icon={<FileText className="h-4 w-4" />} />
              <InputField label="Denominazione" placeholder="Chianti Classico DOCG" icon={<FileText className="h-4 w-4" />} />
            </>
          )}
          <InputField label="Email" placeholder="email@esempio.com" type="email" icon={<Mail className="h-4 w-4" />} />
          <InputField label="Telefono" placeholder="+39 333 1234567" icon={<Phone className="h-4 w-4" />} />
          <InputField label="Password" placeholder="••••••••" type="password" icon={<Lock className="h-4 w-4" />} />

          <div>
            <label className="text-sm font-medium text-foreground">Biografia</label>
            <textarea
              placeholder="Racconta qualcosa di te..."
              rows={3}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Immagine Profilo</label>
            <input type="file" accept="image/*" className="mt-1 block w-full text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:text-primary-foreground hover:file:bg-wine-light" />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">CV / Documenti</label>
            <input type="file" className="mt-1 block w-full text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-sm file:text-secondary-foreground" />
          </div>

          <label className="flex items-start gap-2">
            <input type="checkbox" checked={accettaPrivacy} onChange={(e) => setAccettaPrivacy(e.target.checked)} className="mt-1 accent-wine" />
            <span className="text-sm text-muted-foreground">
              Accetto la{" "}
              <Link to="/privacy" className="text-wine hover:underline">Privacy Policy</Link>
              {" "}e i{" "}
              <Link to="/privacy" className="text-wine hover:underline">Termini di Servizio</Link>.
              I miei dati saranno trattati in conformità al GDPR (Regolamento UE 2016/679).
            </span>
          </label>

          <button
            type="submit"
            disabled={!accettaPrivacy}
            className="w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-wine-light disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Crea Account
          </button>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, type = "text", icon }: { label: string; placeholder: string; type?: string; icon: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative mt-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>
  );
}
