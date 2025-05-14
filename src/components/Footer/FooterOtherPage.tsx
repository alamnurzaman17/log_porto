import Image from "next/image";
// import logBlack from "/public/imgs/logWhite.svg";
// import ChevronUp from "/public/icons/chevron-up.svg";

export default function FooterOtherPage() {
  return (
    <footer className="font-satoshi text-Dark4 flex justify-center bg-black">
      <div className="w-full h-fit">
        <div className="w-full h-5 bg-[#38EF7D]" />
        <div className="w-full h-5 bg-[#0FD85B]" />
        <div className="container w-full h-fit mx-auto flex md:flex-row flex-col px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-20 pt-16">
          {/* Logo, Telp, Gmail */}
          <div className="w-64 md:w-52 lg:w-60 xl:w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left px-4">
            <Image
              src="/imgs/logWhite.svg"
              width={280}
              height={47}
              alt="Logo LOG"
              priority
              className="w-full h-12 mb-4"
            />
            <p className="md:hidden font-semibold mb-4">
              Lead On Global Indonesia
            </p>
            <p className="mb-4">
              <span className="md:hidden">Phone : </span>+62 938 4314 135
            </p>
            <p className="mb-4">
              <span className="md:hidden">Email : </span>
              loghq.business@gmail.com
            </p>
          </div>
          <div className="flex md:flex-row flex-col-reverse w-full justify-between">
            {/* Resource */}
            <div className="flex flex-wrap md:pl-12 lg:pl-28 xl:pl-32 md:text-left text-center">
              <div className="w-full">
                <h2 className="text-Dark2 hidden md:block mb-8">Resources</h2>
                <nav className="mb-0 md:mb-10 flex flex-row md:flex-col justify-between sm:justify-evenly md:justify-normal">
                  <a href="" target="_blank" className="hover:text-white mb-7">
                    Home
                  </a>
                  <a href="" target="_blank" className="hover:text-white mb-7">
                    About
                  </a>
                  <a href="" target="_blank" className="hover:text-white mb-7">
                    Project
                  </a>
                  <a href="" target="_blank" className="hover:text-white mb-7">
                    Services
                  </a>
                  <a href="" target="_blank" className="hover:text-white mb-7">
                    Contact
                  </a>
                </nav>
              </div>
            </div>
            {/* Up button */}
            <div className="w-full flex md:hidden justify-center items-center mb-10">
              <button className="bg-Light4 w-11 h-11 border flex justify-center items-center">
                <Image
                  src="/icons/chevron-up.svg"
                  width={64}
                  height={64}
                  alt="Logo LOG"
                  priority
                  className="w-4 h-4"
                />
              </button>
            </div>
            {/* Social Media */}
            <div className="flex flex-wrap md:pl-8 lg:pl-12 xl:pl-16 md:text-left text-center">
              <div className="w-full">
                <h2 className="text-Dark2 hidden md:block mb-8">Social</h2>
                <nav className="mb-10 flex flex-row md:flex-col justify-center gap-7">
                  <a
                    href=""
                    target="_blank"
                    className="hover:text-white flex gap-2 items-center"
                  >
                    <Image
                      src="/icons/instagram.svg"
                      alt="instagram"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="hidden md:block">lead_on_global</span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="hover:text-white flex gap-2 items-center"
                  >
                    <Image
                      src="/icons/linkedin.svg"
                      alt="linkedin"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="hidden md:block">Lead On Global</span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="hover:text-white flex gap-2 items-center"
                  >
                    <Image
                      src="/icons/facebook.svg"
                      alt="facebook"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="hidden md:block">Lead On Global</span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="hover:text-white flex gap-2 items-center"
                  >
                    <Image
                      src="/icons/twitter.svg"
                      alt="twitter"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="hidden md:block">lead_on_global</span>
                  </a>
                </nav>
              </div>
            </div>
            {/* Developers */}
            <div className="hidden md:flex flex-col md:pl-8 lg:pl-12 xl:pl-16 mr-6 md:text-left text-center">
              <div className="w-full">
                <h2 className="text-Dark2 mb-8">Developers</h2>
                <nav className="flex flex-col">
                  <a href="" target="_blank" className="hover:text-white mb-7">
                    Documentations
                  </a>
                  <a href="" target="_blank" className="hover:text-white mb-7">
                    API Referece
                  </a>
                </nav>
              </div>
              <div className="flex flex-col">
                <h2 className="text-Dark2 mb-4">Languange</h2>
                <button className="md:w-[120px] lg:w-40 px-2 lg:px-4 md:py-2.5 lg:py-3 bg-[#3D3D3D] rounded-md text-white flex items-center justify-between">
                  <Image
                    src="/icons/globe.svg"
                    width={64}
                    height={64}
                    alt="Logo LOG"
                    priority
                    className="w-6 h-6"
                  />
                  <span className="text-start md:w-16 lg:w-20 truncate">
                    Indonesia
                  </span>
                  <Image
                    src="icons/chevron-down.svg"
                    width={64}
                    height={64}
                    alt="Logo LOG"
                    priority
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-10 flex justify-center items-center border-[#262626] border-t-2 text-Dark4">
          © 2024 Lead on Global. All rights reserved
        </div>
      </div>
    </footer>
  );
}
