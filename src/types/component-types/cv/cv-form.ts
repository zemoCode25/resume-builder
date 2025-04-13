export interface CVDataType {
  personal?: Personal;
  employer?: Employer;
  company?: Company;
  letterBody?: LetterBody;
}

export interface Personal {
  firstName?: string;
  lastName?: string;
}

export interface Employer {
  firstName?: string;
  lastName?: string;
  title?: string;
}

export interface Company {
  companyName?: string;
  streetAddress?: string;
  city?: string;
  zipCode?: string;
}

export interface LetterBody {
  openingBody?: string;
  middleBody?: string;
  closingBody?: string;
}
