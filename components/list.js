(function(Vue) {

  // list
  Vue.component('max-image-list', {
    template: `<div class="list-group">
                <a href="#" class="list-group-item list-group-item-action" v-for="data in list">
                  <img :src="data.url" style="width:123px; height:123px; float:left;">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6" v-for="key in Object.keys(data.info)">
                        <strong>{{key}}:</strong> {{data.info[key]}}
                      </div>
                    </div>
                  </div>
                </a>
              </div>`,
    props: {
      list: Array
    }
  });

  // list
  Vue.component('max-list', {
    template: `<div class="list-group">
                <a href="#" class="list-group-item list-group-item-action" v-for="data in list">{{data}}</a>
              </div>`,
    props: {
      list: Array
    }
  });


})(Vue)