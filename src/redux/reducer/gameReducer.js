// rxr
//giá trị mặc đinh của state
// game: mangXucXac, banChon, tongBan, soBanThang
const initialState = {
    mangXucXac:[
        {hinh:"./img/game/1.png",diem:1},
        {hinh:"./img/game/2.png",diem:2},
        {hinh:"./img/game/3.png",diem:3},
    ],
    banChon:true,
    tongBan: 0,
    soBanThang:0
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}
