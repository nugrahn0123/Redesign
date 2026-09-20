import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — Saku Sultan",
  description:
    "Syarat dan ketentuan penggunaan layanan transaksi digital Saku Sultan.",
};

const ITEMS = [
  "Saku Sultan menyediakan layanan transaksi digital seperti pulsa, paket data, pembayaran tagihan, top-up e-money, dan QRIS.",
  "Pengguna wajib memastikan data akun dan nominal transaksi sudah benar sebelum pembayaran dikonfirmasi.",
  "Promo, cashback, dan penawaran khusus dapat berubah sewaktu-waktu sesuai kebijakan Saku Sultan.",
  "Apabila terjadi kendala transaksi, pengguna dapat menghubungi layanan pelanggan melalui WhatsApp atau email resmi.",
  "Dengan menggunakan layanan ini, pengguna dianggap menyetujui ketentuan penggunaan yang berlaku.",
];

export default function TermsPage() {
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
        <h1 className="mb-4 font-heading text-4xl font-semibold tracking-tight">
          Syarat &amp; Ketentuan
        </h1>
        <p className="mb-10 text-lg leading-8 text-[#042718]/75">
          Ringkasan ini disediakan untuk halaman landing agar tautan legal tidak
          berakhir ke path kosong.
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
