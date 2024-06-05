import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  isForSale?: boolean | null;
  location?: string | null;
  name?: string | null;
  price?: number | null;
};
