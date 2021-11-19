export class EmpTableCols {

    public getempTableCols(){

        const empTableCols = [
            {
                name: "Emp ID",
                prop: "id",
                resizeable: false,
                draggable: false,
                width: "100",
                frozenLeft: true,
                order: "asc"
            },
            {
                name: "First Name",
                prop: "firstName",
                resizeable: false,
                draggable: false,
                width: "150",
                frozenLeft: true,
                order: "default"
            },
            {
                name: "Last Name",
                prop: "lastName",
                resizeable: false,
                draggable: false,
                width: "150",
                frozenLeft: true,
                order: "default"
            },
            {
                name: "DOB",
                prop: "dob",
                resizeable: false,
                draggable: false,
                width: "120",
                frozenLeft: false,
                order: "default",
                type: "date"
            },
            {
                name: "Age",
                prop: "age",
                resizeable: false,
                draggable: false,
                width: "100",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Gender",
                prop: "gender",
                resizeable: false,
                draggable: false,
                width: "100",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Phone Number",
                prop: "phoneNumber",
                resizeable: false,
                draggable: false,
                width: "160",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "E-mail",
                prop: "email",
                resizeable: false,
                draggable: false,
                width: "270",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "SSN",
                prop: "ssn",
                resizeable: false,
                draggable: false,
                width: "150",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Position",
                prop: "position",
                resizeable: false,
                draggable: false,
                width: "140",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Department",
                prop: "department",
                resizeable: false,
                draggable: false,
                width: "160",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Experience",
                prop: "experience",
                resizeable: false,
                draggable: false,
                width: "120",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Salary",
                prop: "salary",
                resizeable: false,
                draggable: false,
                width: "150",
                frozenLeft: false,
                order: "default",
                type:"currency"
            },
            {
                name: "Policy Number",
                prop: "policyNumber",
                resizeable: false,
                draggable: false,
                width: "170",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Account Number",
                prop: "accountNumber",
                resizeable: false,
                draggable: false,
                width: "170",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Bank Name",
                prop: "bankName",
                resizeable: false,
                draggable: false,
                width: "120",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "State",
                prop: "state",
                resizeable: false,
                draggable: false,
                width: "70",
                frozenLeft: false,
                order: "default"
            },
            {
                name: "Maritial Status",
                prop: "maritialStatus",
                resizeable: false,
                draggable: false,
                width: "150",
                frozenLeft: false,
                order: "default"
            },
        ]

        return empTableCols;
    }
}

          