import './scss/index.scss'
import {Header} from "@/components/header/Header";
import {Toolbar} from "@/components/toolbar/Toolbar";
import {Formula} from "@/components/formula/Formula";
import {Table} from "@/components/table/Table";
import {Excel} from "@/components/excel/Excel";
import {create_store} from "@/store/createStore";
import {rootReducer} from "@/store/rootReducer";

const store = create_store(rootReducer)

export const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

excel.render()