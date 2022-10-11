<template>
<div class="v-table">
<div class="v-table__header">
    <p>Name</p>
    <p>Points earned</p>
    <p>Points spent</p>
    <p>Registration date</p>
</div>
<div class="table__body">
   <v-table-row
   v-for="row in users_data"
   :key="row.id"
   :row_data="row"
   />
</div>
<div class="v-table__pagination">
    <div class="page"
    v-for="page in paginatedUsers"
    :key="page"
    :class="{'page_selected': page ===pageNumber}"
    @click="pageClick(page)"
    >{{page}}</div>
</div>
</div>
</template>

<script>
import vTableRow from './v-table-row'
export default {
    name: "v-table",
    components: {
vTableRow
    },
    props: {
        users_data: {
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            usersPerPage: 10,
            pageNumber: 1
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.users_data.length / 10);
        },
        paginatedUsers() {
            let from = (this.pageNumber - 1) * this.usersPerPages;
            let to = from + this.usersPerPage;
            return this.users_data.slice(from, to);
        }
    },
    methods:{
        pageClick(page){
            this.pageNumber = page;
        }
    }
}
</script>
<style>
.v-table{
    max-width: 900px;
    margin: 0 auto;
}


.v-table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px rgb(22, 20, 20);

}

.v-table__header{
    flex-basis: 25%;
    text-align: left;
}

.v-table__pagination{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.page{
    padding: 8px;
    margin-right: 10px;
    border: solid 1px #e7e7e7;
}
.page:hover{
    background: #bb7a7a;
    cursor: pointer;
    color: aqua;
}

.page_selected{
    background: #bb7a7a;
    cursor: pointer;
    color: aqua;
}

</style>>
