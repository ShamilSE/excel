import {storage} from "@/components/table/helpers";

const defaultState = {
    colState: {},
    rowState: {}
}

export const initialState = storage('excel-table') ? storage('excel-table') : defaultState