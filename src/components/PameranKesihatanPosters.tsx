import video from '@/videos/video.mp4'

export default function PameranKesihatanPosters() {
  return (
    <div className="container mx-auto flex flex-col-reverse gap-4 md:gap-8 py-8">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 px-8">Poster</h2>
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/3 px-8 pb-8 md:py-0">
            <img
              className="w-full rounded-xl"
              src="/images/one.webp"
              alt="/images/one.webp"
            />
          </div>
          <div className="w-full md:w-1/3 px-8 pb-8 md:py-0">
            <img
              className="w-full rounded-xl"
              src="/images/two.webp"
              alt="/images/two.webp"
            />
          </div>
          <div className="w-full md:w-1/3 px-8 pb-8 md:py-0">
            <img
              className="w-full rounded-xl"
              src="/images/three.webp"
              alt="/images/three.webp"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 px-8">
          Kualiti Udara Dalaman
        </h2>
        <div className="w-full flex-1 px-8">
          <video
            className="w-full aspect-video rounded-xl"
            controls
            src={video}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold px-8">
        Pameran Kesihatan
      </h1>
    </div>
  )
}
