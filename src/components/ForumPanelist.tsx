import content from '@/content.json'

const panelist = [
  {
    image: '/images/panel1.webp',
    name: 'Ustaz Muhammad Azam Bin Sofuan',
    description:
      'Berkhidmat sebagai Daie Komuniti Yadim Selangor dan Penceramah Bebas',
  },
  {
    image: '/images/panel2.webp',
    name: 'Dr. Mohamad Ikhsan Selamat',
    description:
      'Pakar dan Pensyarah Kesihatan Awam<br/>Jabatan Kesihatan Awam,<br/>Fakulti Perubatan,<br/>Universiti Teknologi MARA (UiTM)',
  },
  {
    image: '/images/panel3.webp',
    name: 'Prof. Dr. Siti Munira Yasin',
    description:
      'Pakar dan Pensyarah Kesihatan Awam <br/>Jabatan Kesihatan Awam,<br/>Fakulti Perubatan,<br/>Universiti Teknologi MARA (UiTM)',
  },
]

export default function ForumPanelist() {
  return (
    <div
      id="forum"
      className="container w-full mx-auto px-8 flex gap-8 flex-col my-16 scroll-mt-40"
    >
      <div className="flex flex-col mx-auto md:gap-8">
        <h2 className="md:hidden text-center text-xl font-bold mb-4 flex flex-col items-center">
          <span>{content['forum.forum.mobile'].forum}</span>
          <span className="text-2xl">
            {content['forum.forum.mobile'].breathe_well_live_well}
          </span>
        </h2>
        <div className="flex md:flex-row flex-col flex-wrap items-stretch justify-stretch">
          {panelist.map((panel) => (
            <div
              key={panel.image}
              className="w-full lg:w-1/3 py-2 md:py-0 md:px-4"
              style={{ height: 'inherit' }}
            >
              <div className="card flex flex-row bg-white card-md shadow-sm h-full">
                <div className="w-1/2">
                  <img
                    className="w-full h-full object-cover object-top rounded-l-2xl aspect-square"
                    src={panel.image}
                    alt={panel.name}
                  />
                </div>
                <div className="w-1/2 card-body">
                  <h2 className="card-title">{panel.name}</h2>
                  <p dangerouslySetInnerHTML={{ __html: panel.description }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 lg:w-3/5 flex flex-col gap-8 items-center justify-center">
          <div className="px-4">
            <h2 className="hidden md:block text-4xl font-bold mb-4">
              {content['forum.forum']}
            </h2>
            <p className="text-lg">
              Forum ini akan membincangkan isu penting berkaitan kualiti udara
              dalaman serta bahaya amalan vaping terhadap kesihatan. Melalui
              perkongsian ini panel akan mengulas mengenai:
            </p>
            <ul className="list-disc ml-5">
              <li>Kesan vape terhadap kesihatan</li>
              <li>
                Hukum-hakam berkaitan penggunaan vape menurut perspektif islam
              </li>
              <li>
                Langkah-langkah memastikan kualiti udara dalaman yang baik
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
