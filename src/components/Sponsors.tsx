import content from '@/content.json'

const images = Array(9)
  .fill('')
  .map((_, index) => {
    return `/images/collab-${index + 1}.webp`
  })

export default function Sponsors() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-8">
      <h2 className="text-xl md:text-3xl font-bold mb-4">
        {content['kolaborasi.kolaborasi']}
      </h2>

      <div className="flex flex-wrap">
        {images.map((img, index) => (
          <div className="w-1/3 md:w-1/9 p-2" key={index}>
            <img className="w-full" src={img} alt={`collab-${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
