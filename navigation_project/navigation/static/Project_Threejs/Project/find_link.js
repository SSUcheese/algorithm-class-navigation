var index = 0;
export function find_link(s, e, Link_array) {
    function fair_match(a, b, index, s, e, Link_array) {
        if ((s == a && e == b) || (s == b && e == a)) {
            Link_array[index] = 1;
        }
    }
    // 1층 간선 매치
    fair_match('n101_1', 'n101_2', 1, s, e, Link_array);
    fair_match('n195', 'n101_2', 2, s, e, Link_array);
    fair_match('n195', 'n102', 3, s, e, Link_array);
    fair_match('n103', 'n102', 4, s, e, Link_array);
    fair_match('n103', 'n104', 5, s, e, Link_array);
    fair_match('n105', 'n104', 6, s, e, Link_array);
    fair_match('n105', 'n106', 7, s, e, Link_array);
    fair_match('n195', 'n107', 8, s, e, Link_array);
    fair_match('n108', 'n107', 9, s, e, Link_array);
    fair_match('n108', 'n109', 10, s, e, Link_array);
    fair_match('n110', 'n109', 11, s, e, Link_array);
    fair_match('n110', 'n11_2', 12, s, e, Link_array);
    fair_match('n111', 'n11_2', 78, s, e, Link_array);
    fair_match('n109', 'n1999', 13, s, e, Link_array);
    fair_match('n197', 'n1999', 14, s, e, Link_array);
    fair_match('n101_1', 'n12', 15, s, e, Link_array);
    fair_match('n196', 'n12', 79, s, e, Link_array);
    fair_match('n196', 'n11_1', 16, s, e, Link_array);
    fair_match('n196', 'n13', 17, s, e, Link_array);
    fair_match('n11_1', 'n197', 18, s, e, Link_array);
    fair_match('n199', 'n197', 19, s, e, Link_array);
    fair_match('n199', 'n198', 20, s, e, Link_array);
    fair_match('n199', 'n113', 21, s, e, Link_array);
    fair_match('n198', 'n111', 22, s, e, Link_array);
    fair_match('n112', 'n111', 23, s, e, Link_array);
    fair_match('n112', 'n198', 24, s, e, Link_array);
    fair_match('n113', 'n198', 25, s, e, Link_array);
    fair_match('n10', 'n198', 26, s, e, Link_array);
    
    // 2층 간선 매치
    fair_match('n201', 'n294', 27, s, e, Link_array);
    fair_match('n202', 'n294', 28, s, e, Link_array);
    fair_match('n202', 'n203', 29, s, e, Link_array);
    fair_match('n204', 'n203', 30, s, e, Link_array);
    fair_match('n204', 'n205', 31, s, e, Link_array);
    fair_match('n206', 'n205', 32, s, e, Link_array);
    fair_match('n294', 'n207', 33, s, e, Link_array);
    fair_match('n208', 'n207', 34, s, e, Link_array);
    fair_match('n21_1', 'n207', 34, s, e, Link_array); // n208 노드와 n21_1 노드가 겹치므로 34번 노드 ,35번 노드는 추가로 설정
    fair_match('n208', 'n209', 35, s, e, Link_array);
    fair_match('n21_1', 'n209', 35, s, e, Link_array);
    fair_match('n210', 'n209', 36, s, e, Link_array);
    fair_match('n210', 'n211', 37, s, e, Link_array);
    fair_match('n212', 'n211', 38, s, e, Link_array);
    fair_match('n209', 'n2999', 39, s, e, Link_array);
    fair_match('n295', 'n2999', 40, s, e, Link_array);
    fair_match('n201', 'n22', 41, s, e, Link_array);
    fair_match('n295', 'n22', 42, s, e, Link_array);
    fair_match('n295', 'n296', 43, s, e, Link_array);
    fair_match('n23', 'n296', 44, s, e, Link_array);
    fair_match('n21_2', 'n296', 45, s, e, Link_array);
    fair_match('n21_2', 'n297', 46, s, e, Link_array);
    fair_match('n20', 'n297', 47, s, e, Link_array);
    fair_match('n20', 'n212', 48, s, e, Link_array);
    fair_match('n20', 'n298', 49, s, e, Link_array);
    fair_match('n297', 'n298', 50, s, e, Link_array);
    fair_match('n299', 'n298', 51, s, e, Link_array);
    fair_match('n299', 'n200', 52, s, e, Link_array);
    
    // 3층 간선 매치
    fair_match('n301', 'n302', 53, s, e, Link_array);
    fair_match('n303', 'n302', 54, s, e, Link_array);
    fair_match('n303', 'n304', 55, s, e, Link_array);
    fair_match('n304', 'n305', 56, s, e, Link_array); // n305 노드와 n31_1 이 동일 노드이므로 추가로 설정
    fair_match('n304', 'n31_1', 56, s, e, Link_array);
    fair_match('n306', 'n305', 57, s, e, Link_array); // 바로 다음 n306 노드와 n32 노드도 동일 노드이므로 2x2 = 총 4 경우를 설정
    fair_match('n306', 'n31_1', 57, s, e, Link_array);
    fair_match('n32', 'n305', 57, s, e, Link_array);
    fair_match('n32', 'n31_1', 57, s, e, Link_array);
    fair_match('n307', 'n31_1', 58, s, e, Link_array); // 마찬가지로 추가 설정
    fair_match('n307', 'n32', 58, s, e, Link_array);
    fair_match('n307', 'n308', 59, s, e, Link_array); //  n308 노드와 n311 노드가 동일 하므로 추가 설정
    fair_match('n307', 'n311', 59, s, e, Link_array);
    fair_match('n309', 'n311', 60, s, e, Link_array); // 추가 설정
    fair_match('n309', 'n308', 60, s, e, Link_array);
    fair_match('n309', 'n310', 61, s, e, Link_array);
    fair_match('n307', 'n313', 62, s, e, Link_array);
    fair_match('n312', 'n313', 63, s, e, Link_array);
    fair_match('n314', 'n313', 64, s, e, Link_array);
    fair_match('n314', 'n315', 65, s, e, Link_array);
    fair_match('n316', 'n315', 66, s, e, Link_array);
    fair_match('n31_2', 'n315', 66, s, e, Link_array);
    fair_match('n316', 'n317', 67, s, e, Link_array);
    fair_match('n31_2', 'n317', 67, s, e, Link_array);
    fair_match('n318', 'n317', 68, s, e, Link_array);
    fair_match('n320', 'n317', 68, s, e, Link_array);
    fair_match('n318', 'n319', 69, s, e, Link_array);
    fair_match('n320', 'n319', 69, s, e, Link_array);
    fair_match('n315', 'n3999', 70, s, e, Link_array);
    fair_match('n302', 'n3999', 71, s, e, Link_array);
    fair_match('n317', 'n397', 72, s, e, Link_array);
    fair_match('n30', 'n397', 73, s, e, Link_array);
    fair_match('n398', 'n397', 74, s, e, Link_array);
    fair_match('n398', 'n301', 75, s, e, Link_array);
    fair_match('n398', 'n399', 76, s, e, Link_array);
    fair_match('n34', 'n399', 77, s, e, Link_array);
    
    // 층간 이동 간선 매치
    fair_match('n13', 'n23', 80, s, e, Link_array); // 계단3 연결
    fair_match('n23', 'n33', 81, s, e, Link_array);
    fair_match('n13', 'n33', 80, s, e, Link_array);
    fair_match('n13', 'n33', 81, s, e, Link_array);
    
    fair_match('n12', 'n22', 82, s, e, Link_array); // 계단2 연결
    fair_match('n22', 'n32', 83, s, e, Link_array);
    fair_match('n12', 'n32', 82, s, e, Link_array);
    fair_match('n12', 'n32', 83, s, e, Link_array);
    
    fair_match('n11_1', 'n21_1', 84, s, e, Link_array); // 계단1_1 연결
    fair_match('n21_1', 'n31_1', 85, s, e, Link_array);
    fair_match('n11_1', 'n31_1', 84, s, e, Link_array);
    fair_match('n11_1', 'n31_1', 85, s, e, Link_array);
    
    fair_match('n11_2', 'n21_2', 86, s, e, Link_array); // 계단1_2 연결
    fair_match('n21_2', 'n31_2', 87, s, e, Link_array);
    fair_match('n11_2', 'n31_2', 86, s, e, Link_array);
    fair_match('n11_2', 'n31_2', 87, s, e, Link_array);
    
    fair_match('n10', 'n20', 88, s, e, Link_array); // 계단1_2 연결
    fair_match('n20', 'n30', 89, s, e, Link_array);
    fair_match('n10', 'n30', 88, s, e, Link_array);
    fair_match('n10', 'n30', 89, s, e, Link_array);


}
