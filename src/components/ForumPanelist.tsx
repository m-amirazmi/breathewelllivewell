import content from '@/content.json'

const panelist = [
  {
    image: 'https://placehold.co/200x200',
    name: 'Panelist 1',
  },
  {
    image: 'https://placehold.co/200x200',
    name: 'Panelist 2',
  },
  {
    image: 'https://placehold.co/200x200',
    name: 'Panelist 3',
  },
  {
    image: 'https://placehold.co/200x200',
    name: 'Panelist 4',
  },
]

export default function ForumPanelist() {
  return (
    <div
      id="forum"
      className="container w-full mx-auto px-8 flex gap-8 flex-col my-16 scroll-mt-40"
    >
      <div className="flex flex-col md:flex-row w-full md:gap-8">
        <h2 className="md:hidden text-center text-xl font-bold mb-4 flex flex-col items-center">
          <span>{content['forum.forum.mobile'].forum}</span>
          <span className="text-2xl">
            {content['forum.forum.mobile'].breathe_well_live_well}
          </span>
        </h2>
        <div className="md:w-1/3 flex flex-wrap">
          {panelist.map((panel) => (
            <div className="w-1/2 p-4">
              <div>
                <img
                  className="w-full h-full rounded-full object-fill border border-primary"
                  src={panel.image}
                  alt={panel.name}
                />
              </div>
              <h4 className="text-lg mt-4 text-center">{panel.name}</h4>
            </div>
          ))}
        </div>
        <div className="md:w-2/3 flex flex-col gap-8">
          <div>
            <h2 className="hidden md:block text-4xl font-bold mb-4">
              {content['forum.forum']}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam,
              minus dignissimos corrupti aspernatur numquam modi neque quibusdam
              alias, dolorem doloremque. Eum eligendi nobis ab omnis! Qui
              molestiae deleniti facere!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
