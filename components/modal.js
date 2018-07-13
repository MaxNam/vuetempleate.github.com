(function(Vue) {

   Vue.component('max-modal', {
    template: `<div ref="modalBox" class="modal fade" :class="getBoxClass" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" :aria-hidden="isOpen" :style="{display: isOpen ? 'block' : 'none'}">
                  <div class="modal-dialog" :class="getModalClass" role="document">
                    <div class="modal-content" ref="modalContent">
                      <div class="modal-header">
                        <h5 class="modal-title">{{title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="onClose">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body" ref="modalBody" style="overflow: auto;">
                        <slot>
                           제공된 컨텐츠가 없는 경우에만 보실 수 있습니다.
                        </slot>
                      </div>
                      <div class="modal-footer" v-if="type === 'confirm'">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="onClose">취소</button>
                        <button type="button" class="btn btn-primary" @click="onConfirm">확인</button>
                      </div>
                      <div class="modal-footer" v-else>
                        <button type="button" class="btn btn-primary" @click="onConfirm">확인</button>
                      </div>
                    </div>
                  </div>
                </div>`,
    props: {
      title: String,
      size: String, // large, small, normal
      type: String, // confirm, alert
      isOpen: Boolean,
      isHeightResizing: Boolean
    },
    data () {
      return {
        body: document.querySelector('body'),
        backdrop: document.createElement('div')
      }
    },
    mounted () {
      this.backdrop.className = 'modal-backdrop fade show';
    },
    methods: {
      setBodyHeight () {
        this.$refs.modalBody.style.height = window.innerHeight - 200 + 'px';
      },
      clearBodyHeight () {
        this.$refs.modalBody.style.height = 'auto';
      },
      onClose () {
        this.$emit('close-modal');
      },
      onConfirm () {
        this.onClose();
        this.$emit('confirm-modal');
      }
    },
    computed: {
      getBoxClass () {
        if(this.size === 'large') {
          return 'bd-example-modal-lg';
        } else if(this.size === 'small') {
          return 'bd-example-modal-sm';
        }
        return;
      },
      getModalClass () {
        if(this.size === 'large') {
          return 'modal-lg';
        } else if(this.size === 'small') {
          return 'modal-sm';
        }
        return;
      }
    },
    watch: {
      isOpen () {
        if(this.isOpen) {
          setTimeout(() => {
            if(this.$refs.modalContent.offsetHeight > window.innerHeight) {
              this.setBodyHeight();
            }
            this.$refs.modalBox.classList.add('show');
            this.body.appendChild(this.backdrop);
            if(this.isHeightResizing) {
              window.addEventListener('resize', this.setBodyHeight);
            }
          }, 100);
        } else {
          this.$refs.modalBox.classList.remove('show');
          setTimeout(() => {
            this.backdrop.parentNode.removeChild(this.backdrop);
            if(this.isHeightResizing) {
              this.clearBodyHeight();
              window.removeEventListener('resize', this.setBodyHeight);
            }
          }, 100);
        }
      }
    }
  });

})(Vue)