import IconFolder from "@/icons/IconFolder";
import IconPig from "@/icons/IconPig";
import IconShare from "@/icons/IconShare";

const CARDS = [
  {
    icon: <IconFolder className="size-7 text-custom-green-1" />,
    title: "Crea tu cuenta",
    description: "Cree tu cuenta y empieza a gestionar tus métodos de pago.",
  },
  {
    icon: <IconPig className="size-7 text-custom-green-1" />,
    title: "Gestione tus métodos",
    description: "Añade, edita y gestiona tus métodos de pago con facilidad.",
  },
  {
    icon: <IconShare className="size-7 text-custom-green-1" />,
    title: "Comparte tu página",
    description:
      "Comparte tu página con todos tus clientes para que puedan pagar.",
  },
];

function SectionInformation() {
  return (
    <section className="bg-custom-black-3 flex flex-col gap-y-10 py-10 md:py-16">
      <h2 className="w-10/12 mx-auto text-center text-2xl font-semibold md:text-3xl max-w-screen-sm text-pretty">
        Todo lo que necesitas para gestionar tus pagos en un solo lugar
      </h2>

      <aside className="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto max-w-screen-xl gap-5 md:gap-10">
        {CARDS.map((card, idx) => (
          <div
            key={idx}
            className="rounded-lg flex flex-col gap-y-2 bg-custom-black-2 p-6 md:px-7 max-w-md w-full mx-auto md:py-6 drop-shadow-white transition duration-300 ease-in-out hover:drop-shadow-green"
          >
            <div className="p-3 grid place-content-center w-fit bg-custom-green-1/10 rounded-full">
              {card.icon}
            </div>
            <h3 className="text-start text-xl font-medium text-pretty">
              {card.title}
            </h3>
            <p className="text-start">{card.description}</p>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default SectionInformation;
