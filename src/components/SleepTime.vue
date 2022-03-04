<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Sleep Time</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-clock-outline"
            label="sleepTime"
            v-model="request"
          />
          <v-text-field
            prepend-icon="mdi-clock"
            label="response"
            v-model="response"
          />
          <v-card-actions>
            <v-btn class="info" @click="submit">START</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  // 
  import axios from 'axios'

  export default {
    name: 'SleepTime',

    data(){
      return {
        request : '',
        response : '',
      }
    },
    methods: {
      submit() {
        // console.log(this.name, this.password)
        axios.get(
          `http://localhost:3000?second=${this.request}`
        ).then(
          res => {
              this.response = res.data.sleepTime
              console.log(res.data.sleepTime)
          }
        )
      }
    },
  };
</script>
