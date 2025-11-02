import { useEffect, useState } from 'react';
import { Menu, X, Rocket, Layers, Mail, Home } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home', Icon: Home },
    { href: '#projects', label: 'Projects', Icon: Layers },
    { href: '#contact', label: 'Contact', Icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Flames Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              <Icon className="w-4 h-4" /> {label}
            </a>
          ))}
          <a
            href="#projects"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-black bg-white hover:bg-white/90 transition"
          >
            View Work
          </a>
        </div>

        <button
          aria-label="Toggle Menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              <Icon className="w-4 h-4" /> {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
