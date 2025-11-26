// src/deliveryman/dto/create-deliveryman.dto.ts
export class CreateDeliverymanDto {
  name: string;       // Category 3: name (later validation)
  password: string;   // Category 3: password rules later
  phone: string;      // Category 3: must start with 01 (later)
  documentUrl?: string; // just a placeholder for pdf path later
}
 
export class UpdateDeliverymanDto {
  name?: string;
  password?: string;
  phone?: string;
  documentUrl?: string;
}