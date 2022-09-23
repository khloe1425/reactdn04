// Store: chứa các giá trị cần đổi (state)
import { combineReducers, createStore } from "redux";

//state ở RCC là đối tượng
// state = {
    // giohang:[]
// }

// reducer là state lưu trên store redux
//rootReducer: chứa tất các state

//Khai báo giá trị mặc định cho state
const giohang = [
    {maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./img/phone/vsphone.jpg",soLuong:1}
]
const rootReducer = combineReducers({
    //khai báo và lưu trữ các state của ứng dụng
    //reducer là 1 hàm trả về state
    //default parameter
    gioHangReducer: (state = giohang,action) => { 
        console.log(action);
        
        return state;
     }
})

export const store = createStore(rootReducer);