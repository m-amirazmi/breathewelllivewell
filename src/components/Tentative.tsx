import content from '@/content.json'

const generateTableContent = (group: 'A' | 'B') => {
  const rawA = Object.values(content['tentatif_program.tab.group_a.items'])
  const rawB = Object.values(content['tentatif_program.tab.group_b.items'])

  const items = group === 'A' ? rawA : rawB
  return items.map((item) => {
    const hasItems = Object.values(item.items).length > 0
    return (
      <tr className="md:text-lg">
        <th className="hidden md:table-cell">{item.masa}</th>
        <td className="flex flex-col">
          <div className="md:hidden badge badge-ghost mb-2">{item.masa}</div>
          <span
            className="font-bold"
            dangerouslySetInnerHTML={{ __html: item.aktiviti }}
          />
          {hasItems && (
            <ul className="list-disc list-inside">
              {Object.values(item.items).map((subItem) => (
                <li dangerouslySetInnerHTML={{ __html: subItem }} />
              ))}
            </ul>
          )}
        </td>
      </tr>
    )
  })
}

export default function Tentative() {
  return (
    <div className="container mx-auto px-4 pt-8">
      <h2 className="text-xl md:text-3xl font-bold mb-4">
        {content['tentatif_program.tentative_program']}
      </h2>
      <div className="tabs tabs-border justify-center">
        <input
          type="radio"
          name="tentative_tab"
          className="tab md:text-lg"
          aria-label={content['tentatif_program.tab.group_a']}
          defaultChecked
        />
        <div className="tab-content bg-base-100 py-4 md:p-10">
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr className="md:text-lg">
                  <th className="hidden md:block">
                    {content['tentatif_program.tab.group_a.masa']}
                  </th>
                  <th>{content['tentatif_program.tab.group_a.aktiviti']}</th>
                </tr>
              </thead>
              <tbody>{generateTableContent('A')}</tbody>
            </table>
          </div>
        </div>

        <input
          type="radio"
          name="tentative_tab"
          className="tab md:text-lg"
          aria-label={content['tentatif_program.tab.group_b']}
        />
        <div className="tab-content bg-base-100 py-4 md:p-10">
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th className="hidden md:block">
                    {content['tentatif_program.tab.group_b.masa']}
                  </th>
                  <th>{content['tentatif_program.tab.group_b.aktiviti']}</th>
                </tr>
              </thead>
              <tbody>{generateTableContent('B')}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
