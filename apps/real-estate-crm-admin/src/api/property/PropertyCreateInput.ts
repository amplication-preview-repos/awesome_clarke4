import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  isForSale?: boolean | null;
  location?: string | null;
  name?: string | null;
  price?: number | null;
};
