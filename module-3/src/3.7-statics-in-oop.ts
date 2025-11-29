{
    // Statics in OOP
    class Counter {
        // count: number = 0;
        // increment() {
        //     return this.count = this.count + 1;
        // }

        // decrement() {
        //     return this.count = this.count - 1;
        // }


        static count: number = 0;
        static increment() {
            return Counter.count = Counter.count + 1;
        }

        static decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    // const counter1 = new Counter();
    // console.log(counter1.increment());
    // console.log(counter1.increment());
    // console.log(counter1.increment());
    // console.log(counter1.increment());
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())


    // const counter2 = new Counter();
    // console.log(counter2.decrement());
    // console.log(counter2.decrement());
    console.log(Counter.decrement());
    console.log(Counter.decrement());

    // static sara korle different memory create hoy
    // static add korle eki memory ke reference kore





    //
}