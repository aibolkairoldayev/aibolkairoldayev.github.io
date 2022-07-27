new Vue({
  el: '#app',
  data: {
    live: true,
    search: false,
    searchText: '',
    mobile: false,
    height: null,
    heading: false,
    tab1: true,
    tab2: false,
    newtab1: true,
    newtab2: false,
    newtab3: false
  },
  methods: {
    timer() {
      setInterval(() => {
        this.live = !this.live
      }, 1000);
    },
    clear() {
      this.searchText = ''
    },
    clickSearch() {
      this.search = !this.search
      this.clear()
    },
    clickMobile() {
      this.mobile = !this.mobile
      this.heading = false
    },
    matchHeight() {
      if (this.mobile == true) {
        this.height = this.$refs.infoBox.clientHeight + 'px'
      } else {
        this.height = 0
      }
    },
    toggleHeading() {
      this.heading = !this.heading
    },
    toggleTab1() {
      this.tab1 = true
      this.tab2 = false
    },
    toggleTab2() {
      this.tab2 = true
      this.tab1 = false
    },
    toggleTabNew1() {
      this.newtab1 = true
      this.newtab2 = false
      this.newtab3 = false
    },
    toggleTabNew2() {
      this.newtab2 = true
      this.newtab1 = false
      this.newtab3 = false
    },
    toggleTabNew3() {
      this.newtab3 = true
      this.newtab2 = false
      this.newtab1 = false
    },
  },
  watch: {
    mobile() {
      this.matchHeight()
    }
  },
  mounted() {
    this.timer() 
    this.matchHeight()
  }
})


$('.my-carousel').slick({
  slidesToShow: 3,
	arrows: false,
	variableWidth:true,
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

var textLeng = document.getElementById('textLeng-1').innerHTML
var shortTextLeng = textLeng.substr(0, 190)
document.getElementById("textLeng-1").textContent = shortTextLeng + '...';

var textLeng = document.getElementById('textLeng-2').innerHTML
var shortTextLeng = textLeng.substr(0, 190)
document.getElementById("textLeng-2").textContent = shortTextLeng + '...';


var textLeng = document.getElementById('eventsText-1').innerHTML
var shortTextLeng = textLeng.substr(0, 146)
document.getElementById("eventsText-1").textContent = shortTextLeng + '...';

var textLeng = document.getElementById('eventsText-2').innerHTML
var shortTextLeng = textLeng.substr(0, 146)
document.getElementById("eventsText-2").textContent = shortTextLeng + '...';

var textLeng = document.getElementById('eventsText-3').innerHTML
var shortTextLeng = textLeng.substr(0, 146)
document.getElementById("eventsText-3").textContent = shortTextLeng + '...';


$(document).ready(function(){
	$('.input-group.date').datetimepicker({
		locale: 'es',
	});
});