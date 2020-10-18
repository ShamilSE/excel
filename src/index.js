import './scss/index.scss'
import {Header} from "@/components/header/Header";
import {Toolbar} from "@/components/toolbar/Toolbar";
import {Formula} from "@/components/formula/Formula";
import {Table} from "@/components/table/Table";
import {Excel} from "@/components/excel/Excel";
import {createStore} from "@/store/createStore";
import {rootReducer} from "@/store/rootReducer";
import {storage} from "@/components/table/helpers";
import {initialState} from "@/store/initialState";

const store = createStore(rootReducer, initialState)

store.subscribe( state => {
    storage('excel-table', state)
})

export const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

excel.render()