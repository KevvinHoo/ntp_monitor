<template>
        <el-menu 
            default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <h3> {{ isCollapse ? '后台' : "时间同步监控平台" }} </h3>
            <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title"> {{ item.label }} </span>
            </el-menu-item>

            <!-- Sub Menu -->
            <!-- <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title"> {{ item.label }} </span>
                </template>
                <el-meun-item-group v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
                    <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
                </el-meun-item-group>
            </el-submenu> -->

            <!-- Back to Intro -->
            <!-- <el-menu-item @click="clickMenu('')"  :key="item.name" :index="item.name">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title"> {{ item.label }} </span>
            </el-menu-item> -->

        </el-menu>
</template>

<script>
    export default {
        data() {
        return {
            menuData:[
                {
                    path: "/Home",
                    name: "home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/Home",
                },
                {
                    path: "/Monitor",
                    name: "monitor",
                    label: "详细数据",
                    icon: "monitor",
                    url: "Monitor/Monitor",
                },
                {
                    path: "/Setting",
                    name: "setting",
                    label: "监控配置",
                    icon: "setting",
                    url: "Setting/Setting",
                }
            ]
        };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            clickMenu(item){
                console.log(item.path)
                if(this.$route.path !== item.path && !(this.$route.path === '/Home' && item.path === '/')){
                    this.$router.push(item.path)
                }
                // this.$router.push(item.path)
            }
        },
        computed:{
            noChildren() {
                return this.menuData.filter(item => !item.children)
            },
            hasChildren() {
                return this.menuData.filter(item => item.children)
            },
            isCollapse() {
                return this.$store.state.tab.isCollapse
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-menu {
        height:100vh;
        border-right: none;
        }
        h3 {
            color: #c22020;
            //font-family:Microsoft YaHei;
            text-align: center;
            line-height: 3;
            font-size: 20px;
            font-weight:500;
            font-family: 'kaiti';
    }
</style>