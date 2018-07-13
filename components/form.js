(function(Vue) {

  // input
  // input
  Vue.component('max-input', {
    template: `<div ref="box" :class="getSize" class="mb-3">
                <label :for="getName" class="col-sm-12 col-form-label" v-show="isShowLabel">{{labelName}}</label>
                <div class="padding-0" class="col-sm-12">
                  <input :type="inputType" class="form-control" :class="isValidation ? (isValid ? 'is-valid' : 'is-invalid') : ''" :id="getName" @keyup="onValue" @change="onValue" :placeholder="placeholder" :disabled="disabled" :value="localValue" :required="isValidation">
                </div>
              </div>`,
    props: {
      labelName: String,
      inputType: String, // email, url, text(default)
      placeholder: String,
      disabled: Boolean,
      isValidation: Boolean,
      name: String,
      value: String
    },
    data () {
      return {
        size: 0,
        isValid: false,
        localValue: ''
      }
    },
    created () {
      this.localValue = this.value;
    },
    mounted () {
      if(this.$refs.box.parentNode.className === 'form-row') {
        this.size = 12 / this.$refs.box.parentNode.children.length;
      }
    },
    methods: {
      onValue (e) {
        let name = this.name;
        this.localValue = e.target.value;
        let value = this.localValue;
        if(this.isValidation) {
          this.isValid = this.onValidate(value);
          if(this.isValid) {
            this.$emit('get-input-value', name ? {name, value} : value);
          } else {
            this.$emit('get-input-value', name ? {name, value: ''} : '');
          }
        } else {
          this.$emit('get-input-value', name ? {name, value} : value);
        }
      },
      onValidate (value) {
        let result = false
        switch (this.inputType) {
          case 'email':
            result = value.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i) != null;
            break
          case 'url':
            result = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) != null;
            break
          default:
            result = !!value;
        }
        return result;
      }
    },
    computed: {
      isShowLabel () {
        return !!this.labelName;
      },
      getSize () {
        return 'col-sm-' + this.size;
      },
      getName () {
        return this.inputType +  '-'  + this.labelName;
      }
    }
  });

  // radio
  Vue.component('max-radio', {
    template: `<div ref="box" :class="[getSize, getValidation]" class="mb-3">
                <label class="col-sm-12 col-form-label" v-show="isShowLabel">{{labelName}}</label>
                <div class="col-sm-12" :style="getMargin">
                  <div class="custom-control custom-radio" :class="className" :style="{'display': isInline ? 'inline-flex' : 'block'}" v-for="item in items">
                    <input class="custom-control-input" type="radio" :name="groupName" :id="'radio-' + item.label" :value="item.value" @change="onValue" :checked="item.checked" :disabled="item.disabled">
                    <label class="custom-control-label" :for="'radio-' + item.label">
                      {{item.label}}
                    </label>
                  </div>
                </div>
              </div>`,
    props: {
      labelName: String,
      items: Array,
      groupName: String,
      isInline: Boolean,
      disabled: Boolean,
      isValidation: Boolean,
      name: String
    },
    data () {
      return {
        size: 0,
        isValid: false
      }
    },
    mounted () {
      if(this.$refs.box.parentNode.className === 'form-row') {
        this.size = 12 / this.$refs.box.parentNode.children.length;
      }
    },
    methods: {
      onValue (e) {
        let name = this.name;
        let value = e.target.value;
        this.$emit('get-input-value', name ? {name, value} : value);
      }
    },
    computed: {
      isShowLabel () {
        return !!this.labelName;
      },
      className () {
        return this.isInline ? 'form-check-inline' : '';
      },
      getSize () {
        return 'col-sm-' + this.size;
      },
      getMargin () {
        return {'margin-top': '6px'};
      },
      getValidation () {
        return this.isValidation ? 'was-validated' : '';
      }
    }
  });

  // radio
  Vue.component('max-checkbox', {
    template: `<div ref="box" :class="[getSize, getValidation]" class="mb-3">
                <label class="col-sm-12 col-form-label" v-show="isShowLabel">{{labelName}}</label>
                <div class="col-sm-12" :style="getMargin">
                  <div class="custom-control custom-checkbox" :class="className" :style="{'display': isInline ? 'inline-flex' : 'block'}" v-for="item in items">
                    <input class="custom-control-input" type="checkbox" :name="groupName" :itemName="item.name" :id="'checkbox-' + item.label" :value="item.value" @change="onValue" :checked="item.checked" :disabled="item.disabled">
                    <label class="custom-control-label" :for="'checkbox-' + item.label">
                      {{item.label}}
                    </label>
                  </div>
                </div>
              </div>`,
    props: {
      labelName: String,
      items: Array,
      groupName: String,
      isInline: Boolean,
      disabled: Boolean,
      isValidation: Boolean
    },
    data () {
      return {
        size: 0,
        isValid: false
      }
    },
    mounted () {
      if(this.$refs.box.parentNode.className === 'form-row') {
        this.size = 12 / this.$refs.box.parentNode.children.length;
      }
    },
    methods: {
      onValue (e) {
        let name = e.target.getAttribute('itemName');
        let value = e.target.checked ? e.target.value : ''
        this.$emit('get-input-value', {name, value});
      }
    },
    computed: {
      isShowLabel () {
        return !!this.labelName;
      },
      className () {
        return this.isInline ? 'form-check-inline' : '';
      },
      getSize () {
        return 'col-sm-' + this.size;
      },
      getMargin () {
        return {'margin-top': '6px'};
      },
      getValidation () {
        return this.isValidation ? 'was-validated' : '';
      }
    }
  });

  // select
  Vue.component('max-select', {
    template: `<div ref="box" :class="[getSize, getValidation]" class="mb-3">
                <label class="col-sm-12 col-form-label" v-show="isShowLabel">{{labelName}}</label>
                <div class="col-sm-12">
                  <select class="custom-select" @change="onValue" :disabled="disabled" :required="isValidation">
                    <option value="" :selected="!selected">{{defaultSelect || '선택'}}</option>
                    <option v-for="(items, index) in items" :key="index" :value="items.value" :selected="items.selected">{{items.name}}</option>
                  </select>
                </div>
              </div>`,
    props: {
      labelName: String,
      selected: Boolean,
      disabled: Boolean,
      defaultSelect: String,
      items: Array,
      name: String,
      isValidation: Boolean
    },
    data () {
      return {
        size: 0
      }
    },
    mounted () {
      if(this.$refs.box.parentNode.className === 'form-row') {
        this.size = 12 / this.$refs.box.parentNode.children.length;
      }
    },
    methods: {
      onValue (e) {
        let name = this.name;
        let value = e.target.value;
        this.$emit('get-input-value', name ? {name, value} : value);
      }
    },
    computed: {
      isShowLabel () {
        return !!this.labelName;
      },
      getValidation () {
        return this.isValidation ? 'was-validated' : '';
      },
      getSize () {
        return 'col-sm-' + this.size;
      },
      getMargin () {
        return {'margin-top': '6px'};
      }
    }
  });


  // form
  Vue.component('max-form', {
    template: `<form @submit.prevent="onSubmit" :style="formPadding">
                <slot>
                  제공된 컨텐츠가 없는 경우에만 보실 수 있습니다.
                </slot>
                <div class="btn-box text-center">
                  <button v-if="isValid" class="btn btn-primary" type="submit" :disabled="{disabled: validLength == list.length}">Submit form</button>
                  <button v-else class="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>`,
    props: {
      list: Array,
      isValid: Boolean,
      validLength: [Number, String]
    },
    data () {
      return {
      }
    },
    methods: {
      onSubmit() {
        this.$emit('on-submit');
      }
    },
    computed: {
      formPadding () {
        return {'padding': '20px 10px'}
      }
    }
  });


})(Vue)