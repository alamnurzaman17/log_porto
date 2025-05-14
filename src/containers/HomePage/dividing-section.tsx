import { GoIssueClosed } from "react-icons/go";
import Marquee from "react-fast-marquee";
import "./home.css";

export default function DividingSection() {
  return (
    <section className="text-Dark1 font-lato">
      <div className="w-full h-fit bg-Subtle flex items-center justify-center">
        <Marquee
          autoFill
          pauseOnHover
          loop={0}
          className="w-full flex items-center justify-between py-5"
        >
          <div className="flex items-center gap-2 ml-32">
            <GoIssueClosed size={20} color="black" />
            <span>Transparent</span>
          </div>
          <div className="flex items-center gap-2 ml-32">
            <GoIssueClosed size={20} color="black" />
            <span>User Fiendly</span>
          </div>
          <div className="flex items-center gap-2 ml-32">
            <GoIssueClosed size={20} color="black" />
            <span>Engaging Design</span>
          </div>
          <div className="flex items-center gap-2 ml-32">
            <GoIssueClosed size={20} color="black" />
            <span>High-Quality Software Development Services</span>
          </div>
          <div className="flex items-center gap-2 ml-32">
            <GoIssueClosed size={20} color="black" />
            <span>Cost-Effective Solution</span>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
