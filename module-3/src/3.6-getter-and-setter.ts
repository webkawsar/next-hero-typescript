{
    // Getter and Setter
    class BankAccount {
        public readonly id: number;
        public readonly name: string;
        protected _balance: number;

        constructor(id:number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // getBalance() {
        //     return this._balance;
        // }

        // getter
        get getBalance() {
            return this._balance;
        }
        

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }


    }

    const person = new BankAccount(101, "Kawsar", 500);
    person.deposit = 1000;
    






    //
}