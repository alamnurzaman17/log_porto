import Link from "next/link";
import "./BtnLink.css";
import { usePathname } from "next/navigation";

interface BtnLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function BtnLink({ href, children }: BtnLinkProps): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Link href={href} type="button" className="pointer-events-none">
        <div className="relative pointer-events-auto BtnLink flex items-center justify-center w-20 h-fit py-2 px-2 mx-1 lg:mx-6 xl:mx-11 leading-none overflow-hidden">
          <span className={`${isActive ? "active" : ""}`} />
          <div id={`${isActive ? "active" : ""}`}>{children}</div>
        </div>
      </Link>
    </>
  );
}
