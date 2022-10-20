
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";

// 액션 타입을 정해줍니다.
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";
const LOADED = "bucket/LOADED";

// 초기 상태값을 만들어줍니다.
const initialState = {
    is_loaded: false,
    list: [
    { text: "페이지 준비중입니다.", completed: false },
    { text: "아직 입력하지 마세요.", completed: false },
    { text: "곧 완료됩니다.", completed: false },
    ],
};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!
export function loadBucket(bucket_list) {
    return { type: LOAD, bucket_list };
}
export function createBucket(bucket) {
    console.log("액션을 생성할거야!");
    return { type: CREATE, bucket: bucket };
}

export function updateBucket(bucket_index) {
    return { type: UPDATE, bucket_index };
}

export function deleteBucket(bucket_index) {
    console.log("지울 버킷 인덱스", bucket_index);
    return { type: DELETE, bucket_index };
}

export function isLoaded(loaded){
    return {type: LOADED, loaded};
}

// middlewares
export const loadBucketFB = () => {
    return async function (dispatch) {
        const bucket_data = await getDocs(collection(db, "bucket"));
        console.log(bucket_data);

        let bucket_list = [];

        bucket_data.forEach((b) => {
            console.log(b.data());
            bucket_list.push({ id: b.id, ...b.data() });
        });

        console.log(bucket_list);

        dispatch(loadBucket(bucket_list));
    };
};

export const addBucketFB = (bucket) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db, "bucket"), bucket);
        // const _bucket = await getDoc(docRef);
        const bucket_data = { id: docRef.id, ...bucket };

        dispatch(createBucket(bucket_data));

    };
};


export const updateBucketFB = (bucket_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "bucket", bucket_id);
        await updateDoc(docRef, { completed: true });

        console.log(getState().bucket);
        const _bucket_list = getState().bucket.list;
        const bucket_index = _bucket_list.findIndex((b) => {
            return b.id === bucket_id;
        })
        dispatch(updateBucket(bucket_index));

    };
};

export const deleteBucketFB = (bucket_id) => {
    return async function (dispatch, getState) {
        if (!bucket_id) {
            window.alert("아이디가 없네요!");
            return;
        }
        const docRef = doc(db, "bucket", bucket_id);
        await deleteDoc(docRef);

        const _bucket_list = getState().bucket.list;
        const bucket_index = _bucket_list.findIndex((b) => {
            return b.id === bucket_id;
        });

        dispatch(deleteBucket(bucket_index));
    }
}


// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD": {
            return { list: action.bucket_list, is_loaded: true, };
        }
        // 추가하기 부분
        case "bucket/CREATE": {
            console.log("이제 값을 바꿀거야!");
            const new_bucket_list = [...state.list, action.bucket];
            return { ...state, list: new_bucket_list, is_loaded: true };
        }

        // 완료하기 부분
        case "bucket/UPDATE": {
            const new_bucket_list = state.list.map((l, idx) => {
                if (parseInt(action.bucket_index) === idx) {
                    return { ...l, completed: true };
                } else {
                    return l;
                }
            })
            console.log({ list: new_bucket_list });
            return { ...state,list: new_bucket_list};

        }
         // 삭제하기 부분
        case "bucket/DELETE": {
            const new_bucket_list = state.list.filter((l, idx) => {
                return parseInt(action.bucket_index) !== idx;
            });

            return { ...state, list: new_bucket_list };
        }

        case "bucket/LOADED" : {
            return {...state, is_loaded: action.loaded};
        }
        default:
            return state;
    }
}