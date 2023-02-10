function incomeSpendJoma(month, extraJuma, hadia, boyan, bill, bazar, bibidha){
    const officeOjifa = 58900;
    const masjid = 30000;
    const masjid2 = 5000;
    const income = officeOjifa + masjid + masjid2 + extraJuma() + hadia() + boyan();
    const houseRent = 11800;
    const fee = 10500;
    const kedmat = 5000;
    const spend = houseRent + fee + kedmat + bill() + bazar() + bibidha();
    const joma_Tan = income - spend;
    return [month, income, spend, joma_Tan];
}

console.log(incomeSpendJoma('Muharram :', ()=>10000, ()=>500, ()=>4000, ()=>5000, ()=>13500, ()=>5000));
console.log("My Income, Spend & Joma of " + incomeSpendJoma('Safar :', ()=>5000, ()=>1000, ()=>0, ()=>5000, ()=>13500, ()=>5000));