<template>
    <div class="app-container">
        <el-button type="text" @click="dialogFormVisible = true">New</el-button>

        <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
            <el-table-column align="center" label='ID' width="95">
                <template scope="scope">
                    {{scope.$index}}
                </template>
            </el-table-column>
            <el-table-column label="Title">
                <template scope="scope">
                    {{scope.row.title}}
                </template>
            </el-table-column>
            <el-table-column label="Author" width="110" align="center">
                <template scope="scope">
                    <span>{{scope.row.author}}</span>
                </template>
            </el-table-column>
            <el-table-column label="Pageviews" width="110" align="center">
                <template scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="Display_time" width="200">
                <template scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{scope.row.display_time}}</span>
                    <el-button type="text" @click="">delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog close-on-click-modal="true" modal="true"  title="Merchant" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="Name" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Address" :label-width="formLabelWidth">
                    <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Charge" :label-width="formLabelWidth">
                    <el-input v-model="form.charge" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Phone" :label-width="formLabelWidth">
                    <el-input v-model="form.phoneNumber" auto-complete="off"></el-input>
                </el-form-item>
                <!--<el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="toAddMerchant">Submit</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
    import { getMerchants } from '@/api/merchant';

    export default {
        data() {
            return {
                list: null,
                //listLoading: true
                dialogFormVisible: false,
                form: {
                    name: '',
                    address: '',
                    charge: '',
                    phoneNumber: '',
                    //delivery: false,
                    //type: [],
                    //resource: '',
                    //desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        created() {
            //this.fetchData();
        },
        methods: {
            fetchData() {
                //this.listLoading = true;
                //getMerchants(this.listQuery).then(response => {
                //    this.list = response.data.items;
                //    this.listLoading = false;
                //})
            },
            toAddMerchant() {
                alert('add')
            }
        }
    };
</script>
