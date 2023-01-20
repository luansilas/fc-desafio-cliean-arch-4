import {app, sequelize} from '../express';
import request from 'supertest';

describe("E2E test for customer", ()=> {

    beforeEach(async () => {
        await sequelize.sync({force: true});
    
    })    

    afterAll(async () => {
        await sequelize.close();
    })

    it("should create a customer", async () => {
        const response = await request(app).post('/customer').send({
            name: "John Doe",
            address: {
                street: "Rua 1",
                number: 1,
                city: "São Paulo",
                state: "SP",
                zipCode: "12345-678"

            }
        })

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name', 'John Doe');
        expect(response.body.address.street).toBe('Rua 1');
        expect(response.body.address.number).toBe(1);
        expect(response.body.address.city).toBe('São Paulo');
        expect(response.body.address.state).toBe('SP');
        expect(response.body.address.zipCode).toBe('12345-678');

    })


    it("should not create a customer", async () => {
        const response = await request(app).post("/customer").send({
            name: "Jhon"
        })

        expect(response.status).toBe(500);
    })


    it("should list all customers", async ()=> {

        const customer1 = {
            name: "John Doe",
            address: {
                street: "Rua 1",
                number: 1,
                city: "São Paulo",
                state: "SP",
                zipCode: "12345-678"
            }
        }

        const customer2 = {
            name: "Jane",
            address: {
                street: "Rua 2",
                number: 1,
                city: "São Paulo",
                state: "SP",
                zipCode: "12345-678"
            }
        }

        const add1 = await request(app).post("/customer").send(customer1);
        expect(add1.status).toBe(200);

        const add2 = await request(app).post("/customer").send(customer2);
        expect(add2.status).toBe(200);


        const response = await request(app).get("/customer");

        expect(response.status).toBe(200);
        expect(response.body.customers.length).toBe(2);
        expect(response.body.customers[0]).toHaveProperty('id');
        expect(response.body.customers[0].name).toBe('John Doe');
        expect(response.body.customers[0].address.street).toBe('Rua 1');
        expect(response.body.customers[0].address.number).toBe("1");
        expect(response.body.customers[0].address.city).toBe('São Paulo');
        expect(response.body.customers[0].address.state).toBe('SP');
        expect(response.body.customers[0].address.zipCode).toBe('12345-678');
        expect(response.body.customers[1]).toHaveProperty('id');
        expect(response.body.customers[1].name).toBe('Jane');
        expect(response.body.customers[1].address.street).toBe('Rua 2');
        expect(response.body.customers[1].address.number).toBe("1");
        expect(response.body.customers[1].address.city).toBe('São Paulo');
        expect(response.body.customers[1].address.state).toBe('SP');
        expect(response.body.customers[1].address.zipCode).toBe('12345-678');



    })
    
    
})