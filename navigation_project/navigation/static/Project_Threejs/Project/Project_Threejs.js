import * as THREE from 'three'; // three.js 를 모듈 파일로 임폴트함.
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { find_link } from 'find_link';

// let route = ['n102', 'n195', 'n101_2',
//              'n101_1', 'n12', 'n32', 'n307', 'n313', 'n314', 'n315',
//             'n3999', 'n302', 'n301', 'n398', 'n397', 'n30', 'n20'];

let Link_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0]; // 


// 두 쌍의 노드로 간선을 찾는 함수
for (var i = 0; i < route.length - 1; i++) {
    find_link(route[i], route[i + 1], Link_array)

}

// Link_array[16] = 1


class App {
    constructor() {
        const divContainer = document.querySelector("#webgl-container")
        this._divContainer = divContainer; // div container를 다른 메서드에서 참조 가능하게 const 객체로 만든 것

        const renderer = new THREE.WebGLRenderer({ antialias: true }); // 안티앨리어스를 설정함, 계단 현상을 부드럽게 하기.
        renderer.setPixelRatio(window.devicePixelRatio); // 픽셀 크기 값 조정
        divContainer.appendChild(renderer.domElement); // 렌더러를 div container 의 자식으로 추가
        this._renderer = renderer; // 역시 렌더러를 다른 메서드에서 참조할 수 있도록 변수로 만듦.

        const scene = new THREE.Scene();
        this._scene = scene; // 씬도 다른 메서드에서 참조할 수 있도록 변수화
        this._scene.background = new THREE.Color(0xeeeeee);

        this._setupCamera();
        this._setupLight();
        this._setupModel();
        this._setupControls();

        // bind(this) 는 App class 내의 this 를 사용하기 위함.
        window.onresize = this.resize.bind(this) // 렌더러나 카메라는 창크기가 변경될 때 마다 속성값을 재설정해줘야함. 그래서 resize 를 설정
        this.resize();

        requestAnimationFrame(this.render.bind(this)); // render 메서드는 3차원 그래픽을 만들어줌, requestanimationframe 는 최대한 빠르게 render 메서드를 넘겨줌
    }


    _setupControls() {
        new OrbitControls(this._camera, this._divContainer);
    }




    _setupCamera() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            100
        );
        camera.position.x = 50
        camera.position.y = 50
        camera.position.z = 50
        this._camera = camera;
    }

    _setupLight() {
        const color = 0xffffff;
        const intensity = 1;
        const light_1 = new THREE.DirectionalLight(color, intensity);
        const light_2 = new THREE.DirectionalLight(color, intensity);
        light_1.position.set(0, 4, 4)
        light_2.position.set(0, 4, -16)
        this._scene.add(light_1);
        this._scene.add(light_2);
    }

    _setupModel() {
        const gltfLoader = new GLTFLoader();
        const GSK_url = '/static/Project_Threejs/Project/materials/GSK.glb';
        const cup_url = '/static/Project_Threejs/Project/materials/cup.glb';
        const toilet_url = '/static/Project_Threejs/Project/materials/toilet.glb';
        gltfLoader.load( // 경상관 도면 gltf 파일을 three.js 에 올리기
            GSK_url,
            (gltf) => {
                const GSK = gltf.scene;
                this._scene.add(GSK);
            }
        );

        const box = new THREE.BoxGeometry(0, 0, 0);
        const fillMaterial = new THREE.MeshPhongMaterial({ color: 0xF6546A });




        const node_101_1 = new THREE.Mesh(box, fillMaterial); // 강의실
        const node_101_2 = new THREE.Mesh(box, fillMaterial);
        const node_102 = new THREE.Mesh(box, fillMaterial);
        const node_103 = new THREE.Mesh(box, fillMaterial);
        const node_104 = new THREE.Mesh(box, fillMaterial);
        const node_105 = new THREE.Mesh(box, fillMaterial);
        const node_106 = new THREE.Mesh(box, fillMaterial);
        const node_107 = new THREE.Mesh(box, fillMaterial);
        const node_108 = new THREE.Mesh(box, fillMaterial);
        const node_109 = new THREE.Mesh(box, fillMaterial);
        const node_110 = new THREE.Mesh(box, fillMaterial);
        const node_111 = new THREE.Mesh(box, fillMaterial);
        const node_112 = new THREE.Mesh(box, fillMaterial);
        const node_113 = new THREE.Mesh(box, fillMaterial);
        const node_195 = new THREE.Mesh(box, fillMaterial); // 분기점
        const node_196 = new THREE.Mesh(box, fillMaterial);
        const node_197 = new THREE.Mesh(box, fillMaterial);
        const node_198 = new THREE.Mesh(box, fillMaterial);
        const node_199 = new THREE.Mesh(box, fillMaterial);
        const node_1999 = new THREE.Mesh(box, fillMaterial); // 화장실
        const node_11_1 = new THREE.Mesh(box, fillMaterial); // 계단
        const node_11_2 = new THREE.Mesh(box, fillMaterial);
        const node_12 = new THREE.Mesh(box, fillMaterial);
        const node_13 = new THREE.Mesh(box, fillMaterial);
        const node_10 = new THREE.Mesh(box, fillMaterial); // 엘베


        const node_200 = new THREE.Mesh(box, fillMaterial); // 출입구
        const node_201 = new THREE.Mesh(box, fillMaterial); // 강의실
        const node_202 = new THREE.Mesh(box, fillMaterial);
        const node_203 = new THREE.Mesh(box, fillMaterial);
        const node_204 = new THREE.Mesh(box, fillMaterial);
        const node_205 = new THREE.Mesh(box, fillMaterial);
        const node_206 = new THREE.Mesh(box, fillMaterial);
        const node_207 = new THREE.Mesh(box, fillMaterial);
        const node_208 = new THREE.Mesh(box, fillMaterial);
        const node_209 = new THREE.Mesh(box, fillMaterial);
        const node_210 = new THREE.Mesh(box, fillMaterial);
        const node_211 = new THREE.Mesh(box, fillMaterial);
        const node_212 = new THREE.Mesh(box, fillMaterial);
        const node_294 = new THREE.Mesh(box, fillMaterial); // 분기점
        const node_295 = new THREE.Mesh(box, fillMaterial);
        const node_296 = new THREE.Mesh(box, fillMaterial);
        const node_297 = new THREE.Mesh(box, fillMaterial);
        const node_298 = new THREE.Mesh(box, fillMaterial);
        const node_299 = new THREE.Mesh(box, fillMaterial);
        const node_2999 = new THREE.Mesh(box, fillMaterial); // 화장실
        const node_21_1 = new THREE.Mesh(box, fillMaterial); // 계단
        const node_21_2 = new THREE.Mesh(box, fillMaterial);
        const node_22 = new THREE.Mesh(box, fillMaterial);
        const node_23 = new THREE.Mesh(box, fillMaterial);
        const node_20 = new THREE.Mesh(box, fillMaterial); // 엘베



        const node_301 = new THREE.Mesh(box, fillMaterial); // 강의실
        const node_302 = new THREE.Mesh(box, fillMaterial);
        const node_303 = new THREE.Mesh(box, fillMaterial);
        const node_304 = new THREE.Mesh(box, fillMaterial);
        const node_305 = new THREE.Mesh(box, fillMaterial);
        const node_306 = new THREE.Mesh(box, fillMaterial);
        const node_307 = new THREE.Mesh(box, fillMaterial);
        const node_308 = new THREE.Mesh(box, fillMaterial);
        const node_309 = new THREE.Mesh(box, fillMaterial);
        const node_310 = new THREE.Mesh(box, fillMaterial);
        const node_312 = new THREE.Mesh(box, fillMaterial);
        const node_313 = new THREE.Mesh(box, fillMaterial);
        const node_314 = new THREE.Mesh(box, fillMaterial);
        const node_315 = new THREE.Mesh(box, fillMaterial);
        const node_316 = new THREE.Mesh(box, fillMaterial);
        const node_317 = new THREE.Mesh(box, fillMaterial);
        const node_318 = new THREE.Mesh(box, fillMaterial);
        const node_319 = new THREE.Mesh(box, fillMaterial);
        const node_3999 = new THREE.Mesh(box, fillMaterial);
        const node_397 = new THREE.Mesh(box, fillMaterial);
        const node_398 = new THREE.Mesh(box, fillMaterial);
        const node_399 = new THREE.Mesh(box, fillMaterial);
        const node_33 = new THREE.Mesh(box, fillMaterial);
        const node_30 = new THREE.Mesh(box, fillMaterial);









        node_101_1.position.set(-23.2, -20.5, 8.4);  // 1층 노드는 (#, -20.5, #) 꼴임.
        this._scene.add(node_101_1);
        node_101_2.position.set(-23.2, -20.5, 3.5);
        this._scene.add(node_101_2);
        node_102.position.set(-25.7, -20.5, -0.3);
        this._scene.add(node_102);
        node_103.position.set(-25.7, -20.5, -3.65);
        this._scene.add(node_103);
        node_104.position.set(-25.7, -20.5, -7.45);
        this._scene.add(node_104);
        node_105.position.set(-25.7, -20.5, -11.25);
        this._scene.add(node_105);
        node_106.position.set(-25.7, -20.5, -15.05);
        this._scene.add(node_106);
        node_107.position.set(-20.5, -20.5, -0.3);
        this._scene.add(node_107);
        node_108.position.set(-11.7, -20.5, -0.3);
        this._scene.add(node_108);
        node_109.position.set(-2.1, -20.5, -0.3);
        this._scene.add(node_109);
        node_110.position.set(6, -20.5, -0.3);
        this._scene.add(node_110);
        node_111.position.set(14.8, -20.5, -0.3);
        this._scene.add(node_111);
        node_112.position.set(18.6, -20.5, 2.5);
        this._scene.add(node_112);
        node_113.position.set(18.6, -20.5, 4.8);
        this._scene.add(node_113);
        node_195.position.set(-23.2, -20.5, -0.3);
        this._scene.add(node_195);
        node_196.position.set(-14, -20.5, 8.4);
        this._scene.add(node_196);
        node_197.position.set(-2.1, -20.5, 8.4);
        this._scene.add(node_197);
        node_198.position.set(17, -20.5, 4.03);
        this._scene.add(node_198);
        node_199.position.set(17, -20.5, 8.4);
        this._scene.add(node_199);
        node_1999.position.set(-2.1, -20.5, 4);
        this._scene.add(node_1999);
        node_11_1.position.set(-11.6, -20.5, 8.4);
        this._scene.add(node_11_1);
        node_11_2.position.set(8.65, -20.5, -0.3);
        this._scene.add(node_11_2);
        node_12.position.set(-20.8, -20.5, 8.4);
        this._scene.add(node_12);
        node_13.position.set(-14, -20.5, 12.9);
        this._scene.add(node_13);
        node_10.position.set(15.3, -20.5, 4.03);
        this._scene.add(node_10);




        node_200.position.set(23.5, 0, 15.2);  // 1층 노드는 (#, -20.5, #) 꼴임.
        this._scene.add(node_200);
        node_201.position.set(-22.75, 0, 8.6);  // 1층 노드는 (#, -20.5, #) 꼴임.
        this._scene.add(node_201);
        node_202.position.set(-25.25, 0, 0.1);
        this._scene.add(node_202);
        node_203.position.set(-25.25, 0, -3.4);
        this._scene.add(node_203);
        node_204.position.set(-25.25, 0, -7.15);
        this._scene.add(node_204);
        node_205.position.set(-25.25, 0, -10.95);
        this._scene.add(node_205);
        node_206.position.set(-25.25, 0, -14.7);
        this._scene.add(node_206);
        node_207.position.set(-20, 0, 0.1);
        this._scene.add(node_207);
        node_208.position.set(-11.5, 0, 0.1); // 21_1 노드와 동일
        this._scene.add(node_208);
        node_209.position.set(-1.95, 0, 0.1);
        this._scene.add(node_209);
        node_210.position.set(6, 0, 0.1);
        this._scene.add(node_210);
        node_211.position.set(14.8, 0, 0.1);
        this._scene.add(node_211);
        node_212.position.set(23.5, 0, 0.1);
        this._scene.add(node_212);
        node_294.position.set(-22.75, 0, 0.1);
        this._scene.add(node_294);
        node_295.position.set(-1.95, 0, 8.6);
        this._scene.add(node_295);
        node_296.position.set(0.5, 0, 8.6);
        this._scene.add(node_296);
        node_297.position.set(16, 0, 8.6);
        this._scene.add(node_297);
        node_298.position.set(19.5, 0, 8.6);
        this._scene.add(node_298);
        node_299.position.set(19.5, 0, 12.65);
        this._scene.add(node_299);
        node_2999.position.set(-1.95, 0, 4);
        this._scene.add(node_2999);
        node_21_2.position.set(10.25, 0, 8.6);
        this._scene.add(node_21_2);
        node_22.position.set(-17.7, 0, 8.6);
        this._scene.add(node_22);
        node_23.position.set(0.5, 0, 12.7);
        this._scene.add(node_23);
        node_20.position.set(17.3, 0, 4.35);
        this._scene.add(node_20);




        node_301.position.set(4.5, 21.6, 8.5);
        this._scene.add(node_301);
        node_302.position.set(-1.25, 21.6, 8.5);
        this._scene.add(node_302);
        node_303.position.set(-3.9, 21.6, 8.5);
        this._scene.add(node_303);
        node_304.position.set(-8.1, 21.6, 8.5);
        this._scene.add(node_304);
        node_305.position.set(-12.2, 21.6, 8.5); // 31_1 노드와 동일
        this._scene.add(node_305);
        node_306.position.set(-16.5, 21.6, 8.5); // 32 노드와 동일
        this._scene.add(node_306);
        node_307.position.set(-21.1, 21.6, 8.5);
        this._scene.add(node_307);
        node_308.position.set(-24.7, 21.6, 8.5); // 311 노드와 동일
        this._scene.add(node_308);
        node_309.position.set(-28.3, 21.6, 8.5);
        this._scene.add(node_309);
        node_310.position.set(-31.9, 21.6, 8.5);
        this._scene.add(node_310);
        node_312.position.set(-24.1, 21.6, 0.5);
        this._scene.add(node_312);
        node_313.position.set(-21.1, 21.6, 0.5);
        this._scene.add(node_313);
        node_314.position.set(-10.2, 21.6, 0.5);
        this._scene.add(node_314);
        node_315.position.set(-1.25, 21.6, 0.5);
        this._scene.add(node_315);
        node_316.position.set(9.75, 21.6, 0.5); // 31_2 노드와 동일
        this._scene.add(node_316);
        node_317.position.set(17.5, 21.6, 0.5);
        this._scene.add(node_317);
        node_318.position.set(23.0, 21.6, 0.5); // 320 노드와 동일
        this._scene.add(node_318);
        node_319.position.set(29.5, 21.6, 0.5);
        this._scene.add(node_319);
        node_397.position.set(17.5, 21.6, 4.6);
        this._scene.add(node_397);
        node_398.position.set(17.5, 21.6, 8.5);
        this._scene.add(node_398);
        node_399.position.set(17.5, 21.6, 12.5);
        this._scene.add(node_399);
        node_3999.position.set(-1.25, 21.6, 4.7);
        this._scene.add(node_3999);
        node_33.position.set(13.5, 21.6, 12.5);
        this._scene.add(node_33);
        node_30.position.set(15.5, 21.6, 4.6);
        this._scene.add(node_30);




        // 링크 시작이다.
        // 간선인 실린더 객체를 만들기 쉽게한 함수생성
        function makeLink(scene, dispose, x, y, z, length, rot_x, rot_y, rot_z, Linkcolor = 0xF6546A) { // rotation = 1 이면 x 축에 평행 , 2 이면 y 축에 평행, 3 이면 z 축에 평행
            const geometry = new THREE.CylinderGeometry(0.3, 0.3, length, 20); // (시작 단면의 반경, 끝 단면의 반경, 길이, 각 수 (진짜 원이 아닌 정다각형으로 근사))
            const material = new THREE.MeshBasicMaterial({ color: Linkcolor });
            var Link = new THREE.Mesh(geometry, material);
            Link.position.set(x, y, z);
            Link.rotation.set(rot_x, rot_y, rot_z);

            if (dispose == 1) {
                scene.add(Link);
            }
        }



        const Link_color = 0xF6546A; // 링크 실린더 객체의 색

        // 1층
        makeLink(this._scene, Link_array[1], -23.2, -20.5, 5.95, 4.9, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color); // 컬러 추가하고싶으면 인자 하나 추가하세요
        makeLink(this._scene, Link_array[2], -23.20, -20.50, 1.60, 3.80, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[3], -24.45, -20.50, -0.30, 2.50, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[4], -25.70, -20.50, -1.97, 3.35, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[5], -25.70, -20.50, -5.55, 3.80, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[6], -25.70, -20.50, -9.35, 3.80, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[7], -25.70, -20.50, -13.15, 3.80, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[8], -21.85, -20.50, -0.30, 2.70, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[9], -16.10, -20.50, -0.30, 8.80, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[10], -6.90, -20.50, -0.30, 9.60, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[11], 1.95, -20.50, -0.30, 8.10, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[12], 7.33, -20.50, -0.30, 2.65, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[78], 11.73, -20.50, -0.30, 6.15, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color); // 11_2  와 111 노드를 잇는 간선이 후에 발견되어 후발 노드로 조치함.
        makeLink(this._scene, Link_array[13], -2.10, -20.50, 1.85, 4.30, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[14], -2.10, -20.50, 6.20, 4.40, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[15], -22.00, -20.50, 8.40, 2.40, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[79], -17.40, -20.50, 8.40, 6.80, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color); // 12 노드와 196 노드를 잇는 간선이 후에 발견되어 후발 노드로 조치함.
        makeLink(this._scene, Link_array[16], -12.80, -20.50, 8.40, 2.40, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[17], -14.00, -20.50, 10.65, 4.50, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[18], -6.85, -20.50, 8.40, 9.50, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[19], 2.70, -20.50, 8.40, 28.60, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[20], 17.00, -20.50, 6.21, 4.37, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[21], 17.80, -20.50, 6.60, 3.94, Math.PI * 0.5, 0, Math.PI * 0.13, Link_color);
        makeLink(this._scene, Link_array[22], 15.90, -20.50, 1.87, 4.86, Math.PI * 0.5, 0, Math.PI * -0.15, Link_color);
        makeLink(this._scene, Link_array[23], 16.70, -20.50, 1.10, 4.72, Math.PI * 0.5, 0, Math.PI * -0.3, Link_color);
        makeLink(this._scene, Link_array[24], 17.80, -20.50, 3.27, 2.21, Math.PI * 0.5, 0, Math.PI * 0.26, Link_color);
        makeLink(this._scene, Link_array[25], 17.80, -20.50, 4.42, 1.78, Math.PI * 0.5, 0, Math.PI * -0.35, Link_color);
        makeLink(this._scene, Link_array[26], 16.15, -20.50, 4.03, 1.70, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);

        // 2층
        makeLink(this._scene, Link_array[27], -22.75, 0.00, 4.35, 8.50, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[28], -24.00, 0.00, 0.10, 2.50, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[29], -25.25, 0.00, -1.65, 3.50, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[30], -25.25, 0.00, -5.28, 3.75, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[31], -25.25, 0.00, -9.05, 3.80, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[32], -25.25, 0.00, -12.82, 3.75, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[33], -21.38, 0.00, 0.10, 2.75, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[34], -15.75, 0.00, 0.10, 8.50, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[35], -6.72, 0.00, 0.10, 9.55, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[36], 2.02, 0.00, 0.10, 7.95, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[37], 10.40, 0.00, 0.10, 8.80, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[38], 19.15, 0.00, 0.10, 8.70, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[39], -1.95, 0.00, 2.05, 3.90, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[40], -1.95, 0.00, 6.30, 4.60, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[41], -20.23, 0.00, 8.60, 5.05, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[42], -9.82, 0.00, 8.60, 15.75, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[43], -0.72, 0.00, 8.60, 2.45, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[44], 0.50, 0.00, 10.65, 4.10, Math.PI * 0.5, Math.PI * 0.5, 0, Link_color);
        makeLink(this._scene, Link_array[45], 5.38, 0.00, 8.60, 9.75, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[46], 13.12, 0.00, 8.60, 5.75, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[47], 16.65, 0.00, 6.47, 4.44, Math.PI * 0.5, 0, Math.PI * 0.095, Link_color);
        makeLink(this._scene, Link_array[48], 20.40, 0.00, 2.22, 7.52, Math.PI * 0.5, 0, Math.PI * 0.31, Link_color);
        makeLink(this._scene, Link_array[49], 18.40, 0.00, 6.47, 4.79, Math.PI * 0.5, 0, Math.PI * -0.15, Link_color);
        makeLink(this._scene, Link_array[50], 17.75, 0.00, 8.60, 3.50, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[51], 19.50, 0.00, 10.62, 4.05, Math.PI * 0.5, 0, 0, Link_color);
        makeLink(this._scene, Link_array[52], 21.50, 0.00, 13.93, 4.74, Math.PI * 0.5, 0, Math.PI * -0.32, Link_color);

        // 3층
        makeLink(this._scene, Link_array[53], 1.62, 21.60, 8.50, 5.75, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[54], -2.58, 21.60, 8.50, 2.65, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[55], -6.00, 21.60, 8.50, 4.20, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[56], -10.15, 21.60, 8.50, 4.10, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[57], -14.35, 21.60, 8.50, 4.30, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[58], -18.80, 21.60, 8.50, 4.60, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[59], -22.90, 21.60, 8.50, 3.60, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[60], -26.50, 21.60, 8.50, 3.60, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[61], -30.10, 21.60, 8.50, 3.60, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[62], -21.10, 21.60, 4.50, 8.00, Math.PI * 0.5, 0, 0, Link_color);
        makeLink(this._scene, Link_array[63], -22.60, 21.60, 0.50, 3.00, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[64], -15.65, 21.60, 0.50, 10.90, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[65], -5.72, 21.60, 0.50, 8.95, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[66], 4.25, 21.60, 0.50, 11.00, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[67], 13.62, 21.60, 0.50, 7.75, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[68], 20.25, 21.60, 0.50, 5.50, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[69], 26.25, 21.60, 0.50, 6.50, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[70], -1.25, 21.60, 2.60, 4.20, Math.PI * 0.5, 0, 0, Link_color);
        makeLink(this._scene, Link_array[71], -1.25, 21.60, 6.60, 3.80, Math.PI * 0.5, 0, 0, Link_color);
        makeLink(this._scene, Link_array[72], 17.50, 21.60, 2.55, 4.10, Math.PI * 0.5, 0, 0, Link_color);
        makeLink(this._scene, Link_array[73], 16.50, 21.60, 4.60, 2.00, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[74], 17.50, 21.60, 6.55, 3.90, Math.PI * 0.5, 0, 0, Link_color);
        makeLink(this._scene, Link_array[75], 11.00, 21.60, 8.50, 13.00, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);
        makeLink(this._scene, Link_array[76], 17.50, 21.60, 10.50, 4.00, Math.PI * 0.5, 0, 0, Link_color);
        makeLink(this._scene, Link_array[77], 15.50, 21.60, 12.50, 4.00, Math.PI * 0.5, 0, Math.PI * 0.5, Link_color);

        // 층 연결 부
        const Link_F_color = 0x008000; // 층 연결부의 링크 객체 색

        makeLink(this._scene, Link_array[80], -6.75, -10.25, 12.80, 25.11, 0, 0, Math.PI * -0.196, Link_F_color); // 13, 23 계단 연결
        makeLink(this._scene, Link_array[81], 7.00, 10.80, 12.60, 25.21, 0, 0, Math.PI * -0.172, Link_F_color); // 23, 33 계단 연결,      13, 33 연결은 이 둘을 동시에 표시하는 걸로

        makeLink(this._scene, Link_array[82], -17.70, -10.25, 4.60, 20.50, 0, 0, 0, Link_F_color); // 12, 22 계단 연결
        makeLink(this._scene, Link_array[83], -17.70, 10.80, 4.60, 21.60, 0, 0, 0, Link_F_color); // 22, 32 계단 연결,      12, 32 연결은 이 둘을 동시에 표시하는 걸로

        makeLink(this._scene, Link_array[84], -11.60, -10.25, 4.1, 20.50, 0, 0, 0, Link_F_color); // 11_1, 21_1 계단 연결
        makeLink(this._scene, Link_array[85], -11.60, 10.80, 4.1, 21.60, 0, 0, 0, Link_F_color); // 21_1, 31_1 계단 연결,      11_1, 31_1 연결은 이 둘을 동시에 표시하는 걸로

        makeLink(this._scene, Link_array[86], 10, -10.25, 4.1, 20.50, 0, 0, 0, Link_F_color); // 11_2, 21_2 계단 연결
        makeLink(this._scene, Link_array[87], 10, 10.80, 4.1, 21.60, 0, 0, 0, Link_F_color); // 21_2, 31_2 계단 연결,      11_2, 31_2 연결은 이 둘을 동시에 표시하는 걸로

        makeLink(this._scene, Link_array[88], 13.4, -9, 4.1, 16, 0, 0, 0, Link_F_color); // 10, 20 엘베 연결
        makeLink(this._scene, Link_array[89], 13.4, 13, 4.1, 16.5, 0, 0, 0, Link_F_color); // 20, 30 엘베 연결,      10, 30 연결은 이 둘을 동시에 표시하는 걸로






        // 링크 끝이다.
    }

    resize() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(width, height);
    }

    render(time) {
        this._renderer.render(this._scene, this._camera); // scene 을 카메라의 시점을 이용하여 렌더링 하라는 의미
        this.update(time);
        requestAnimationFrame(this.render.bind(this));
    }

    update(time) {
        time *= 0.001; // second unit
        // this._cube.rotation.x = time; // 자동회전을 막음
        // this._cube.rotation.y = time;
        // this._line.rotation.x = time;
        // this._line.rotation.y = time;
    }











}

window.onload = function () {
    new App();
}