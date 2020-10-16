import {COLUMN_RESIZE} from "@/store/action_types";

export function tableResize(data) {
    return {
        type: COLUMN_RESIZE,
        data
    }
}