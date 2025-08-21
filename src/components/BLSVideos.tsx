export default function BLSVideos() {
  return (
    <div className="container mx-auto px-8 flex flex-col py-8 gap-6 md:gap-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Bantuan Hidup Asas | Basic Life Support (BLS)
        </h1>
        <p className="text-base">Latihan Penjagaan Perubatan Kecemasan Asas</p>
      </div>
      <div className="card shadow-sm bg-white">
        <div className="card-body md:text-lg">
          <p>
            BLS ialah tahap asas rawatan kecemasan untuk individu yang
            mengalami:
          </p>
          <ul className="list-disc ml-6">
            <li>Henti jantung (cardiac arrest)</li>
            <li>Kesukaran bernafas (respiratory arrest)</li>
            <li>Saluran udara terhalang/ tersekat</li>
          </ul>
          <p>
            Rawatan kecemasan ini dilakukan oleh individu yang terlatih sebelum
            rawatan perubatan lanjutan diberikan.
          </p>
          <p className="italic">
            (American Heart Association, 2020 Guidelines)
          </p>
        </div>
      </div>
      <div className="card shadow-sm bg-white">
        <div className="card-body md:text-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Cardiopulmonary Resuscitation (CPR)
          </h2>
          <p>
            CPR ialah teknik kecemasan penting yang dilakukan apabila jantung
            berhenti berdegup.
          </p>
          <p>
            Tindakan segera dengan CPR boleh meningkatkan peluang untuk terus
            hidup, malah boleh menggandakannya selepas berlakunya henti jantung.
          </p>
          <div className="mt-4">
            <h3 className="md:text-lg underline font-semibold mb-2">
              5 Komponen CPR berkualiti tinggi
            </h3>
            <ol className="list-decimal ml-5">
              <li className="mb-2">
                <span>Kadar tekanan dada yang betul</span>
                <ul className="list-disc ml-5">
                  <li>Lakukan tekanan dada pada kadar 100-120 kali seminit</li>
                </ul>
              </li>
              <li className="mb-2">
                <span>Kedalaman tekanan dada yang mencukup</span>
                <ul className="list-disc ml-5">
                  <li>Dewasa: 2 - 2.4 inci (5-6 cm)</li>
                  <li>
                    Kanak-kanak: ⅓ daripada kedalaman dada, kira-kira 2 inci
                    (5cm)
                  </li>
                  <li>
                    Bayi: Sekurang-kurangnya ⅓ daripada kedalaman dada,
                    kira-kira 1 ½ inci (4cm)
                  </li>
                  <li>
                    Pastikan dada kembali ke kedudukan asal selepas setiap
                    tekanan
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <span>
                  Pelepasan dada sepenuhnya selepas setiap tekanan dada
                </span>
              </li>
              <li className="mb-2">
                <span>Kurangkan gangguan tekanan dada</span>
                <ul className="list-disc ml-5">
                  <li>
                    Pastikan gangguan tidak melebihi 10 saat (contohnya semasa
                    tukar penyelamat atau guna AED)
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <span>Elakkan pengudaraan berlebihan</span>
                <ul className="list-disc ml-5">
                  <li>
                    Berikan 2 hembusan nafas selepas setiap 30 tekanan, setiap
                    hembusan selama 1 saat, cukup untuk membuat dada naik.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <h3 className="md:text-lg underline font-semibold mb-2">
          Langkah - langkah CPR
        </h3>
        <div className="w-full flex-1 aspect-video">
          <iframe
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/Ikxzq58A5OQ?si=JzdoUa0OugUsB6sH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-8">
          <img
            className="w-full rounded-xl"
            src="/images/cpr.webp"
            alt="/images/cpr.webp"
          />
        </div>
      </div>
      <div className="card shadow-sm bg-white">
        <div className="card-body md:text-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Manuver Heimlich (Melegakan tersedak)
          </h2>
          <p>
            Manuver Heimlich ialah kaedah pertolongan cemas untuk melegakan
            tersedak.
          </p>
          <p>
            Tersedak berlaku apabila seseorang tidak dapat bernafas kerana
            makanan, mainan atau objek asing lain menyekat tekak atau saluran
            pernafasan (trakea).
          </p>
          <p>
            Nama lain bagi Manuver Heimlich ialah tolakan abdomen (abdomen
            thrust).
          </p>
        </div>
      </div>
      <div>
        <h3 className="md:text-lg underline font-semibold mb-2">
          Langkah - langkah
        </h3>
        <div className="w-full flex-1 aspect-video">
          <iframe
            className="aspect-video rounded-xl"
            src="https://www.youtube.com/embed/q6XBnWVKT4g?si=iOvDfiD5TwUih8d_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-8">
          <img
            className="w-full rounded-xl"
            src="/images/heimlich.webp"
            alt="/images/heimlich.webp"
          />
        </div>
      </div>
    </div>
  )
}
