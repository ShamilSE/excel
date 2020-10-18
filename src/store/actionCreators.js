import {COLUMN_RESIZE} from "@/store/actionTypes";

export function tableResize(data) {
    return {
        type: COLUMN_RESIZE,
        data
    }
}