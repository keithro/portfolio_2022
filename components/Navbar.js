import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="logo">Keith</div>
      <nav>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Navbar;
