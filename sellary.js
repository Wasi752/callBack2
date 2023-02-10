const basic = (a)=>{
    return a = 34000;
};

const incriment = ()=>{
    return basic() / 100 * 5;
};
const jeshdhata = ()=>{
    return (basic() + incriment()) / 100 * 10;
};
const maharga = ()=>{
    return (basic() + incriment() + jeshdhata()) / 100 * 10;
};
const houseRent = ()=>{
    return (basic() + incriment() + jeshdhata()) / 100 * 40;
};
const total = ()=> {
    return basic() + incriment() + jeshdhata() + maharga() + houseRent();
}
const allStaff = (name)=>{
    return name() + total();
}
const staffSellary = (month, name, mul, incri, jeshdha, maharg, gharRent)=>{
    return  [month(), name(), mul(), incri(),  jeshdha() , maharg(), gharRent(), total()]
}

console.log("Sellary of Month " + staffSellary(()=>'Razab : ', ()=>'Md Wasiu Rahman : ', basic, incriment, jeshdhata, maharga, houseRent));


