import content from '@/content.json'

const isuPPR = Object.values(content['isu_utama.isu_utama_ppr_bbh.items']).map(
  (isu) => {
    return (
      <div className="card w-full md:w-1/3 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <h3 className="text-lg md:text-2xl font-bold">{isu.title}</h3>
          </div>
          <ul className="mt-2 flex flex-col gap-2 md:text-lg">
            {Object.values(isu.statements).map((statement) => (
              <li>"{statement}"</li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
)

export default function IsuUtamaPPR() {
  return (
    <div className="bg-accent/20">
      <div className="container mx-auto px-4 pt-8 pb-8">
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          {content['isu_utama.isu_utama_ppr_bbh']}
        </h2>
        <div className="flex flex-col md:flex-row gap-4">{isuPPR}</div>
      </div>
    </div>
  )
}
