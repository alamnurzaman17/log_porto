import "./BtnSecondary.css";
import Link from "next/link";

interface BtnSecondaryProps {
  href: string;
  componentStyle: string;
  BtnHover: string;
  children: React.ReactNode;
}

export default function BtnSecondary({
  href,
  componentStyle,
  BtnHover,
  children,
}: BtnSecondaryProps): JSX.Element {
  return (
    <>
      <Link href={href} as="button">
        <button className="grid__item item relative">
          <div
            className={`item__content ${componentStyle} ${BtnHover} relative border-2`}
          >
            <div className="font-bold">{children}</div>
          </div>
        </button>
      </Link>
    </>
  );
}
