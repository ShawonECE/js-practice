class StockSpanner {
    constructor() {
        this.stock = [];
    }

    // brute force
    // next(price) {
    //     let span = 1;
    //     for (let i = this.stock.length - 1; i >= 0; i--) {
    //         if (this.stock[i] <= price) {
    //             span++;
    //         } else {
    //             break;
    //         }
    //     }

    //     this.stock.push(price);
    //     return span;
    // }

    // monotonic stack

    next(price) {
        const newStock = {
            span: 1,
            price
        };

        if (this.stock.length === 0 || this.stock[this.stock.length - 1].price > price) {
            this.stock.push(newStock);
        } else {
            while(this.stock.length && this.stock[this.stock.length - 1].price <= price) {
                newStock.span += this.stock[this.stock.length - 1].span;
                this.stock.pop();
            }

            this.stock.push(newStock);
        }

        return newStock.span;
    }
}