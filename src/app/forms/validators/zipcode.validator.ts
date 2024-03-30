import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function zipcodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value as string;

        if(!value) {
            return null
        }

        const isValid = (value.length === 5)
            ? null
            : { length : true}
        
        return isValid;
    }
}
