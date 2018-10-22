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
        <input type="number" placeholder="请输入手机号" v-model="newMessage.phonenum">
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
          <td>{{item.phonenum}}</td>
          <td>
            <button @click="delMessage(index)">删除</button>
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
      message: [
        {
          name: "hjh",
          age: 18,
          sex: "男",
          phonenum: 18798465132
        },
        {
          name: "hjh1",
          age: 138,
          sex: "男",
          phonenum: 18798465132
        },
        {
          name: "wel",
          age: 18,
          sex: "女",
          phonenum: 18798465132
        },
        {
          name: "hjh3",
          age: 148,
          sex: "男",
          phonenum: 18798465132
        }
      ],
      newMessage: {
        name: "",
        age: "",
        sex: "男",
        phonenum: ""
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
        } else if (this.newMessage.phonenum === "") {
          alert("手机号不能为空");
          return;
        }
      }
      // 添加数据
      this.message.unshift(this.newMessage);
      // 清空对象
      this.newMessage = {
        name: "",
        age: "",
        sex: "男",
        phonenum: ""
      };
    },
    // 删除数据就要接收对应的下标
    delMessage(index) {
      this.message.splice(index, 1);
    }
  }
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


