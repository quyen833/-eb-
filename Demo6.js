// ham ghi log
console.log("quyen");
console.log("vti");

//khai bao bien
var name="quyen";
var age=25;
var salary=20000;
var gender="women";

console.log("ten cua toi la :",name);
console.log("tuoi cua toi la;",age);
console.log("luong cua toi la;",salary);
console.log("gioi tinh cua toi la;",gender);

// ham hiem tra kieu du lieu
//typeof
console.log("kieu du lieu cua bien name:",typeof name);
console.log("kieu du lieu cua bien age:",typeof age);
console.log("kieu du lieu cua bien salary:",typeof salary);
console.log("kieu du lieu cua bien gender:",typeof gender);


//tu dong chuyen doi kieu du lieu
var numberA=100;// number
var numberB="10";//string--number

var numberC=numberA * numberB;//100*10
console.log("numberC:",numberC);
var numberD=numberA+numberB;//-=10010
console.log("numberD:",numberD);

//ham chuyen doi sang kieu so:pareint,parsefloat
var sunAB=numberA+parseInt(numberB);
console.log("sunAB:",sunAB);

//ham chuyen doi sang kieu chuoi tostring
var numberE=numberA.toString();
console.log("kieu du lieu cua bien numberE:",typeof numberE);

//ham xu ly chuoi
var string1="quyen";
var string2="vti";

// ham noi chuoi
var string3 = string1.concat(" ", string2); //DaoNq Vti
console.log("string3: ", string3);
// Hàm UpperCase, LowerCase
console.log("UpperCase: ", string3.toUpperCase());
console.log("LowerCase: ", string3.toLocaleLowerCase());

console.log("Phần tử ở vị trí thứ 2: ", string3.charAt(1));

console.log("-----------------Hàm Function-----------------------");
// Function
var number1 = 100;
var number2 = 50;
var sumresult = number1 + number2;
console.log("sumResult: ", sumresult);

// Khai báo 1 hàm trong JS
function sum(number1Param, number2Param) {
  var sum = number1Param + number2Param;

  return sum;
}

var resutlSumNum1Num2 = sum(number1, number2);
console.log("resutlSumNum1Num2: ", resutlSumNum1Num2);

// Khai báo 1 hàm trong JS
function sum1(number1Param, number2Param) {
  var sum = number1Param + number2Param;
  console.log("Kết quả phép cộng của bạn là: ", sum);
}

sum1(number1, number2);

console.log("-----------------Kiểu dữ liệu object-----------------------");
var student1 = {
  name: "daonq1",
  age: 20,
  salary: 1500,
  gender: false,
};

console.log("student1: ", student1);
console.log("Tên của bạn student1: ", student1.name);

var student2 = {
  name: "daonq2",
  age: 22,
  salary: 2500,
  gender: true,
  //   a: "",
  //   b: "",
};

console.log("student2: ", student2);
console.log("Tên của bạn student2: ", student2.name);

student2.name = "daonq2_update";
console.log("Tên của bạn student2: ", student2.name);

var student3 = {
  name: "daonq3",
  age: 25,
  salary: 4500,
  gender: true,
  goToVTI: function () {
    //
    console.log("Go to VTI to Study!!!");
  },
  showInfo: function () {
    console.log("Tên của tôi là: ", this.name);
    console.log("Tuổi của tôi là: ", this.age);
    console.log("Lương của tôi là: ", this.salary);
    console.log("Giới tính của tôi là: ", this.gender);
  },
};

student3.goToVTI();
student3.showInfo();

console.log("-----------------Kiểu dữ liệu mở rộng Wrapper Class-----------------------");
// Date
var date1 = new Date("2023-03-22");
var date2 = new Date("2023-03");
var date3 = new Date(2023, 03, 22);

console.log("date1: ", date1);
console.log("date2: ", date2);
console.log("date3: ", date3);

// Number Wrapper Class
var num_1 = new Number(1);
var num_2 = new Number(10.5);
console.log("num_1: ", num_1);
console.log("num_2: ", num_2);

console.log("giá trị num_1: ", num_1.valueOf());
console.log("giá trị num_2: ", num_2.valueOf());

console.log("-----------------Kiểu dữ liệu mảng-----------------------");
// Array
var nameRailway63 = [];
// nameRailway63[0] = "Chinh";
// nameRailway63[1] = "Hoàng";
// nameRailway63[2] = "Quyên";
// nameRailway63[3] = "Vy";

// nameRailway63 = ["Chinh", "Hoàng", "Quyên", "Vy"];

// push
nameRailway63.push("Chinh");
nameRailway63.push("Hoàng");
nameRailway63.push("Quyên");
nameRailway63.push("Vy");
nameRailway63.push("Phong");
nameRailway63.push("Thái");
nameRailway63.push("Trường");
console.log("Số lượng phần tử trong mảng", nameRailway63.length);
console.log("nameRailway63_0: ", nameRailway63[0]);
console.log("nameRailway63_1: ", nameRailway63[1]);
console.log("nameRailway63_2: ", nameRailway63[2]);
console.log("nameRailway63_3: ", nameRailway63[3]);

// xóa trong phần trong mảng

nameRailway63.pop();
// nameRailway63.pop();
console.log("Xóa phần tử");
console.log("Số lượng phần tử trong mảng", nameRailway63.length);
console.log("nameRailway63_0: ", nameRailway63[0]);
console.log("nameRailway63_1: ", nameRailway63[1]);
console.log("nameRailway63_2: ", nameRailway63[2]);
console.log("nameRailway63_3: ", nameRailway63[3]);

nameRailway63.splice(1, 1);
console.log("Số lượng phần tử trong mảng", nameRailway63.length);

console.log("-----------------Flow Control-----------------------");

console.log("-----if else-----");
var a = 2;
if (a == 1) {
  console.log("Đây là số 1");
} else if (a == 2) {
  console.log("Đây là số 2");
} else if (a == 3) {
  console.log("Đây là số 3");
} else {
  log("Đây là 1 số nào đấy");
}

console.log("-----Switch Case-----");
var b = 1;
switch (b) {
  case 1:
    console.log("Đây là số 1");
    break;
  case 2:
    console.log("Đây là số 2");
    break;
  case 3:
    console.log("Đây là số 3");
    break;
  default:
    log("Đây là 1 số nào đấy");
    break;
}

// ++ --
// i++ <==> i = i+1
// ++i

console.log("-----------------Vòng lặp-----------------------");
console.log("-----for-----");
// nameRailway63
for (let index = 0; index < nameRailway63.length; index++) {
  console.log(nameRailway63[index]);
}

console.log("-----for each-----");
nameRailway63.forEach((name, index) => {
  if (index == 2) {
    console.log(name);
  }
  //   console.log(name);
});

// while (condition) {

// }

// do {

// } while (condition);

// break continue

console.log("-----------------Scope-----------------------");
var x = 20; // Global Scope
console.log("x: ", x);

function abc() {
  console.log("x trong function a: ", x);
  var y = 10;
  console.log("y:", y); // Local Scope
}

// console.log("sử dụng y ngoài function abc:", y);
abc();

// ham su lay KHI click chuot vao
function handleClickButton1() {
 console.log("ban vua click vao nut Button1");
}

function handleClickButton2() {
  console.log("ban vua click vao nut Button2");
}

function handleMouseOverH1() {
  console.log("ban vua di chuyen chuot qua the h1");
}

//dom 
// xu ly su kien login
function han