export default function IsuUtamaHeroBanner() {
  return (
    <div className="flex flex-row">
      <div
        className="w-1/2 cursor-pointer"
        onClick={() => (document.getElementById('one') as any)?.showModal()}
      >
        <img
          className="w-full h-full border border-primary"
          src="https://placehold.co/500x400"
          alt="https://placehold.co/500x400"
        />
      </div>
      <div
        className="w-1/2 cursor-pointer"
        onClick={() => (document.getElementById('one') as any)?.showModal()}
      >
        <img
          className="w-full h-full border border-primary"
          src="https://placehold.co/500x400"
          alt="https://placehold.co/500x400"
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
            src="https://placehold.co/500x400"
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
            src="https://placehold.co/500x400"
            alt="https://placehold.co/500x400"
          />
        </div>
      </dialog>
    </div>
  )
}
