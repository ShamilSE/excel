import {TABLE_RESIZE} from "@/store/actionTypes";

export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}