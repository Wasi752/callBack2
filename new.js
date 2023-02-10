// function Name (a, b, c){
//     return [a, b(5000, 3000, c)];
// }
// function sallary(basic, jeshdhata, inc){
//     return basic + jeshdhata + inc;
// }

// console.log(Name("salam", sallary, 10000))
// console.log(Name("kalam", sallary, 50000))

// function calculateRemainingWithBonusAndExtraAnushangikAndDoctor() {
//     const beton = 120;
//     const bazar = 30;
//     const bhara = 30;
//     const anushangik = 40;
//     const doctor = 20;
//     return beton - (bazar + bhara + anushangik + doctor);
//   }
//   function calculateRemainingWithBonusAndExtraAnushangikAndGiftAndFurniture() {
//     const beton = 120;
//     const bazar = 30;
//     const bhara = 30;
//     const anushangik = 40;
//     const gift = 10;
//     const furniture = 10;
//     return beton - (bazar + bhara + anushangik + gift + furniture);
//   }
//   function calculateRemainingWithBonusAndExtraAnushangik() {
//     const beton = 120;
//     const bazar = 30;
//     const bhara = 30;
//     const anushangik = 40;
//     return beton - (bazar + bhara + anushangik);
//   }
  
//   function calculateRemainingWithOutBonusAndExtraAnushangik() {
//     const beton = 100;
//     const bazar = 30;
//     const bhara = 30;
//     const anushangik = 40;
//     return beton - (bazar + bhara + anushangik);
//   }
//   function calculateRemainingWithBonus() {
//     const beton = 120;
//     const bazar = 30;
//     const bhara = 30;
//     const anushangik = 30;
//     return beton - (bazar + bhara + anushangik);
//   }
  
//   function calculateRemainingWithOutBonus() {
//     const beton = 100;
//     const bazar = 30;
//     const bhara = 30;
//     const anushangik = 30;
//     return beton - (bazar + bhara + anushangik);
//   }
  
//   console.log("with bounus " + calculateRemainingWithBonus());
//   console.log("without bounus " + calculateRemainingWithOutBonus());
//   console.log(
//     "with bounus and extra anushangik" +
//       calculateRemainingWithBonusAndExtraAnushangik()
//   );
//   console.log(
//     "without bounus and extra anushangik " +
//       calculateRemainingWithOutBonusAndExtraAnushangik()
//   );
  
//   //-----------------
  
  function calculateRemaining(beton, anushangik, additional) {
    const bazar = 30;
    const bhara = 30;
    return beton - (bazar + bhara + anushangik + additional());
  }
  
  console.log("with bounus " + calculateRemaining(120, 30, () => 20));
  console.log("without bounus " + calculateRemaining(100, 30, () => 10 + 10));
  console.log(
    "without bounus and extra anushangik " + calculateRemaining(100, 40, () => 0)
  );
  console.log(
    "without bounus and extra anushangik " +
      calculateRemaining(100, 40, () => 300))//parseInt(prompt("Enter a number")));