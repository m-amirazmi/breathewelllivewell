export default function IsuUtamaHeroBanner() {
  return (
    <div className="container mx-auto px-6 flex flex-col md:flex-row">
      <div
        className="md:w-1/2 cursor-pointer"
        onClick={() => (document.getElementById('one') as any)?.showModal()}
      >
        <img
          className="w-full h-full"
          src="/images/banner_left.webp"
          alt="/images/banner_left.webp"
        />
      </div>
      <div
        className="md:w-1/2 cursor-pointer"
        onClick={() => (document.getElementById('two') as any)?.showModal()}
      >
        <img
          className="w-full h-full"
          src="/images/banner_right.webp"
          alt="/images/banner_right.webp"
        />
      </div>

      <dialog id="one" className="modal">
        <div className="modal-box max-w-[800px] w-[800px] ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            className="w-full h-full"
            src="/images/banner_left_popup.webp"
            alt="https://placehold.co/500x400"
          />
        </div>
      </dialog>
      <dialog id="two" className="modal">
        <div className="modal-box max-w-[800px] w-[800px] ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            className="w-full h-full"
            src="/images/banner_right_popup.webp"
            alt="https://placehold.co/500x400"
          />
        </div>
      </dialog>
    </div>
  )
}
