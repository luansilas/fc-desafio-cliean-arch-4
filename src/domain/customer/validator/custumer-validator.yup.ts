import { Customer } from './../entity/customer';
import ValidatorInterface from "../../@shared/validator/validator.interface";
import * as yup from 'yup';
export default class CustomerYupValidadtor implements ValidatorInterface<Customer> {
    validate(entity: Customer): void {
        try{

            yup.object().shape({
                id: yup.string().required("Id is required"),
                name: yup.string().required("Name is required"),
            }).validateSync({
                id: entity.id,
                name: entity.name
            }, {
                abortEarly: false
            })


        } catch(err){

            const e = err as yup.ValidationError;
            e.errors.forEach(error => {
                entity.notification.addError({
                    message: error,
                    context: "Customer"
                
                });
            })

        }
    }
}