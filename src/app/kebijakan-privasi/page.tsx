import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Saku Sultan",
  description:
    "Kebijakan privasi Saku Sultan: bagaimana data pengguna dikumpulkan, disimpan, dan dilindungi.",
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
      tabIndex={-1}
      className="min-h-screen bg-white px-6 py-16 text-[#042718] focus:outline-none"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#198F38]">
          Saku Sultan
        </p>
        <h1 className="mb-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          Kebijakan Privasi
        </h1>
        <p className="mb-3 text-lg leading-8 text-[#042718]/75">
          Halaman ini menjelaskan secara singkat bagaimana Saku Sultan
          mengelola dan melindungi data Anda.
        </p>
        <p className="mb-10 text-sm text-[#042718]/60">
          Kebijakan ini dapat diperbarui sewaktu-waktu.
        </p>

        <div className="space-y-4">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#042718]/8 bg-[#F6FDFF] p-5"
            >
              <p className="leading-7 text-[#042718]/80">{item}</p>
            </div>
          ))}
        </div>

        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#042718] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#063a24]"
        >
          &larr; Kembali ke beranda
        </a>
      </div>
    </main>
  );
}
