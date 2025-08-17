import content from '@/content.json'

export default function Announcements() {
  return (
    <div className="bg-accent/20  py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-8">
          {content['hebahan.hebahan']}
        </h2>
        <div className="flex justify-center md:flex-row flex-col gap-4">
          <div className="md:w-1/3 h-[520px] md:h-[700px] p-4 border border-accent-content rounded-2xl">
            <img
              className="h-full w-full object-cover object-top rounded-xl"
              src="/images/ig.webp"
              alt="IG"
            />
          </div>
          <div className="md:w-1/3 md:h-[700px] p-4 border border-accent-content rounded-2xl">
            <img
              className="h-full w-full object-cover object-top rounded-xl"
              src="/images/flyers.webp"
              alt="IG"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
