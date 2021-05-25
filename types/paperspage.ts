export type PapersPageProps = {
  data: {
    PapersJSON: IPapers
  }
}

export interface IPapers {
  title: string
  data: IPaper[]
}

export interface IPaper {
  file: string
  title: string
  heading: string
  writtenBy: string | string[]
}
