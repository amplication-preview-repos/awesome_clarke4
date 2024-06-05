import { Appointment } from "../appointment/Appointment";

export type Property = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  id: string;
  isForSale: boolean | null;
  location: string | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
