import Notification from "./notification";

describe("Unit test for Notifications", ()=> {
    it("should create errors", () => {

        const notification = new Notification();
        const error = {
            message: "Error 1",
            context: "customer"
        }
        notification.addError(error);
        expect(notification.messages("customer")).toBe("customer: Error 1,");

        const error2 = {
            message: "Error 2",
            context: "customer"
        }

        notification.addError(error2);

        expect(notification.messages("customer")).toBe("customer: Error 1,customer: Error 2,");

        const error3 = {
            message: "Error 3",
            context: "Order"
        }

        notification.addError(error3);

        expect(notification.messages("customer")).toBe("customer: Error 1,customer: Error 2,");

        expect(notification.messages()).toBe("customer: Error 1,customer: Error 2,Order: Error 3,");


    })

    it("should test if notification has at least one error", ()=> {
        const notification = new Notification();
        const error = {
            message: "Error 1",
            context: "customer"
        }
        notification.addError(error);

        expect(notification.hasErrors()).toBe(true);
    })

    it("should get All error props", ()=> {
        const notification = new Notification();
        const error = {
            message: "Error 1",
            context: "customer"
        }
        notification.addError(error);

        expect(notification.errors).toEqual([error]);
    })
})