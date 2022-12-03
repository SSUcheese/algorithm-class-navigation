function fair_match(a, b, index, s, e, Link_array) {
    if (s == a && e == b) {
        Link_array[index] = 1;
}       else if (s == b && e == a) {
        Link_array[index] = 1;
    }
}
let Link_array =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0];

fair_match('n196', 'n11_1', 16, 'n13', 'n196', Link_array);

console.log(Link_array);