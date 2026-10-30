import { UsersRound } from 'lucide-react'
import { Empty } from '@/components/notable/components/empty/empty.tsx'

export function TeamIntegrationSection() {
  return (
    <Empty size="spacious">
      <Empty.Header>
        <Empty.Media variant="icon">
          <UsersRound aria-hidden="true" />
        </Empty.Media>
        <Empty.Title as="h2" id="main-slide-team-integration">
          No team integrations yet
        </Empty.Title>
        <Empty.Description>
          Team integrations will appear here when they are available.
        </Empty.Description>
      </Empty.Header>
    </Empty>
  )
}
