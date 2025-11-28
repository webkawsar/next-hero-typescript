{
    // Statics in OOP
    class Counter {
        count: number = 0;

        increment() {
            this.count = this.count + 1;
        }

        decrement() {
            this.count = this.count - 1;
        }
    }

    const count1 = new Counter();
    console.log(count1.increment());
    console.log(count1.increment());
    console.log(count1.increment());
    console.log(count1.increment());


    const count2 = new Counter();
    console.log(count2.decrement());
    console.log(count2.decrement());





    //
}