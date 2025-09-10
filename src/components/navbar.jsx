import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center border-b border-slate-200 p-3 md:p-4">
      <div className="max-w-7xl w-full h-full flex flex-wrap justify-between items-center gap-4 md:gap-4">
        <Link
          className="relative flex items-center gap-2"
          data-state="closed"
          data-slot="context-menu-trigger"
          href="/"
        >
          <Image src={"/logo.png"} alt="JainPath Logo" width={24} height={24} />
          <nav className="font-bold text-xl tracking-tight from-[#631646] via-[#8C2A4D] to-[#631646] bg-gradient-to-r via-30% text-transparent bg-clip-text">
            Jain Path
          </nav>
        </Link>
        <div className="flex flex-1 justify-end items-center gap-3 flex-wrap">
          <Link
            href="/pachkhans"
            className="text-slate-500 text-sm font-medium"
          >
            <nav>Pachkhans</nav>
          </Link>
          <Link href="/stavans" className="text-slate-500 text-sm font-medium">
            <nav>Stavans</nav>
          </Link>
          <Link
            href="/mandir-vidhi"
            className="text-slate-500 text-sm font-medium whitespace-nowrap"
          >
            <nav>Mandir Vidhi</nav>
          </Link>
        </div>
        {/* <Button></Button> */}
      </div>
    </header>
  );
};

export default Navbar;
