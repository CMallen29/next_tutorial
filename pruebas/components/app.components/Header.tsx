import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <Link href="/">Logo</Link>
      <p>Barra de búsqueda</p>
      <div>
        <Link href="/login">Iniciar Sesion</Link>
        <Link href="/explore">Explorar</Link>
      </div>
    </div>
  );
};

export default Header;
