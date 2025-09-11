import Portfolio from '@/lib/actions/portfolio'
import Card from '../ui/card'
import Link from 'next/dist/client/link'

const portfolio = await Portfolio()
const projects = portfolio.projects

export default function Projects() {
  return (
    <>
      {projects && (
        <Card id="projects">
          {projects?.projects_items && (
            <div>
              {projects.projects_items.map((item) => (
                <div key={item.id} className="p-5 max-w-5xl mx-auto text-center">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <h4 className="text-md">{item.type}</h4>
                  <Link href={item.url}>View Project</Link>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}
    </>
  )
}
