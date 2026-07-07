import Logo from "@/components/Logo";

export default function CTA() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <Logo className="mb-12" />

      <h2 className="font-display font-bold text-2xl md:text-3xl max-w-xl leading-snug">
        Vamos conversar sobre como a IA pode impulsionar o seu negócio?
      </h2>

      <p className="text-gray-medium mt-4 max-w-md">
        Uma conversa de 20 minutos, sem compromisso, para identificar onde a
        IA gera mais valor para o seu negócio.
      </p>

      <a
        href="https://wa.me/556131991005"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 bg-primary hover:bg-primary-dark transition-colors text-white font-semibold rounded-md px-8 py-4"
      >
        Agendar uma conversa de 20 minutos
      </a>

      <footer className="mt-16 text-xs text-gray-medium">
        Brasília-DF · Hub Tech Soluções em Tecnologia Ltda.
      </footer>
    </section>
  );
}
