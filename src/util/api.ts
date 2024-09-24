interface Response {
  responseDate: string;
  message: string;
}

interface Details {
  message: string;
  responses: Response[];
}

interface Inquiry {
  [key: string]: string | Details;
  id: string;
  customerName: string;
  subject: string;
  date: string;
  status: string;
  details: Details;
}

export type { Response, Details, Inquiry };
