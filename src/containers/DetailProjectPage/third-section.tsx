"use client";

import Image from "next/image";

//image public
import iconProcess from "../../../public/imgs/img_project/img_bagian_process_project.png";

//framer motion
import { motion } from "framer-motion";

const Thirdsection = () => {
  const contentVariants = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  const forTech = {
    offscreen: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <section className="container md:mt-24 mt-10  mx-auto">
      {/* about */}
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="md:container xl:px-[18%] xl:mt-36"
      >
        <h2 className="font-['Satoshi'] text-3xl md:text-4xl xl:py-5 py-3 md:font-medium font-bold xl:font-bold">
          About The Project
        </h2>

        <p className="text-sm md:text-xl text-gray-500 text-justify font-normal font-lato">
          Sistem Informasi Koperasi (SIKOP) bertujuan untuk mempermudah anggota
          koperasi dalam manajemen data kehadiran, arsip, dan layanan lainnya
          seperti penggajian.
          <br />
          <br /> Fitur yang terdapat dalam aplikasi SIKOP antara lain: Presensi
          berdasarkan Radius (geotagging), Permintaan dan Persetujuan Cuti,
          Lembar Waktu Harian, Penghitungan Tunjangan Kinerja, Konfirmasi
          Ketidakhadiran, Pemantauan Cuti, Manajer Berkas, dan Notifikasi.
        </p>
      </motion.div>
      {/* process */}
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="md:container xl:px-[18%] xl:mt-16 mt-4 "
      >
        <h2 className="font-['Satoshi'] text-3xl md:text-4xl xl:py-5 md:font-medium font-bold xl:font-bold">
          Process
        </h2>
        <div className="my-2">
          <p className="text-sm md:text-xl text-gray-500 text-justify tracking-tight font-normal font-lato">
            Dalam proses pengembangan sistem informasi koperasi, tahapan dimulai
            dengan sesi brainstorming oleh tim pengembang sebagai langkah awal.
            Selanjutnya, tim analisis sistem akan melakukan riset kebutuhan
            pengguna, menganalisis proses bisnis, dan melakukan pemetaan
            kebutuhan sistem.
          </p>
        </div>
        <div className="my-5">
          <p className="text-sm md:text-xl text-gray-500 text-justify tracking-tight font-normal font-lato">
            Sementara itu, tim desain akan merancang antarmuka pengguna (UI) dan
            mengembangkan struktur sistem yang sesuai. Setelah itu, tim
            pengembangan akan mengeksekusi pengembangan sistem berdasarkan
            rancangan yang telah dibuat, sementara tim pengujian fokus pada
            memastikan bahwa sistem berjalan dengan lancar dan sesuai dengan
            kebutuhan. Setelah semua persiapan selesai, sistem informasi
            koperasi akan dideploy dan siap digunakan oleh anggota koperasi.
          </p>
        </div>
        {/* icon process */}
        <div className="my-5">
          <div>
            <Image
              src={iconProcess}
              width={1920}
              height={1080}
              alt={""}
              className="sm:p-10 object-cover object-center"
            />
          </div>
        </div>
      </motion.div>

      {/* tantangan */}
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="md:container xl:px-[18%] xl:mt-10 my-5"
      >
        <h2 className="font-['Satoshi'] text-3xl md:text-4xl xl:pb-6 py-3 md:font-medium font-bold xl:font-bold">
          Tantangan
        </h2>

        <div>
          <p className="text-sm md:text-xl text-gray-500 text-justify tracking-tight font-normal font-lato">
            Dalam project ini salah satu tantangannya adalah meningkatkan
            efisiensi operasional, sistem informasi koperasi harus mampu
            mengintegrasikan berbagai jenis transaksi keuangan dan administrasi
            anggota dalam satu platform yang dapat diakses dengan mudah dan
            aman. Selain itu, tantangan lainnya adalah mengembangkan fitur
            analisis data yang dapat memberikan wawasan mendalam tentang
            kesehatan keuangan koperasi serta perilaku anggota untuk mendukung
            pengambilan keputusan yang lebih baik.
          </p>
        </div>
      </motion.div>

      {/* hasil */}
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="md:container xl:px-[18%] xl:mt-10"
      >
        <h2 className="font-['Satoshi'] text-3xl md:text-4xl py-3 md:font-medium font-bold xl:font-bold">
          Hasil
        </h2>

        <div>
          <p className="text-sm md:text-xl text-gray-500 text-justify tracking-tight font-normal font-lato">
            Koperasi "Maju Bersama" mempercayakan Lead On Global untuk merancang
            dan mengembangkan sistem informasi koperasi mereka dari awal. Lead
            On Global memulai dengan merancang sistem yang memenuhi kebutuhan
            koperasi serta memaksimalkan user experience untuk meningkatkan
            efisiensi dan efektivitas. Setelah penerapan strategi oleh tim
            pengembangan, koperasi "Maju Bersama" berhasil mencatat peningkatan
            aktivitas anggota baik dalam penggunaan sistem informasi koperasi
            maupun dalam partisipasi online.
          </p>
        </div>
      </motion.div>

      {/* list */}
      <motion.div
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="md:container xl:px-[18%] xl:mt-5"
      >
        <div className="my-4 text-gray-500 xl:text-xl">
          <div className="flex items-center gap-2 py-1">
            <div className="w-[6px] h-[6px] bg-gray-500 text-gray-500 rounded-full justify-between" />
            <span>UI/UX Design</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <div className="w-[6px] h-[6px] bg-gray-500 text-gray-500 rounded-full justify-between" />
            <span>Web API</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <div className="w-[6px] h-[6px] bg-gray-500 text-gray-500 rounded-full justify-between" />
            <span>Web Aplikasi</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <div className="w-[6px] h-[6px] bg-gray-500 text-gray-500 rounded-full justify-between" />
            <span>User Manual</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <div className="w-[6px] h-[6px] bg-gray-500 text-gray-500 rounded-full justify-between" />
            <span>Technical Documentation</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <div className="w-[6px] h-[6px] bg-gray-500 text-gray-500 rounded-full justify-between" />
            <span>Support and Maintenance</span>
          </div>
        </div>
      </motion.div>

      {/* technology */}
      <motion.div
        variants={forTech}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="md:container xl:px-[18%] xl:mt-10 py-5"
      >
        <h2 className="font-['Satoshi'] text-3xl md:text-4xl mb-5 md:font-medium font-bold xl:font-bold">
          Technology
        </h2>
        <div className="flex flex-wrap gap-3 justify-start">
          <div className="border-2 border-black">
            <h2 className="text-sm font-['Satoshi'] px-4 py-2">Figma</h2>
          </div>
          <div className="border-2 border-black">
            <h2 className="text-sm font-['Satoshi'] px-4 py-2">React</h2>
          </div>
          <div className="border-2 border-black">
            <h2 className="text-sm font-['Satoshi'] px-4 py-2">Javascript</h2>
          </div>
          <div className="border-2 border-black">
            <h2 className="text-sm font-['Satoshi'] px-4 py-2">Laravel</h2>
          </div>

          <div className="border-2 border-black">
            <h2 className="text-sm font-['Satoshi'] px-4 py-2">Tailwind CSS</h2>
          </div>
          <div className="border-2 border-black">
            <h2 className="text-sm font-['Satoshi'] px-4 py-2">Node JS</h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Thirdsection;
