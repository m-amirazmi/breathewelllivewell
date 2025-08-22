import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const bannerOne = [
  {
    id: 1,
    imageUrl: '/images/banner_1_1.webp',
    next: 2,
    prev: 2,
  },
  {
    id: 2,
    imageUrl: '/images/banner_1_2.webp',
    next: 1,
    prev: 1,
  },
]

const bannerTwo = [
  {
    id: 1,
    imageUrl: '/images/banner_2_1.webp',
    next: 2,
    prev: 3,
  },
  { id: 2, imageUrl: '/images/banner_2_2.webp', next: 3, prev: 1 },
  { id: 3, imageUrl: '/images/banner_2_3.webp', next: 1, prev: 2 },
]

export default function IsuUtamaHeroBanner() {
  return (
    <div className="container mx-auto px-6 flex flex-col md:flex-row">
      <div
        className="md:w-1/2 cursor-pointer"
        onClick={() => (document.getElementById('one') as any)?.showModal()}
      >
        <img
          className="w-full h-full"
          src="/images/banner_1.webp"
          alt="/images/banner_1.webp"
        />
      </div>
      <div
        className="md:w-1/2 cursor-pointer"
        onClick={() => (document.getElementById('two') as any)?.showModal()}
      >
        <img
          className="w-full h-full"
          src="/images/banner_2.webp"
          alt="/images/banner_2.webp"
        />
      </div>

      <dialog id="one" className="modal">
        <div className="modal-box max-w-[500px] bg-white p-0">
          <div className="carousel w-full">
            {bannerOne.map((b1) => (
              <div
                key={b1.id}
                id={`item-b1-${b1.id}`}
                className="carousel-item relative w-full"
              >
                <img src={b1.imageUrl} className="w-full object-contain" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href={`#item-b1-${b1.prev}`} className="btn btn-circle">
                    <ChevronLeft />
                  </a>
                  <a href={`#item-b1-${b1.next}`} className="btn btn-circle">
                    <ChevronRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-center gap-2 py-2">
            {bannerOne.map((b1) => (
              <a key={b1.id} href={`#item-b1-${b1.id}`} className="btn btn-xs">
                {b1.id}
              </a>
            ))}
            <form method="dialog">
              <button className="btn btn-xs btn-active btn-ghost flex items-center">
                Close <X size={14} />
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="two" className="modal">
        <div className="modal-box max-w-[500px] bg-white p-0">
          <div className="carousel w-full">
            {bannerTwo.map((b2) => (
              <div
                key={b2.id}
                id={`item-b2-${b2.id}`}
                className="carousel-item relative w-full"
              >
                <img src={b2.imageUrl} className="w-full object-contain" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href={`#item-b2-${b2.prev}`} className="btn btn-circle">
                    <ChevronLeft />
                  </a>
                  <a href={`#item-b2-${b2.next}`} className="btn btn-circle">
                    <ChevronRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-center gap-2 py-2">
            {bannerTwo.map((b2) => (
              <a key={b2.id} href={`#item-b2-${b2.id}`} className="btn btn-xs">
                {b2.id}
              </a>
            ))}
            <form method="dialog">
              <button className="btn btn-xs btn-active btn-ghost flex items-center">
                Close <X size={14} />
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}
