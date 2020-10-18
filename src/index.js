import './scss/index.scss'
import {Header} from "@/components/header/Header";
import {Toolbar} from "@/components/toolbar/Toolbar";
import {Formula} from "@/components/formula/Formula";
import {Table} from "@/components/table/Table";
import {Excel} from "@/components/excel/Excel";
import {create_store} from "@/store/create_store";
import {root_reducer} from "@/store/root_reducer";
import {storage} from "@/components/table/helpers";

const store = create_store(root_reducer, storage('excel-table'))

store.subscribe( state => {
    console.log(state)
    storage('excel-table', state)
})

export const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

excel.render()