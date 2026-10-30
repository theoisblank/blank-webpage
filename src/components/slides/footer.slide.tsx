import { Empty } from '@/components/notable/components/empty/empty.tsx'

export function FooterSlide() {
  return (
    <>
      <div className="flex-1 gap-xl overflow-x-auto overflow-y-clip p-xl text-on-primary">
        <Empty size="spacious" className="h-full">
          <Empty.Header>
            <Empty.Title as="h2" style={{ color: 'var(--color-on-primary)' }}>
              Socials.
            </Empty.Title>
            <Empty.Description style={{ color: 'var(--color-on-primary)' }}>
              Social links will be available here soon.
            </Empty.Description>
          </Empty.Header>
        </Empty>
      </div>

      <p className="px-xl text-end font-bold text-on-primary">
        BLANK © 2026 — OFF THE PATH.
      </p>
    </>
  )
}
