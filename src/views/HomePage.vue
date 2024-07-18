<template>
  <p>{{ $t('message.hello') }}</p>
  <button @click="translate">Change</button>

  <button @click="$router.back()">Back</button>

  <div>
    <table>
      <thead>
        <th>id</th>
        <th>title</th>
        <th>category</th>
      </thead>
      <tbody>
        <tr v-for="info of infos" :key="info.id">
          <td>{{ info.id }}</td>
          <td>{{ info.title }}</td>
          <td>{{ info.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      infos: [],
    };
  },
  mounted() {
    axios.get("https://dummyjson.com/products").then((res) => {
      this.infos = res.data.products;
    });
  },
  methods: {
    translate(){
            
    }
  }
};
</script>
