const staffSellary = (month, name, basic, houseRent) => {
    const incriment = basic() / 100 * 5;
    const jeshdhata = (basic() + incriment) / 100 * 10;
    const maharga = (basic() + incriment + jeshdhata) / 100 * 10;
    const total = basic() + incriment + jeshdhata + maharga + houseRent();
    return [month(), name(), basic(), incriment, jeshdhata, maharga, houseRent(), total]
}

console.log("Sellary of Month " + staffSellary(()=>'Razab : ', () => 'Mawlana Abdul Malik : ', ()=>28000, ()=> 12936));

// House rent is not for every one
// All Staff Total Sellary = sellary.filter(x => x.total) > যোগফল নির্ণয় > while i < x.total.lenght