export default function PameranKesihatanFlipbook() {
  return (
    <div className="container mx-auto px-6 flex flex-col pb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-2">
        Flipbook Kesedaran Penyakit Tidak Berjangkit (NCD)
      </h2>
      <div className="w-full h-screen flex gap-8">
        <iframe
          src="https://simplebooklet.com/cegahhariinisihatesokhari"
          title="Simplebooklet Viewer"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="rounded-xl"
        />
      </div>
    </div>
  )
}
