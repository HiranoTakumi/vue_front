<template>
  <v-app>
    <v-card width="800px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">CORS Check</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-select
            :items="items"
            label="Relying Party ID"
            v-model="csID"
          ></v-select>
          <v-card-actions>
            <v-btn class="info" @click="submit">START</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card width="800px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Result</h1>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Status Code"
          v-model="code"
          outlined
          readonly
        />
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  // 
  import axios from 'axios'

  export default {
    name: 'CorsCheck',

    data(){
      return {
        csID : '',
        items: ['cs01', 'cs02', 'cs03'],
        code: '200',
      }
    },
    methods: {
      submit() {
        // console.log(this.name, this.password)
        axios.get(
          `http://localhost:3000/cors/check`,
          { headers: {
            "X-CS-ID": this.csID,
          }}
        ).then(
          res => {
              this.code = res.status
              console.log(res.status)
          }
        )
      }
    },
  };
</script>
