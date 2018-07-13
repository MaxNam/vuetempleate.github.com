(function(Vue) {

   Vue.component('max-toast', {
    template: `<div ref="toastBox" class="alert toast" :class="'alert-' + (type ? type : 'primary')" role="alert" :style="{'display': isOpen ? 'block': 'none'}">
                {{text}}
              </div>`,
    props: {
      text: String,
      type: String,
      isOpen: Boolean
    },
    watch: {
      isOpen () {
        if(this.isOpen) {
          let self = this;
          setTimeout(() => {
            this.$refs.toastBox.classList.add('show');
            this.$refs.toastBox.addEventListener('transitionend', function onTransitionEnd() {
              this.removeEventListener('transitionend', onTransitionEnd);
              setTimeout(() => {
                self.$refs.toastBox.classList.remove('show');
                self.$refs.toastBox.addEventListener('transitionend', function onTransitionEnd() {
                  this.removeEventListener('transitionend', onTransitionEnd);
                  self.$emit('close-toast');
                });
              }, 1000);
            });
          }, 100);
        }
      }
    }
  });

})(Vue)