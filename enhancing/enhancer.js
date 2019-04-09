module.exports = {
  success,
  fail,
  repair
}


function success(item) {
  const newEnhancement = item.enhancement + 1;
  const newName = item.originalName;
    return {
      ...item,
      enhancement: newEnhancement,
      name: `[+${newEnhancement}] ${newName}`
    };
}

function fail(item) {
  const itemEnhancement = item.enhancement;
  const itemDurability = item.durability;
  let newDurability = itemDurability;
  let newEnhancement = itemEnhancement;
  const newName = item.originalName;

  if(itemEnhancement > -1 && itemEnhancement < 15) {
    newDurability = itemDurability - 5;
  } else if(itemEnhancement > 14) {
    newDurability = itemDurability - 10;
  } else if(itemEnhancement > 16) {
    newEnhancement = itemEnhancement - 1;
  }

  if(newEnhancement <= 14 && newDurability < 25)
    return "Enhancement Failed";

  if(newEnhancement >= 15 && newDurability < 10)
    return "Enhancement Failed";

    return {
      ...item,
      name: `[+${newEnhancement}] ${newName}`,
      durability: newDurability,
      enhancement: newEnhancement
    }
}

function repair(item) {
  return {...item, durability: 100};
}