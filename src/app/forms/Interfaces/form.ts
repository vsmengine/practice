export interface IUserForm {
    name?: string;
    username?: string;
    email?: string;
    address?: IAddressForm;
}
  
export interface IAddressForm {
    street?: string;
    city?: string;
    zipcode?: string;
}
