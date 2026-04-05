import { Phone } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/51923855410"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:bg-whatsapp-hover transition-transform hover:scale-110 flex items-center justify-center animate-bounce-subtle"
      aria-label="Contactar por WhatsApp"
    >
      <Phone className="w-8 h-8" />
    </Link>
  );
}
