import video from '@/videos/video.mp4'

export default function PameranKesihatanPosters() {
  return (
    <div className="container mx-auto px-4 flex flex-col gap-8 py-8">
      <div className="w-full flex gap-8">
        <div className="w-1/3 p-4 border border-accent-content rounded-2xl">
          <img
            className="w-full rounded-xl"
            src="/images/one.webp"
            alt="/images/one.webp"
          />
        </div>
        <div className="w-1/3 p-4 border border-accent-content rounded-2xl">
          <img
            className="w-full rounded-xl"
            src="/images/two.webp"
            alt="/images/two.webp"
          />
        </div>
        <div className="w-1/3 p-4 border border-accent-content rounded-2xl">
          <img
            className="w-full rounded-xl"
            src="/images/three.webp"
            alt="/images/three.webp"
          />
        </div>
      </div>
      <div className="w-full p-4 flex-1 border border-accent-content rounded-2xl">
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
  )
}
