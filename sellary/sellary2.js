const staffSellary = (month, name, basic) => {
    const incriment = basic() / 100 * 5;
    const jeshdhata = (basic() + incriment) / 100 * 10;
    const maharga = (basic() + incriment + jeshdhata) / 100 * 10;
    const houseRent = (basic() + incriment + jeshdhata) / 100 * 40;
    const total = basic() + incriment + jeshdhata + maharga + houseRent;
    return [month(), name(), basic(), incriment, jeshdhata, maharga, houseRent, total]
}
console.log("Sellary of Month " + staffSellary(()=>'Razab : ', () => 'Mawlana Waliullah : ', ()=>25000));

// House rent for every one
// All Staff Total Sellary = sellary.filter(x => x.total) > যোগফল নির্ণয় > while i < x.total.lenght

