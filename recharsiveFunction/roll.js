const studentRoll = (reg, roll)=>{
    if (roll < 200){
        studentRoll(reg + 1, roll + 1)
    };
    console.log(`Reg NO : ${reg}   Roll NO : ${roll} `);
}
studentRoll(1, 101);