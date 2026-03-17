import heroImage from '@/assets/hero.png'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import type { Project } from '@/types/project'

type ReferenceCardProps = {
  project: Project
}

export function ReferenceCard({ project }: ReferenceCardProps) {
  return (
    <Card className="group overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <Link to={`/references/${project.slug}`}>
        <div className="aspect-[4/3] overflow-hidden bg-stone-200">
          <img
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            onError={(event) => {
              event.currentTarget.src = heroImage
            }}
            src={project.featuredImage}
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge key={category} tone="brand">
                {category}
              </Badge>
            ))}
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-stone-950">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-stone-600">{project.shortDescription}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            <span>{project.location}</span>
            <span>{project.year}</span>
            <span>{project.industry}</span>
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default ReferenceCard
