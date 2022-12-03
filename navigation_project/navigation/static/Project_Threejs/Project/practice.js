import { find_link } from './find_link.js';

let route = ['n13', 'n196', 'n12',
'n22', 'n201', 'n294', 'n207'];

let Link_array =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                , 0, 0, 0]; // 출력된 경로의 간선을 담는 배열 이게 젤 문제임.


// 두 쌍의 노드로 간선을 찾는 함수

console.log(Link_array)   
for (var i = 0; i < route.length - 1; i++) {
    find_link(route[i], route[i + 1], Link_array);
    console.log(route[i], route[i + 1], Link_array);
}
