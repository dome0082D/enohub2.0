import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — EnoHub" },
      { name: "description", content: "Informativa sulla privacy di EnoHub ai sensi del GDPR." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-bold text-foreground">Informativa sulla Privacy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Ultimo aggiornamento: 13 aprile 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground">
        <section>
          <h2 className="font-serif text-xl font-bold text-wine">1. Titolare del Trattamento</h2>
          <p className="mt-2">
            Il Titolare del trattamento dei dati personali è EnoHub S.r.l., con sede legale in Via del Vino 1, 20121 Milano (MI), Italia.
            Email: privacy@enohub.it — PEC: enohub@pec.it
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-wine">2. Base Giuridica e Finalità del Trattamento</h2>
          <p className="mt-2">Ai sensi dell'art. 6 del Regolamento UE 2016/679 (GDPR), i dati personali sono trattati per le seguenti finalità:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong>Esecuzione contrattuale (Art. 6.1.b):</strong> gestione dell'account, erogazione dei servizi della piattaforma, comunicazioni tra utenti.</li>
            <li><strong>Consenso (Art. 6.1.a):</strong> invio di comunicazioni promozionali e newsletter.</li>
            <li><strong>Interesse legittimo (Art. 6.1.f):</strong> miglioramento del servizio, analisi statistiche aggregate, prevenzione frodi.</li>
            <li><strong>Obbligo legale (Art. 6.1.c):</strong> adempimenti fiscali e contabili.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-wine">3. Tipologie di Dati Raccolti</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Dati identificativi: nome, cognome, email, telefono, indirizzo.</li>
            <li>Dati professionali: qualifiche, certificazioni, specializzazioni, biografia.</li>
            <li>Dati di navigazione: indirizzo IP, browser, pagine visitate, timestamp.</li>
            <li>Contenuti caricati: immagini profilo, CV, documenti, file condivisi in chat.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-wine">4. Modalità di Trattamento e Conservazione</h2>
          <p className="mt-2">
            I dati sono trattati con strumenti elettronici e informatici, con logiche organizzative e modalità strettamente correlate alle finalità indicate.
            I dati sono conservati per il tempo necessario all'erogazione del servizio e comunque non oltre 24 mesi dalla cancellazione dell'account, salvo obblighi di legge.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-wine">5. Comunicazione e Diffusione dei Dati</h2>
          <p className="mt-2">
            I dati del profilo pubblico (nome, qualifica, specializzazioni, bio) sono visibili agli altri utenti della piattaforma.
            I dati non saranno ceduti a terzi per finalità di marketing senza esplicito consenso.
            I dati possono essere comunicati a fornitori di servizi tecnologici (hosting, email) che agiscono come Responsabili del trattamento ai sensi dell'art. 28 GDPR.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-wine">6. Diritti dell'Interessato</h2>
          <p className="mt-2">Ai sensi degli artt. 15-22 del GDPR, l'interessato ha diritto di:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Accedere ai propri dati personali (art. 15)</li>
            <li>Rettificare i dati inesatti (art. 16)</li>
            <li>Cancellare i dati — diritto all'oblio (art. 17)</li>
            <li>Limitare il trattamento (art. 18)</li>
            <li>Portabilità dei dati (art. 20)</li>
            <li>Opporsi al trattamento (art. 21)</li>
            <li>Revocare il consenso in qualsiasi momento</li>
            <li>Proporre reclamo al Garante per la Protezione dei Dati Personali</li>
          </ul>
          <p className="mt-2">Per esercitare i propri diritti: privacy@enohub.it</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-wine">7. Cookie</h2>
          <p className="mt-2">
            Il sito utilizza cookie tecnici necessari al funzionamento e cookie analitici anonimi.
            Per maggiori informazioni, consultare la Cookie Policy.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-wine">8. Modifiche alla Privacy Policy</h2>
          <p className="mt-2">
            EnoHub si riserva il diritto di modificare questa informativa. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
          </p>
        </section>
      </div>
    </div>
  );
}
