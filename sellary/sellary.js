const basic = ()=> 34000;
const incriment = ()=> basic() / 100 * 5;
const jeshdhata = ()=> (basic() + incriment()) / 100 * 10;
const maharga = ()=> (basic() + incriment() + jeshdhata()) / 100 * 10;
const houseRent = ()=> (basic() + incriment() + jeshdhata()) / 100 * 40;
const total = ()=> basic() + incriment() + jeshdhata() + maharga() + houseRent();

const allStaff = (name)=>{
    return name() + total();
}
const staffSellary = (month, name, mul, incri, jeshdha, maharg, gharRent)=>{
    return  [month(), name(), mul(), incri(),  jeshdha() , maharg(), gharRent(), total()]
}

console.log("Sellary of Month " + staffSellary(()=>'Razab : ', ()=>'Md Wasiur Rahman : ', basic, incriment, jeshdhata, maharga, houseRent));