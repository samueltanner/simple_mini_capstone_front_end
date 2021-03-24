/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

new Vue({
  el: '#app',
  data: {
    products: [],
  },
  
  mounted() {
    axios.get('http://localhost:3000/api/products').then(response => {
      this.products = response.data;
      console.log(response.data);
    });
  },

});

new Vue({
  el: '#app2',
  data: {
    name: "",
    description: "",
    image_url: "",
    price: "",
    newProduct: {}
  },

  created() {
    var product = {name: "test", description: "test", image_url: "test",  price: "test"};
    axios.post('http://localhost:3000/api/products', product)
      .then(function (response) {
        console.log(response);
      });
  },  

  methods: {
    addProduct: function() {
      // var newProduct = {name: this.name, description: this.description, image_url: this.image_url,  price: this.price};

      // this.newProduct.push(newProduct);
      this.name.push( = "";)
      this.description = "";
      this.image_url = "";
      this.price = "";
    }
  }

  
});