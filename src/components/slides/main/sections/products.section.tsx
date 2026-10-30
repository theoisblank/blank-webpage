import { Package } from 'lucide-react'
import { Empty } from '@/components/notable/components/empty/empty.tsx'

export function ProductsSection() {
  return (
    <Empty size="spacious">
      <Empty.Header>
        <Empty.Media variant="icon">
          <Package aria-hidden="true" />
        </Empty.Media>
        <Empty.Title as="h2" id="main-slide-product">
          No products yet
        </Empty.Title>
        <Empty.Description>
          Products will appear here when they are available.
        </Empty.Description>
      </Empty.Header>
    </Empty>
  )
}
