export interface SectionLink {
  label: string
  route?: string
  handler?(): any
  icon?: {
    path: string
    slot: SectionLinkIconSlot
  }
}

type SectionLinkIconSlot = 'start' | 'end'
