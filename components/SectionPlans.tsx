import IconCheck from "@/icons/IconCheck";

const PLANS = [
  {
    title: "Gratis",
    description: "Empieza gratis y ponte en marcha.",
    price: "$0 COP",
    features: [
      "3 métodos de pagos",
      "Sólo un detalle por método de pago",
      "Marca de agua en tu página de pago",
      "Analíticas básicas",
    ],
    cta: {
      link: `${process.env.NEXT_PUBLIC_URL_APP}/register`,
      text: "Comienza gratis",
    },
  },
  {
    title: "Pro",
    description:
      "Empieza por $18.000 COP y ponte en marcha. (Sólo para early adopters)",
    price: "$18.000 COP",
    features: [
      "Métodos de pago ilimitados",
      "Detalles ilimitados por método de pago",
      "Sin marca de agua en tu página de pago",
      "Analíticas avanzadas",
      "Más funcionalidades",
    ],
    cta: {
      link: process.env.NEXT_PUBLIC_URL_BUY_PREMIUM,
      text: "¡Pruebalo ya!",
    },
  },
];

function SectionPlans() {
  return (
    <section className="flex flex-col md:py-20 py-10 gap-y-10">
      <h2 className="text-center w-10/12 text-2xl font-semibold md:text-3xl max-w-screen-sm mx-auto text-balance">
        Elije el plan que se adapte a sus necesidades
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto max-w-screen-md gap-5 md:gap-10">
        {PLANS.map((plan, idx) => (
          <div
            key={idx}
            className="rounded-lg flex flex-col gap-y-2 bg-custom-black-2 p-4 md:px-7 max-w-md w-full mx-auto md:py-6 drop-shadow-white transition duration-300 ease-in-out hover:drop-shadow-green"
          >
            <h3 className="text-start text-xl font-medium">{plan.title}</h3>
            <p className="text-start">{plan.description}</p>
            <div className="flex flex-col gap-y-2 md:gap-y-4 grow">
              <h3 className="text-4xl font-medium">{plan.price}</h3>
              <ul className="flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex gap-x-2 text-white/90 md:text-lg"
                  >
                    <IconCheck className="size-4 text-custom-green-1 mt-[5px] md:mt-[7px] min-w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={plan.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <button className="bg-custom-green-1 hover:bg-custom-green-2 text-lg text-white rounded-lg px-8 py-2 text-center w-fit mx-auto">
                {plan.cta.text}
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionPlans;
