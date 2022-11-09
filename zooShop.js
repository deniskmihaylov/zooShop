function zooShop(input) {
    let d = input[0];
    let c = input[1];
    let dogprice = d * 2.5; 
    let catprice = c * 4; 
    let sum = (dogprice + catprice) + ' lv.';
    console.log(sum)
}

zooShop([3, 4])