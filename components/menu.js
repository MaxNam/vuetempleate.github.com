(function(Vue) {

  // dropdown
  Vue.component('max-dropdown', {
    template: `<div class="dropdown" :class="isOpen ? 'show' : ''">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="dropdown" aria-haspopup="true" :aria-expanded="isOpen" @click.prevent="toggleMenu">{{title}}</a>
                <div class="dropdown-menu" :class="isOpen ? 'show' : ''" aria-labelledby="dropdown">
                  <a class="dropdown-item" v-for="menu in menus" :href="menu.link">{{menu.name}}</a>
                </div>
              </div>`,
    props: {
      menus: Array,
      title: String
    },
    data () {
      return {
        isOpen: false
      }
    },
    mounted () {
    },
    methods: {
      toggleMenu () {
       this.isOpen = true;
      }
    },
    watch: {
      isOpen () {
        if(this.isOpen) {
          let self = this;
          window.addEventListener('click', function onClose(e) {
            console.log('close')
            window.removeEventListener('click', onClose, false);
            self.isOpen = false;
          }, false);
        }
      }
    }
  });

  // menu
  Vue.component('max-sub-menu', {
    template: `<div class="nav-scroller bg-white box-shadow">
                <nav class="nav nav-underline">
                  <a class="nav-link" :idx="idx" :class="menu.selected ? 'active' : ''" :href="menu.link" v-for="(menu, idx) in menus" @click.prevent="onActive">
                    {{menu.name}}
                    <span v-show="false" class="badge badge-pill bg-light align-text-bottom">27</span>
                  </a>
                </nav>
              </div>`,
    props: {
      menus: Array
    },
    data () {
      return {
      }
    },
    methods: {
      onActive (e) {
        let idx = parseInt(e.currentTarget.getAttribute('idx'));
        this.$emit('select-sub-menu', idx);
      }

    },
    computed: {

    }
  });

  // menu
  Vue.component('max-menu', {
    template: `<div>
                <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                  <a class="navbar-brand mr-auto mr-lg-0" href="#" style="padding:0 20px">{{title}}</a>
                  <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item" :class="menu.selected ? 'active' : ''" v-for="(menu, idx) in menus">
                        <max-dropdown
                           v-if="menu.dropdownMenus"
                           :title="menu.name"
                           :menus="menu.dropdownMenus"
                        ></max-dropdown>
                        <a v-else class="nav-link" :idx="idx" :href="menu.link" @click.prevent="onActive">{{menu.name}} <span v-if="menu.selected" class="sr-only">(current)</span></a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <max-sub-menu
                  :menus="subMenus"
                  @select-sub-menu="selectSubMenu"
                ></max-sub-menu>
              </div>`,
    props: {
      title: String,
      menus: Array
    },
    data () {
      return {
        subMenus: []
      }
    },
    created () {
      this.subMenus = this.menus.filter(menu => menu.selected)[0].subMenus
    },
    methods: {
      onActive (e) {
        let idx = parseInt(e.currentTarget.getAttribute('idx'));
        this.$emit('select-menu', idx);
      },
      selectSubMenu (idx) {
        this.subMenus = this.subMenus.map((menu, index) => {
          menu.selected = false;
          if(idx === index) {
            menu.selected = true;
          }
          return menu;
        })
      }

    },
    computed: {

    },
    watch: {
      menus () {
        this.subMenus = this.menus.filter(menu => menu.selected)[0].subMenus
      }
    }
  });

})(Vue)