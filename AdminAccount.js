
// Khai báo listAccount để lưu thông tin Account trong chương trình
var listAccount = [];
var listDepartment = []; // id name
var listPosition = []; // id name
var indexAccountUpdate = 0;

//khai bao cac bien luu page va size hien tai
var curentPage=1;
var curentsize=5;

//khai bao cac bien dung trong sort du lieu
var sortField="id";
var isAsc=true;
//isAsc =true;---sort theo chieu Asc
//isAsc=false ;-- sort theo chieu desc

//khai bao bien luu tru du lieu search
var v_search="Fullname2";

//  Load dữ liệu từ API để lấy danh sách Account và hiển thị ra giao diện
getListAccount();
//  Load dữ liệu từ API để lấy danh sách Department và hiển thị ra giao diện
getListDepartment();
//  Load dữ liệu từ API để lấy danh sách Position và hiển thị ra giao diện
getListPosition();

// disable cac truong id,createDate
$("#ID_ID").attr("disabled","disabled");
$("#Creata_Date_ID").attr("disabled","disabled");

// Khai báo hàm hiển thị danh sách Acocunt
function getListAccount(params) {
  // 1. Lấy được danh sách Account từ API

  var  v_url="";
  //thuc hien phan trang,sort du lieu
  if (isAsc) {
    var  v_url=`http://localhost:8080/api/v1/accounts?page=${curentPage}&size=${curentsize}&sort=${sortField},asc`;
    
  } else {
    var v_url=`http://localhost:8080/api/v1/accounts?page=${curentPage}&size=${curentsize}&sort=${sortField},desc`;
  }
//thuc hien search
//
v_url=v_url + "&search=" + v_search;

//http://localhost:8080/api/v1/accounts?page=2&size=10&search=Fullname1
  // jqajax
  $.ajax({
    type: "GET",
    url: v_url, 
    // data: "data",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("username_LocalStorge")+":"+localStorage.getItem("password_LocalStorge")));
    },

    success: function (response) {
      // response: Dữ liệu nhận được từ Backend API
      console.log("Response Account: ", response);
      // 2. Hiển thị danh sách Account này ra giao diện
      listAccount = response.content;

      // API
      
      $("#Result_TB").empty();

      for (let index = 0; index < listAccount.length; index++) {
        $("#Result_TB").append(
          `    <tr>
          <td>${listAccount[index].id}</td>
          <td>${listAccount[index].email}</td>
          <td>${listAccount[index].username}</td>
          <td>${listAccount[index].fullname}</td>
          <td>${listAccount[index].department}</td>
          <td>${listAccount[index].position}</td>
          <td>${listAccount[index].createDate}</td>
          <td>
            <button type="button" class="btn btn-warning" onclick="editAccount(${index})">Edit</button>
          </td>
          <td>
            <button type="button" class="btn btn-danger" onclick="deleteAccount(${index})">Delete</button>
          </td>
        </tr>
          `
        );
      }

      //hien thi cac nut phan trang
      //lay ra totalpages
      var totalPages=response.totalPages;
      // console.log("totalPages:",totalPages);
      //
      pagingTable(totalPages);
    },
  });
}

// // viet ham tao cac nut phan trang
 function pagingTable(totalPages_Param){
  $("#pagination_Id").empty();

   //hien thi nut previous
   if (curentPage>1) {
    $("#pagination_Id").append(`
   <li class="page-item"><a href="#" class="page-link" onclick="handlePrevious()">Previous</a></li>
     `);
   }
   

  //hien thi cac nut 1,2,3..
  for (let index = 1; index <= totalPages_Param; index++) {
    if (index=== curentPage) {
      //Active
      $("#pagination_Id").append(`
    <li class="active"><a href="#" onclick="handleChangePage(${index})">${index}</a></li>
    `);
    } else {
      $("#pagination_Id").append(`
    <li><a href="#" onclick="handleChangePage(${index})">${index}</a></li>
    `);
    
    }
    
  }

  //hien thi nut next
  if (curentPage<totalPages_Param) {
    $("#pagination_Id").append(`
   <li class="page-item"><a href="#" class="page-link" onclick="handleNext()">Next</a></li> 
  `);
  }
}

// viet ham xu ly khi thay doi trang
function handleChangePage(pageParam){
  // kiem tra xem trang co phai trang hien tai hk,neu la trang hien tai thi hk lam j
if (pageParam===curentPage) {
  return;
} else {
  curentPage=pageParam;
  getListAccount();
}
}
//viet ham xu ly chi nut previous
function handlePrevious(params){
  curentPage=curentPage - 1;
  getListAccount();
}
// viet ham xu ly cho nut next
function handleNext(params){
  curentPage=curentPage + 1;
  getListAccount();
}

// Khai báo hàm hiển thị danh sách Department

function getListDepartment(params) {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/departments",
    // data: "data",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("username_LocalStorge")+":"+localStorage.getItem("password_LocalStorge")));
    },

    success: function (response) {
      console.log("Response Department: ", response);
      listDepartment = response;
      // id: 11
      // name: "Bán hàng"
      for (let index = 0; index < listDepartment.length; index++) {
        $("#Department_ID").append(`<option value="${listDepartment[index].id}">${listDepartment[index].name}</option>`);
      }
    },
  });
}

// Khai báo hàm hiển thị danh sách Position

function getListPosition(params) {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/possitions",
    // data: "data",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("username_LocalStorge")+":"+localStorage.getItem("password_LocalStorge")));
    },

    success: function (response) {
      console.log("Response Position: ", response);
      listPosition = response;
      // id: 1
      // name: "Dev"
      for (let index = 0; index < listPosition.length; index++) {
        $("#Position_ID").append(`<option value="${listPosition[index].id}">${listPosition[index].name}</option>`);
      }
    },
  });
}

// Xử lý nút Reset
$("#reset_btn").click(function (e) {
  //
  $("#ID_ID").removeAttr("disabled");
  $("#Email_ID").removeAttr("disabled");
  $("#Username_ID").removeAttr("disabled");
  //
  $("#ID_ID").val("");
  $("#Email_ID").val("");
  $("#Username_ID").val("");
  $("#Fullname_ID").val("");
  $("#Department_ID").val("");
  $("#Position_ID").val("");
  $("#Cretate_Date_ID").val("");
});

// Xử lý cho nút thêm mới
$("#save_btn").click(function (e) {
  //   console.log("click!");
  // Lấy dữ liệu người dùng nhập vào
  var v_ID_ID = $("#ID_ID").val();
  var v_Email_ID = $("#Email_ID").val();
  var v_Username_ID = $("#Username_ID").val();
  var v_Fullname_ID = $("#Fullname_ID").val();
  var v_Department_ID = $("#Department_ID").val();
  var v_Position_ID = $("#Position_ID").val();
  var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

  // console.log("ID_ID: ", v_ID_ID);
  // console.log("v_Email_ID: ", v_Email_ID);
  // Tạo ra Account tương ứng từ dữ liệu người dùng nhập
  // var account = {
  //   Id: v_ID_ID,
  //   Email: v_Email_ID,
  //   Username: v_Username_ID,
  //   Fullname: v_Fullname_ID,
  //   Department: v_Department_ID,
  //   Position: v_Position_ID,
  //   Cretate_Date: v_Cretate_Date_ID,
  // };

  var account_new = {
    email: v_Email_ID,
    username: v_Username_ID,
    fullname: v_Fullname_ID,
    departmentId: v_Department_ID, //Bán hàng  ==> 11
    positionId: v_Position_ID, //Scrum_Master  ==> 4
  };

  // Call API để tạo mới Account
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/api/v1/accounts",
    data: JSON.stringify(account_new),
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("username_LocalStorge")+":"+localStorage.getItem("password_LocalStorge")));
    },

    contentType: "application/json; charset=UTF-8",
    success: function (response) {
      // response = "Create successfully!"
      getListAccount(); // Hiển thị lại danh Account
    },
  });
  // Lưu trữ
  // listAccount.push(account);

  // Kiểm tra:
  // console.log("listAccount: ", listAccount);

  // Hiển thị danh sách Account ở bảng kết quả
  // listAccount
  // jquery: append
  // js: innerHTML
  // template String: Cộng chuỗi trong Java, ``, ${}
  // showListAcount();
  //
});

// Hàm hiển thị danh sách Account ra bảng kết quả
// function showListAcount() {
//   $("#Result_TB").empty();

//   for (let index = 0; index < listAccount.length; index++) {
//     $("#Result_TB").append(
//       `    <tr>
//       <td>${listAccount[index].Id}</td>
//       <td>${listAccount[index].Email}</td>
//       <td>${listAccount[index].Username}</td>
//       <td>${listAccount[index].Fullname}</td>
//       <td>${listAccount[index].Department}</td>
//       <td>${listAccount[index].Position}</td>
//       <td>${listAccount[index].Cretate_Date}</td>
//       <td>
//         <button type="button" class="btn btn-warning" onclick="editAccount(${index})">Edit</button>
//       </td>
//       <td>
//         <button type="button" class="btn btn-danger" onclick="deleteAccount(${index})">Delete</button>
//       </td>
//     </tr>
//       `
//     );
//   }
// }

// Hàm xử lý Delete Account
// listAccount
function deleteAccount(indexDel) {
  var result = confirm("Bạn có chắc chắn muốn xóa Account này");
  if (result) {
    // listAccount.splice(indexDel, 1);
    // // Gọi lại hàm showListAcount(): Cập nhật lại bảng kết quả
    // showListAcount();
    //tim phan tu can xoa
    var v_id_delete=listAccount[indexDel].id;
    //thuc hien xoa

    $.ajax({
      type: "DELETE",
      url: "http://localhost:8080/api/v1/accounts" +v_id_delete,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("username_LocalStorge")+":"+localStorage.getItem("password_LocalStorge")));
      },
  
      // data: JSON.stringify(account_new),
      // contentType: "application/json; charset=UTF-8",
      success: function (response) {
        // response = "Create successfully!"
        getListAccount(); // Hiển thị lại danh sach Account
      },
    });
  } else {
    return;
  }
}

// Hàm xử lý khi nhấn nút edit Account
// listAccount
function editAccount(indexEdit) {
  //   {
  //     "id": 6,
  //     "email": "Email6@gmail.com",
  //     "username": "Username6",
  //     "fullname": "Fullname6",
  //     "department": "Tài chính",
  //     "position": "Scrum_Master",
  //     "createDate": "2023-04-04"
  // }
  // Tìm ra id của Department
  var v_DepId;
  for (let index = 0; index < listDepartment.length; index++) {
    if (listDepartment[index].name === listAccount[indexEdit].department) {
      v_DepId = listDepartment[index].id;
    }
  }
  //
  var v_PosId = 3;
  for (let index = 0; index < listPosition.length; index++) {
    if (listPosition[index].name === listAccount[indexEdit].position) {
      v_PosId = listPosition[index].id;
    }
  }
  // Tìm ra id của Position

  $("#ID_ID").attr("disabled", "disabled");
  $("#Email_ID").attr("disabled", "disabled");
  $("#Username_ID").attr("disabled", "disabled");
  //
  $("#ID_ID").val(listAccount[indexEdit].id);
  $("#Email_ID").val(listAccount[indexEdit].email);
  $("#Username_ID").val(listAccount[indexEdit].username);
  $("#Fullname_ID").val(listAccount[indexEdit].fullname);
  $("#Department_ID").val(v_DepId);
  $("#Position_ID").val(v_PosId);
  $("#Cretate_Date_ID").val(listAccount[indexEdit].createDate);

  //
  indexAccountUpdate = indexEdit;
}

// Hàm xử lý khi người dùng nhấn nút Update Account
$("#update_btn").click(function () {
  //
  var v_ID_ID = $("#ID_ID").val(); // Không cho người dùng sửa
  var v_Email_ID = $("#Email_ID").val();
  var v_Username_ID = $("#Username_ID").val();
  var v_Fullname_ID = $("#Fullname_ID").val();
  var v_Department_ID = $("#Department_ID").val();
  var v_Position_ID = $("#Position_ID").val();
  var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

  var account_Update = {
    fullname: v_Fullname_ID,
    departmentId: v_Department_ID,
    positionId: v_Position_ID,
  };

  // Call API để Update dữ liệu
  $.ajax({
    type: "PUT",
    url: "http://localhost:8080/api/v1/accounts/" + v_ID_ID, //http://localhost:8080/api/v1/accounts/14
    data: JSON.stringify(account_Update),
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("username_LocalStorge")+":"+localStorage.getItem("password_LocalStorge")));
    },

    contentType: "application/json; charset=UTF-8",
    success: function (response) {
      getListAccount();
    },
  });

  // Tìm được Account cần Update
  // listAccount[indexEdit]?
  // console.log("v_ID_ID: ", v_ID_ID);

  // var indexAccountUpdate = 0;
  // for (let index = 0; index < listAccount.length; index++) {
  //   if (listAccount[index].Id == v_ID_ID) {
  //     indexAccountUpdate = index;
  //     break;
  //   }
  // }
  // console.log("indexAccountUpdate: ", indexAccountUpdate);

  // Update thông tin Account
  // listAccount[indexAccountUpdate].Fullname = v_Fullname_ID;
  // listAccount[indexAccountUpdate].Department = v_Department_ID;
  // listAccount[indexAccountUpdate].Position = v_Position_ID;
  // listAccount[indexAccountUpdate].Cretate_Date = v_Cretate_Date_ID;

  // Hiển thị lại thông tin Account vừa cập nhật
  // showListAcount();
});

//ham xu ly viec sort du lieu
function handleSort(sortFieldParam){

  // console.log("sortFieldParam:",sortFieldParam);
  if (sortFieldParam===sortField) {
    isAsc=!isAsc;
  } else {
    sortField=sortFieldParam;
    isAsc=true;
    
  }

  // sortField=sortFieldParam;
  //goi lai ham getlist account de load du lieu moi
  getListAccount();
}
// ham xu ly saerch du lieu
function handleLogin(params){
  //lay du lieu Search
  var dataSearch=$("#Search_input").val();
 
  v_search =dataSearch;
  //hien thi du lieu
  getListAccount();
}

// ham xu ly Login du lieu
function handleLogin(params){
  //lay thong tin nguoi dung nhap
 var v_username_login = $("#Username_Login_id").val();
 var v_password_login = $("#Password_Login_id").val();
 console.log("v_username_login:"+v_username_login);
 console.log("v_password_login:"+v_password_login);

  //gui Requet login---redirect toi trang Account
  $.ajax({
    type: "GET",
    url:  "http://localhost:8080/api/v1/logins",
    // data: "data",
    // dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(v_username_login+":"+v_password_login));
    },
    success: function (response,status) {
      // console.log("response:"+response);
      // console.log("status:"+status);
      console.log("thanh cong");
      //luu thong tin dang nhap cua user vao localstorge
      localStorage.setItem("username_LocalStorge",v_username_login);
      localStorage.setItem("password_LocalStorge",v_password_login);
      window.open("AdminAccount.html")
    },
  });
}
