<template>
  <div>
    <fieldset>
      <legend>学生信息录入系统</legend>
      <div>
        <span>姓名：</span>
        <input type="text" placeholder="请输入姓名" v-model="newMessage.name">
      </div>
      <div>
        <span>年龄：</span>
        <input type="number" placeholder="0" v-model="newMessage.age">
      </div>
      <div>
        <span>性别：</span>
        <select name="" id="" v-model="newMessage.sex">
          <option value="男">男</option>
          <option value="女">女</option>
          <option value="未知">未知</option>
        </select>
      </div>
      <div>
        <span>手机：</span>
        <input type="number" placeholder="请输入手机号" v-model="newMessage.tel">
      </div>
      <div>
        <button @click="addMessage()">提交</button>
      </div>
    </fieldset>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>手机</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <!-- index 不写也可以删除，就是会报错 -->
        <tr v-for="(item,index) in message" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.age}}</td>
          <td>{{item.tel}}</td>
          <td>
            <button @click="delMessage(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: [],
        newMessage: {
          name: "",
          age: "",
          sex: "男",
          tel: ""
        }
      };
    },
    methods: {
      addMessage() {
        // 进行判断
        if (
          this.newMessage.name === "" ||
          this.newMessage.age <= 0 ||
          this.newMessage.phonenum === ""
        ) {
          if (this.newMessage.name === "") {
            alert("姓名不能为空");
            return;
          } else if (this.newMessage.age <= 0) {
            alert("年龄不能小于1");
            return;
          } else if (this.newMessage.tel === "") {
            alert("手机号不能为空");
            return;
          }
        }
        // 添加数据


        // 插入数据
        this.$axios.post('http://localhost:9090/insert', this.newMessage).then((res) => {
          if (res.data) {
            this.message.unshift(this.newMessage);
            // 清空对象
            this.newMessage = {
              name: "",
              age: "",
              sex: "男",
              tel: ""
            };
          } else {
            alert("添加失败")
          }
        }).catch(function (error) {
          console.log(error);
        });

      },
      // 删除数据就要接收对应的下标
      delMessage(index) {
        this.message.splice(index, 1);
      }
    },
    created() {
      this.$axios('http://localhost:9090/search').then((res) => {
        console.log(res);
        this.message = res.data;
      })
    },
  };

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  fieldset,
  table {
    width: 800px;
    margin: 0 auto;
    margin-top: 100px;
  }

  fieldset,
  div {
    padding: 20px 100px;
    box-sizing: border-box;
  }

  table {
    border: 1px solid #000;
    text-align: center;
  }

  table thead {
    background-color: #f0f0f0;
  }

  table tr {
    line-height: 30px;
  }

</style>
