import LogoImg from "@/public/images/logo.webp";
import Image from "next/image";

function Header() {
  return (
    <header className="flex py-4 bg-transparent">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto w-10/12">
        <a href="/" className="flex items-center gap-2 md:gap-x-3">
          <Image
            src={LogoImg}
            alt="Logo Mis links de pagos"
            width={50}
            height={50}
          />
          <h2
            className="text-white text-2xl font-bold drop-shadow-white hidden md:block"
            translate="no"
          >
            Mis links de pagos
          </h2>
        </a>

        <div className="flex items-center gap-3 md:gap-x-5">
          <a
            href={`${process.env.NEXT_PUBLIC_URL_APP}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-custom-green-1 transition duration-300 ease-in-out"
          >
            Ingresar
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_URL_APP}/register`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-custom-green-1 hover:bg-custom-green-2 text-white rounded-lg transition duration-300 ease-in-out px-4 py-2 text-center w-fit"
          >
            Prueba gratis
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
