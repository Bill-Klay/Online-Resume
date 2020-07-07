var vm = new Vue({
    el: '#app',
    data: {
      mycolor: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
      mycolor1: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
      mycolor2: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
      hover: false,
      hover1: false,
      button: "Show More",
      show: true,
    },
    computed: {
      computedColor: function () {
        return this.mycolor;
      },
      computedColor1: function () {
        return this.mycolor1;
      },
      computedColor2: function () {
        return this.mycolor2;
      }
    },
    mounted() {
    },
    methods: {
        changeColor: function (event) {
          this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        },
        changeColor1: function (event) {
          this.mycolor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        },
        changeColor2: function (event) {
          this.mycolor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        },
        changeAllColor: function (event) {
          this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
          this.mycolor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
          this.mycolor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        },
        extend: function() {
          vm.show = !vm.show;
          if(vm.button == "Show More") {
            vm.button = "Show Less";
          }
          else {
            vm.button = "Show More";
          }
        }
      }
});