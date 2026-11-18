import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Saku Sultan",
  description:
    "Kebijakan privasi Saku Sultan: bagaimana data pengguna dikumpulkan, disimpan, dan dilindungi.",
  openGraph: { title: "Kebijakan Privasi — Saku Sultan" },
  robots: { index: true, follow: true },
};

const ITEMS = [
  "Saku Sultan hanya mengumpulkan data yang diperlukan untuk registrasi akun, verifikasi identitas, dan pemrosesan transaksi.",
  "Informasi pengguna disimpan dengan perlindungan berlapis dan tidak dibagikan ke pihak lain tanpa dasar hukum atau persetujuan.",
  "Riwayat transaksi dapat digunakan untuk menampilkan status pembayaran, promo yang relevan, dan peningkatan kualitas layanan.",
  "Data pribadi disimpan selama akun aktif dan sesuai kewajiban hukum yang berlaku.",
  "Pengguna berhak meminta akses, perbaikan, atau penghapusan data pribadinya.",
  "Pengguna dapat menghubungi cs@sakusultan.id jika membutuhkan bantuan terkait data pribadi atau keamanan akun.",
];

export default function PrivacyPage() {
  return (
    <main
      id="konten-utama"
      aria-labelledby="judul-kebijakan-privasi"
      tabIndex={-1}
      className="min-h-screen bg-white px-4 py-10 text-[#042718] focus:outline-none sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#198F38]">
          Saku Sultan &middot; Legal
        </p>
        <h1 id="judul-kebijakan-privasi" className="mb-4 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          Kebijakan Privasi
        </h1>
        <p className="mb-3 max-w-2xl text-pretty text-lg leading-8 text-[#042718]/75">
          Halaman ini menjelaskan secara singkat bagaimana Saku Sultan
          mengelola dan melindungi data Anda.
        </p>
        <p className="mb-10 text-sm text-[#042718]/75">
          Kebijakan ini dapat diperbarui sewaktu-waktu.
        </p>

        <ol role="list" className="list-none space-y-5 p-0">
          {ITEMS.map((item, index) => (
            <li
              key={item}
              className="flex gap-3 rounded-3xl border border-[#042718]/20 bg-[#F6FDFF] p-4 transition-shadow duration-300 hover:shadow-md motion-reduce:transition-none sm:gap-4 sm:p-6"
            >
              <span aria-hidden="true" className="shrink-0 font-semibold leading-7 text-[#198F38]">{index + 1}.</span>
              <p className="leading-7 text-[#042718]/80">{item}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-[#042718]/75">
          Pertanyaan lain? Email kami di{" "}
          <a
            href="mailto:cs@sakusultan.id"
            className="inline-block min-h-11 max-w-full break-all rounded-sm py-2 align-middle font-semibold leading-7 text-[#146e2b] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#198F38]"
          >
            cs@sakusultan.id
          </a>
          .
          Lihat juga{" "}
          <a
            href="/syarat-ketentuan"
            className="inline-block min-h-11 max-w-full rounded-sm py-2 align-middle font-semibold leading-7 text-[#146e2b] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#198F38]"
          >
            Syarat &amp; Ketentuan
          </a>
          .
        </p>

        <a
          href="/"
          aria-label="Kembali ke beranda Saku Sultan"
          className="mt-10 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#042718] px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#063a24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#198F38] motion-reduce:transition-none"
        >
          &larr; Kembali ke beranda
        </a>
      </div>
    </main>
  );
}
