
export interface IIssue {
  id: number;
  name: string;
  script?: string;
  contacts?: IContact[];
}

export interface IContact {
  Name: string;
  Phone?: string;
  PhotoURL?: string;
  Area?: string;
}
