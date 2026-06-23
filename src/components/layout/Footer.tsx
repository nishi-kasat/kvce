import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { CONTACT } from "@/lib/site";
import logo from "@/assets/kvce-official-logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="kasat-gradient text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo.url} alt="KVCE logo" width={44} height={44} className="h-11 w-11 rounded-full bg-white/90 p-1" loading="lazy" />
            <span className="font-display text-xl font-extrabold">KVCE</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/80">
            Kasat Virtual College of Education — a flagship venture of Kasat Group of Companies,
            empowering learners through flexible online & distance education.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex size-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-white">About KVCE</Link></li>
            <li><Link to="/success-stories" className="hover:text-white">Success Stories</Link></li>
            <li><Link to="/career-guidance" className="hover:text-white">Career Guidance</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Programs</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link to="/programs" className="hover:text-white">Online Degrees</Link></li>
            <li><Link to="/programs" className="hover:text-white">Postgraduate Degrees</Link></li>
            <li><Link to="/programs" className="hover:text-white">Education & Law</Link></li>
            <li><Link to="/programs" className="hover:text-white">Certifications</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">{CONTACT.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{CONTACT.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/70 sm:px-6 lg:px-8">
          © {year} Kasat Virtual College of Education. A Kasat Group of Companies initiative. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
