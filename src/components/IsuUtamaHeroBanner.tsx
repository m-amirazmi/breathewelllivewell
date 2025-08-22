import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'

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
  const [currentOne, setCurrentOne] = useState(1)
  const [currentOneNext, setCurrentOneNext] = useState(2)
  const [currentOnePrev, setCurrentOnePrev] = useState(2)
  const [currentTwo, setCurrentTwo] = useState(1)
  const [currentTwoNext, setCurrentTwoNext] = useState(2)
  const [currentTwoPrev, setCurrentTwoPrev] = useState(2)

  const handleOne = () => {
    switch (currentOne) {
      case 1:
        setCurrentOneNext(2)
        setCurrentOnePrev(2)
        setCurrentOne(2)
        break

      case 2:
        setCurrentOneNext(1)
        setCurrentOnePrev(1)
        setCurrentOne(1)
        break

      default:
        break
    }
  }
  const handleTwo = () => {
    switch (currentTwo) {
      case 1:
        setCurrentTwoNext(2)
        setCurrentTwoPrev(3)
        setCurrentTwo(2)
        break

      case 2:
        setCurrentTwoNext(3)
        setCurrentTwoPrev(1)
        setCurrentTwo(3)
        break

      case 3:
        setCurrentTwoNext(1)
        setCurrentTwoPrev(2)
        setCurrentTwo(1)
        break

      default:
        break
    }
  }

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
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-between p-4">
            <a
              href={`#item-b1-${currentOnePrev}`}
              className="btn btn-circle btn-sm"
              onClick={handleOne}
            >
              <ChevronLeft />
            </a>
            <div className="flex gap-2">
              {bannerOne.map((b1) => (
                <a
                  key={b1.id}
                  href={`#item-b1-${b1.id}`}
                  className="btn btn-sm"
                >
                  {b1.id}
                </a>
              ))}
              <form method="dialog">
                <button className="btn btn-sm btn-active btn-ghost flex items-center">
                  Close <X size={14} />
                </button>
              </form>
            </div>
            <a
              href={`#item-b1-${currentOneNext}`}
              className="btn btn-circle btn-sm"
              onClick={handleOne}
            >
              <ChevronRight />
            </a>
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
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-between p-4">
            <a
              href={`#item-b2-${currentTwoPrev}`}
              className="btn btn-circle btn-sm"
              onClick={handleTwo}
            >
              <ChevronLeft />
            </a>
            <div className="flex gap-2">
              {bannerTwo.map((b2) => (
                <a
                  key={b2.id}
                  href={`#item-b2-${b2.id}`}
                  className="btn btn-sm"
                >
                  {b2.id}
                </a>
              ))}
              <form method="dialog">
                <button className="btn btn-sm btn-active btn-ghost flex items-center">
                  Close <X size={14} />
                </button>
              </form>
            </div>
            <a
              href={`#item-b2-${currentTwoNext}`}
              className="btn btn-circle btn-sm"
              onClick={handleTwo}
            >
              <ChevronRight />
            </a>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}
