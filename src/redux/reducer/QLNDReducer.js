// rxr
const initialState = {
    mangND:[
        {taiKhoan:"user1", hoTen:"Nguyễn Thị Khách hàng", matKhau:"123456",sdt:"09143443", email:"test@gmail.com",maLoaiND:"khachHang"},
        {taiKhoan:"user2", hoTen:"Nguyễn Thị Khách hàng 2", matKhau:"123456",sdt:"09143443", email:"test@gmail.com",maLoaiND:"khachHang"},
    ],
    nguoiDung:{
      values: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        sdt: "",
        email: "",
        maLoaiND: "khachHang"
      },
      errors: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        sdt: "",
        email: "",
        maLoaiND: ""
      }
    }
}

export const QLNDReducer =  (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
        console.log(action.nguoiDung);
      state.nguoiDung = action.nguoiDung;

    return {...state}

    case "THEM_ND":
      console.log(action.nguoiDung);

        // state.mangND.push(action.nguoiDung);
        // copy mảng cũ sang mảng mới và thêm phần tử cho mảng
        // => lưu mảng mới vào lại biến mảng cũ => đổi địa chỉ ô nhớ
        state.mangND = [...state.mangND,action.nguoiDung]

    return {...state}

    case "XOA_ND":
        console.log(action.taiKhoanXoa);

        //lọc mảng chỉ giữ lại cac tài khoản không xóa
        // => lưu mảng mới đã lọc vào biến mảng ban đầu // đổi đia chỉ

        state.mangND =  state.mangND.filter((nd) => { 
            return nd.taiKhoan !== action.taiKhoanXoa
         })

      return {...state}
    case "XEM_CT":
         console.log(action.ndChiTiet);
          state.nguoiDungChiTiet = action.ndChiTiet;
      return {...state}
  default:
    return state
  }
}
