import Link from "next/link";

export const metadata = {
  title: "Halaman Tidak Ditemukan — Saku Sultan",
};

export default function NotFound() {
  return (
    <main
      id="konten-utama"
      tabIndex={-1}
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16 text-center text-[#042718] focus:outline-none"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#198F38]">
        Error 404
      </p>
      <h1 className="mb-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mb-10 max-w-[480px] text-lg leading-8 text-[#042718]/75">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#042718] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#063a24]"
      >
        &larr; Kembali ke beranda
      </Link>
    </main>
  );
}
