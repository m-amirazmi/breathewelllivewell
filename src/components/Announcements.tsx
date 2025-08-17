import content from '@/content.json'

export default function Announcements() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-8">
      <h2 className="text-xl md:text-3xl font-bold mb-4">
        {content['hebahan.hebahan']}
      </h2>
      <div className="flex gap-4">
        <div className="w-1/3 h-[700px] p-4 border border-base-300 rounded-2xl">
          <img
            className="h-full w-full object-cover object-top rounded-xl"
            src="/images/ig.webp"
            alt="IG"
          />
        </div>
        <div className="w-1/3 h-[700px] p-4 border border-base-300 rounded-2xl">
          <img
            className="h-full w-full object-cover object-top rounded-xl"
            src="/images/flyers.webp"
            alt="IG"
          />
        </div>
      </div>
    </div>
  )
}
