export interface InfoboxField {
  label: string;
  value: string;
  isLink?: boolean;
}

export interface InfoboxData {
  title: string;
  subtitle?: string;
  imageType?: "specimen" | "history" | "device" | "geography" | "event" | "portrait";
  imageCaption?: string;
  fields: InfoboxField[];
}

export interface TocItem {
  id: string;
  number: string;
  title: string;
  level: number;
}

export interface ArticleSection {
  id: string;
  number: string;
  title: string;
  level: number;
  paragraphs: string[];
}

export interface CitationItem {
  id: number;
  text: string;
  authors?: string;
  title?: string;
  journalOrPublisher?: string;
  year?: string;
  doiOrUrl?: string;
}

export interface WikiArticle {
  id?: string;
  premise: string;
  title: string;
  subtitle?: string;
  hatnote?: string;
  infobox: InfoboxData;
  toc: TocItem[];
  leadParagraphs: string[];
  sections: ArticleSection[];
  seeAlso: string[];
  references: CitationItem[];
  categories: string[];
  lastEdited: {
    date: string;
    username: string;
  };
}
