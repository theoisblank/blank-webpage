import { BriefcaseBusiness } from 'lucide-react'
import { Empty } from '@/components/notable/components/empty/empty.tsx'

export function ServicesSection() {
  return (
    <Empty size="spacious">
      <Empty.Header>
        <Empty.Media variant="icon">
          <BriefcaseBusiness aria-hidden="true" />
        </Empty.Media>
        <Empty.Title as="h2" id="main-slide-services">
          No services yet
        </Empty.Title>
        <Empty.Description>
          Available services will appear here.
        </Empty.Description>
      </Empty.Header>
    </Empty>
  )
}
