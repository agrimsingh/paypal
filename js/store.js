//----------------------------------------------------------------
// store (contains the products)
// 
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("apl", "Apple", "An apple a day keeps the doc away", 12, 90, 0, 2, 0, 1, 2),
        new product("avc", "Avocado", "Hipster foods", 16, 90, 0, 1, 1, 1, 2),
        new product("ban", "Banana", "Because everyone loved that trailer for Despicable Me 2", 4, 120, 0, 2, 1, 2, 2),
        new product("ctp", "Cantaloupe", "I just googled this.", 3, 50, 4, 4, 1, 2, 0),
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
