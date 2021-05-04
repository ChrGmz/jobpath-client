import { InterviewInterface } from './interview';
import { OfferData } from './offerdata';

export interface ApplicationInterface {
  _id?: string;
  companyName: string;
  position: string;
  method: 'LinkedIn' | 'Indeed' | 'Glassdoor' | 'Employer Website' | 'Other';
  status: 'No Response' | 'Interview' | 'Offer' | 'Rejected';
  date: string;
  employmentType: 'Full-Time' | 'Part-Time' | 'Contract';
  interviews?: InterviewInterface[],
  offers?: OfferData[];
}
