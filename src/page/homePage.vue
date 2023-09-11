<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="time-server">
                    <!-- <img src="../assets/time-server.jpg" alt=""> -->
                    <div class="ts-info">
                        <p class="ts-info-cn">时钟服务器</p>
                        <p class="ts-info-en">Time Server</p>
                    </div>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
</template>

<script>
    export default {
        data(){
            return {}
        }
    }
</script>

<style lang="less" scoped>
    .time-server {
        display: flex;
        background-image: url(../assets/img/time-server.jpg);
        height: auto;
        width: auto;
        position: fixed;
        background-size:auto;
        background-repeat: no-repeat;

        img {
            width: auto;
            height: auto;
            
        }
    }
</style>