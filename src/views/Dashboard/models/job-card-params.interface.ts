export interface JobCardParams {
  avatarPath: string
  coverPath: string
  title: string
  company: string
  location: string
  supportText: {
    label: string
    appearance: SupportTextAppearance
  }
  ctaButton: {
    label: string
    isDisabled: boolean
    url: string
  }
}

type SupportTextAppearance = 'success' | 'warning'
