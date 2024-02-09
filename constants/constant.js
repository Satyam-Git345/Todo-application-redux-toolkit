export const getPeority = (peority) => {
  if (peority === "0") return "Low";
  else if (peority === "1") return "Medium";
  else if (peority === "2") return "High";
  else return "unknown type";
};

export const getPeorityColor = (peority) =>{
    if (peority === "0") return "green";
    else if (peority === "1") return "orange";
    else if (peority === "2") return "red";
    else return "unknown type";
}