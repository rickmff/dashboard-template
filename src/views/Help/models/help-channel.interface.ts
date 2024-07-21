export interface HelpChannelInterface {
  label: string
  value: string
  iconPath: string
  handler?(): any
  link?: string
}
