{
    // Access modifiers
    // private property lekhar convention hochhe _ diye suru kora
    class BankAccount {
        public readonly id: number;
        public readonly name: string;
        protected _balance: number;

        constructor(id:number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }
    }

    const person = new BankAccount(101, "Kawsar", 500);
    // person.id = 1;
    // person.balance = 1;
    person.addDeposit(600);
    console.log(person.getBalance());

    class StudentAccount extends BankAccount {
        getStudentBalance() {
            return this._balance;
        }
    }






    //
}