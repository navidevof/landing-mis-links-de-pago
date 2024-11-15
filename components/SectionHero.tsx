import TryYourLink from "./TryYourLink";

function SectionHero() {
  return (
    <section className="flex flex-col gap-y-3 md:gap-y-4 items-center justify-center py-10 md:py-20 md:bg-hero-gradient-desktop bg-hero-gradient-mb bg-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center w-10/12 mx-auto max-w-screen-lg text-pretty">
        Centraliza tus métodos de pago en un solo enlace
      </h1>
      <p className="text-center max-w-xl text-lg mx-auto text-pretty w-10/12 mb-4 md:text-2xl">
        Transforma tus métodos de pago en una experiencia sencilla, rápida y
        fiable.
      </p>
      <div className="flex flex-col text-center items-center gap-2 md:gap-x-4">
        <TryYourLink />
      </div>
    </section>
  );
}

export default SectionHero;
