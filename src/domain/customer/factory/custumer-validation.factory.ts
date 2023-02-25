import { Customer } from '../entity/customer';
import ValidatorInterface from "../../@shared/validator/validator.interface";
import CustomerYupValidadtor from "../validator/custumer-validator.yup";

export class CustomerValidatorFactory{

    public static create(): ValidatorInterface<Customer> {
        return new CustomerYupValidadtor();
    }
}