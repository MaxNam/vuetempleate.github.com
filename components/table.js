(function(Vue) {

  // table
  Vue.component('max-table', {
    template: `<table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" v-for="title in titles" :class="'text-' + title.align" :style="{width: title.width}">
                      <div v-if="title.type==='checkbox'" class="custom-control custom-checkbox" style="margin: -40px">
                        <input type="checkbox" class="custom-control-input">
                        <label class="custom-control-label"></label>
                      </div>
                      <span v-else>{{title.label}}</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(content, index) in contents" @click.prevent="onLink" :data-id="content[uniqId]" :style="uniqId ? trPointer : ''">
                    <td v-for="title in titles" :class="'text-' + title.align">
                      <div v-if="title.type==='checkbox'" class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" :id="content[title.name]" :value="content[title.name].id">
                        <label class="custom-control-label" :for="content[title.name]"></label>
                      </div>
                      <button v-else-if="title.type==='button'" type="button" class="btn btn-sm" :class="'btn-' + title.color" :data-id="content[title.id]" @click.prevent="onClick">
                        {{title.btnName}}
                      </button>
                      <span v-else>{{content[title.name]}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>`,
    props: {
      uniqId: [Number, String],
      titles: Array,
      contents: Array
    },
    methods: {
      onClick (e) {
        this.$emit('table-btn-click', e.currentTarget.dataset.id);
      },
      onLink (e) {
        if(e.target.nodeName !== 'BUTTON') {
          this.$emit('table-link-click',  e.currentTarget.dataset.id);
        }
      }
    },
    watch: {
      contents () {
        // this.localContents = this.setLocalContents();
      }
    },
    computed: {
      trPointer () {
        return {'cursor': 'pointer'}
      }
    }
  });


})(Vue)