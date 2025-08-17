export default function ForumPanelist() {
  return (
    <div className="container w-full mx-auto px-8 flex gap-8 flex-col py-8">
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div className="w-1/3 flex gap-8">
          <div className="w-1/2">
            <div>
              <img
                className="w-full h-full rounded-full object-fill border border-primary"
                src="https://placehold.co/200x200"
                alt="https://placehold.co/200x200"
              />
            </div>
            <h4 className="text-lg mt-4 text-center">Panelist 1</h4>
          </div>
          <div className="w-1/2">
            <div>
              <img
                className="w-full h-full rounded-full object-fill border border-primary"
                src="https://placehold.co/200x200"
                alt="https://placehold.co/200x200"
              />
            </div>
            <h4 className="text-lg mt-4 text-center">Panelist 2</h4>
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Quote</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam,
              minus dignissimos corrupti aspernatur numquam modi neque quibusdam
              alias, dolorem doloremque. Eum eligendi nobis ab omnis! Qui
              molestiae deleniti facere!
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Isi Forum</h2>
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
