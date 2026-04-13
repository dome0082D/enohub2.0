import { Link } from "@tanstack/react-router";
import { Wine } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-wine-dark py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-bold">EnoHub</h3>
            <p className="mt-2 text-sm opacity-80">
              La piattaforma che connette cantine e sommelier professionisti in tutta Italia e nel mondo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Esplora</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li><Link to="/cantine" className="hover:opacity-100">Cantine</Link></li>
              <li><Link to="/sommelier" className="hover:opacity-100">Sommelier</Link></li>
              <li><Link to="/eventi" className="hover:opacity-100">Eventi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Account</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li><Link to="/login" className="hover:opacity-100">Accedi</Link></li>
              <li><Link to="/registrazione" className="hover:opacity-100">Registrati</Link></li>
              <li><Link to="/privacy" className="hover:opacity-100">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contatti</h4>
            <ul className="mt-2 space-y-1 text-sm opacity-80">
              <li>info@enohub.it</li>
              <li>+39 02 1234567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          © 2026 EnoHub. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
