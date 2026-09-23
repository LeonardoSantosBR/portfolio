export type Project = {
  title: string
  desc: string
  descKey: string
  tags: readonly string[]
  link: string
}

export type Experience = {
  role: string
  roleKey: string
  org: string
  logo: string
  period: string
  periodKey: string
  location: string
  locationKey: string
  bulletKeys: readonly string[]
  bullets: readonly string[]
}
