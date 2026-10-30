import { useRef, useState, type UIEvent } from 'react'
import { SegmentedControl } from '../../notable/components/segmented-control/segmented-control.tsx'
import {
  ProductsSection,
  ServicesSection,
  TeamIntegrationSection,
} from './sections/index.ts'

const mainSections = [
  { label: 'Services', value: 'services', Component: ServicesSection },
  { label: 'Products', value: 'product', Component: ProductsSection },
  {
    label: 'Team Integration',
    value: 'team-integration',
    Component: TeamIntegrationSection,
  },
] as const

type MainSection = (typeof mainSections)[number]['value']

export function MainSlide() {
  const [activeSection, setActiveSection] = useState<MainSection>('services')
  const slidesContainerRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef(new Map<MainSection, HTMLElement>())

  const handleSlideScroll = (event: UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const containerCenter =
      container.getBoundingClientRect().left + container.clientWidth / 2
    let closestSection: MainSection | undefined
    let closestDistance = Infinity

    for (const [value, slide] of slidesRef.current) {
      const bounds = slide.getBoundingClientRect()
      const distance = Math.abs(
        bounds.left + bounds.width / 2 - containerCenter,
      )

      if (distance < closestDistance) {
        closestSection = value
        closestDistance = distance
      }
    }

    if (closestSection) {
      setActiveSection(closestSection)
    }
  }

  const handleSectionChange = (value: MainSection) => {
    setActiveSection(value)
    const container = slidesContainerRef.current
    const slide = slidesRef.current.get(value)

    if (!container || !slide) {
      throw new Error(`Unable to navigate to the "${value}" slide`)
    }

    const containerBounds = container.getBoundingClientRect()
    const slideBounds = slide.getBoundingClientRect()
    const left =
      container.scrollLeft +
      slideBounds.left -
      containerBounds.left -
      (container.clientWidth - slideBounds.width) / 2

    container.scrollTo({ left, behavior: 'smooth' })
  }

  return (
    <div className="flex h-full flex-col">
      <header className="flex shrink-0 items-center justify-center p-md sticky top-0 z-sticky">
        <SegmentedControl
          aria-label="Main slide sections"
          value={activeSection}
          onChange={handleSectionChange}
          options={mainSections}
        />
      </header>
      <div
        ref={slidesContainerRef}
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-none"
        data-main-slides
        onScroll={handleSlideScroll}
      >
        {mainSections.map(({ value, Component }) => (
          <section
            key={value}
            ref={(element) => {
              if (element) {
                slidesRef.current.set(value, element)
              } else {
                slidesRef.current.delete(value)
              }
            }}
            aria-labelledby={`main-slide-${value}`}
            className="flex h-full w-full shrink-0 snap-center items-center justify-center px-xl"
            data-main-slide={value}
          >
            <Component />
          </section>
        ))}
      </div>
    </div>
  )
}
