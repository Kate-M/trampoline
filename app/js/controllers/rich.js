angular.module('rich', [])
    .controller('richCtrl', function ($scope, $http) {

        $scope.products = [
            {
                price: 198.80,
                size_cm: 183,
                size_ft: 6,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod1',
                isHot: true,
                warranty: 18,
                img: 'images/mod1.png',
                img_big: 'images/1.png',
                description: "Повышенная устойчивость за счет дополнительных ножек",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 100 кг",
                    "Гарантия 18 месяцев"
                ]
            },
            {
                price: 120.80,
                size_cm: 183,
                size_ft: 6,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod2',
                isHot: true,
                warranty: 12,
                img: 'images/mod2.png',
                img_big: 'images/2.png',
                description: "Оптимальное соотношение цены  и качества",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 80 кг",
                    "Гарантия 12 месяцев"
                ]
            },

            // 8 in

            {
                price: 228.20,
                size_cm: 252,
                size_ft: 8,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod1',
                isHot: true,
                warranty: 18,
                img: 'images/mod1.png',
                img_big: 'images/1.png',
                description: "Повышенная устойчивость за счет дополнительных ножек",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 100 кг",
                    "Гарантия 18 месяцев"
                ]
            },
            {
                price: 120.30,
                size_cm: 252,
                size_ft: 8,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod2',
                isHot: true,
                warranty: 12,
                img: 'images/mod2.png',
                img_big: 'images/2.png',
                description: "Оптимальное соотношение цены  и качества",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 80 кг",
                    "Гарантия 12 месяцев"
                ]
            },

            // 10 in

            {
                price: 199.70,
                size_cm: 312,
                size_ft: 10,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod1',
                isHot: true,
                warranty: 18,
                img: 'images/mod1.png',
                img_big: 'images/1.png',
                description: "Повышенная устойчивость за счет дополнительных ножек",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 100 кг",
                    "Гарантия 18 месяцев"
                ]
            },
            {
                price: 125.30,
                size_cm: 312,
                size_ft: 10,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod2',
                isHot: true,
                warranty: 12,
                img: 'images/mod2.png',
                img_big: 'images/2.png',
                description: "Оптимальное соотношение цены  и качества",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 80 кг",
                    "Гарантия 12 месяцев"
                ]
            },

            //12

            {
                price: 190.60,
                size_cm: 374,
                size_ft: 12,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod1',
                isHot: true,
                warranty: 18,
                img: 'images/mod1.png',
                img_big: 'images/1.png',
                description: "Повышенная устойчивость за счет дополнительных ножек",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 3 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 100 кг",
                    "Гарантия 18 месяцев"
                ]
            },
            {
                price: 120.50,
                size_cm: 374,
                size_ft: 12,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod2',
                isHot: true,
                warranty: 12,
                img: 'images/mod2.png',
                img_big: 'images/2.png',
                description: "Оптимальное соотношение цены  и качества",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 3 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 80 кг",
                    "Гарантия 12 месяцев"
                ]
            },

            //14

            {
                price: 398.20,
                size_cm: 435,
                size_ft: 14,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod1',
                isHot: true,
                warranty: 18,
                img: 'images/mod1.png',
                img_big: 'images/1.png',
                description: "Повышенная устойчивость за счет дополнительных ножек",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 3 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 100 кг",
                    "Гарантия 18 месяцев"
                ]
            },
            {
                price: 520.10,
                size_cm: 435,
                size_ft: 14,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod2',
                isHot: true,
                warranty: 12,
                img: 'images/mod2.png',
                img_big: 'images/2.png',
                description: "Оптимальное соотношение цены  и качества",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 3 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 80 кг",
                    "Гарантия 12 месяцев"
                ]
            },

            //15

            {
                price: 598.20,
                size_cm: 465,
                size_ft: 15,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod1',
                isHot: true,
                warranty: 18,
                img: 'images/mod1.png',
                img_big: 'images/1.png',
                description: "Повышенная устойчивость за счет дополнительных ножек",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 8 лет",
                    "Максимальная нагрузка до 190 кг",
                    "Гарантия 18 месяцев"
                ]
            },
            {
                price: 620.10,
                size_cm: 465,
                size_ft: 15,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod2',
                isHot: true,
                warranty: 12,
                img: 'images/mod2.png',
                img_big: 'images/2.png',
                description: "Оптимальное соотношение цены  и качества",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 280 кг",
                    "Гарантия 12 месяцев"
                ]
            },

            //16

            {
                price: 698.60,
                size_cm: 490,
                size_ft: 16,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod1',
                isHot: true,
                warranty: 18,
                img: 'images/mod1.png',
                img_big: 'images/1.png',
                description: "Повышенная устойчивость за счет дополнительных ножек",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 200 кг",
                    "Гарантия 18 месяцев"
                ]
            },
            {
                price: 720.50,
                size_cm: 490,
                size_ft: 16,
                model_title: 'Батут с защитной сеткой',
                model: 'Mod2',
                isHot: true,
                warranty: 12,
                img: 'images/mod2.png',
                img_big: 'images/2.png',
                description: "Оптимальное соотношение цены  и качества",
                info: [
                    "Обладает высокой устойчивостью",
                    "Подходит для 2 мальнеких детей до 7 лет",
                    "Максимальная нагрузка до 80 кг",
                    "Гарантия 12 месяцев"
                ]
            },
        ];

        // $scope.print_cm = function (value) {
        //     return Math.round(value * 30.48);
        // };


        $scope.selectedProduct = $scope.products[0];
        $scope.selectedSize = 6;

        $scope.print_byr = function (value) {
            return value * 10000 + ' pуб.';
        };

        $scope.print_byn = function (value) {
            return (Math.floor(value) + ' руб. ') + Math.round(((value - Math.floor(value)) * 100)) + ' коп.'
        }

        $scope.selectProduct = function (product) {
            $scope.selectedProduct = product;
        }

        $scope.selectSize = function (product) {
            $scope.selectedSize = product.size_ft;
            
            $scope.selectProduct(product);
        }

        $scope.isSelectedCss = function (product) {
            return $scope.selectedProduct == product ? 'active' : '';
        }

        $scope.isSelectedSizeCss = function (product) {
            return $scope.selectedSize == product.size_ft ? 'active_li' : '';
        }
    })
    .filter('bySize', function () {
        return function (x, size) {
            var c;
            var arr = [];

            for (i = 0; i < x.length; i++) {
                c = x[i];
                if (c.size_ft == size) {
                    arr.push(c);
                }
            }
            return arr;
        };
    })
    .filter('distinctSize', function () {
        return function (x) {
            var c;
            var arr = [];
            var size_array = [];

            for (i = 0; i < x.length; i++) {
                c = x[i];

                if (size_array.indexOf(c.size_ft) == -1) {
                    arr.push(c);
                    size_array.push(c.size_ft);
                }
            }
            return arr;
        }
    });