import Portfolio from '@/lib/actions/portfolio'
import Card from '../ui/card'

const portfolio = await Portfolio()
const skills = portfolio.skills

export default function Skills() {
  const types = [...new Set(skills!.skills_items!.map((item) => item.type))]
  return (
    <>
      {skills?.skills_items && (
        <Card id="skills">
          {skills.skills_items.length > 0 && (
            <>
              {/* Table for md+ screens */}
              <table className="hidden md:table w-full text-center max-w-5xl mx-auto mt-2">
                <thead>
                  <tr className="text-xl font-bold">
                    {types.map((type) => (
                      <th key={type}>{type}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {types.map((type) => (
                      <td key={type}>
                        {skills
                          .skills_items!.filter((item) => item.type === type)
                          .map((item) => (
                            <div key={item.id} className="m-2">
                              <span className="bg-muted px-2 py-1 rounded">{item.name}</span>
                            </div>
                          ))}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              {/* Flex columns for small screens */}
              <div className="flex flex-col gap-4 md:hidden text-center">
                {types.map((type) => (
                  <div key={type}>
                    <div className="font-bold mb-1">{type}</div>
                    <div className="flex flex-wrap gap-2 px-5 pb-2">
                      {skills
                        .skills_items!.filter((item) => item.type === type)
                        .map((item) => (
                          <span key={item.id} className="bg-muted px-2 py-1 rounded text-sm">
                            {item.name}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </Card>
      )}
    </>
  )
}
