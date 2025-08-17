import content from '@/content.json'

export default function IsuUtamaOjective() {
  return (
    <div className="container mx-auto px-4 pt-8 mb-8 md:text-lg">
      <h2 className="text-xl md:text-3xl font-bold mb-4">
        {content['isu_utama.objektif_program']}
      </h2>
      <p>{content['isu_utama.objektif_program.text']}</p>
    </div>
  )
}
