(function(Vue) {

  // pagination
  Vue.component('max-pagination', {
    template: `<nav aria-label="Page navigation example" style="margin-top: 30px;">
                <ul class="pagination justify-content-center">
                  <li class="page-item" :class="!totalPageIndex ? 'disabled' : ''">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPageIndex">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li v-if="totalPageIndex === (totalPageList.length - 1)" class="page-item" :class="currentPage === (totalPageIndex < 1 ? page : page + (totalPageIndex * currentPageNum)) ? 'active' : ''" v-for="page in totalPageList[totalPageIndex]">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{totalPageIndex < 1 ? page : page + (totalPageIndex * currentPageNum)}}</a>
                  </li>
                  <li v-if="totalPageIndex !== (totalPageList.length - 1)" class="page-item" :class="currentPage === (totalPageIndex < 1 ? page : page + (totalPageIndex * currentPageNum)) ? 'active' : ''" v-for="page in currentPageNum">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{totalPageIndex < 1 ? page : page + (totalPageIndex * currentPageNum)}}</a>
                  </li>
                  <li class="page-item" :class="totalPageList.length < limit ? (totalPageIndex === totalPageList.length - 1 ? 'disabled' : '') : (totalPageIndex === totalPageList.length - 1 ? 'disabled' : '')">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPageIndex">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>`,
    props: {
      start: [Number, String],
      limit: [Number, String],
      total: [Number, String],
      showPageNum: [Number, String]
    },
    data () {
      return {
        currentPage: 1,
        totalPage: 0,
        totalPageIndex: 0,
        totalPageList: [],
        currentPageNum: 0
      }
    },
    created () {
      this.currentPage = this.start / this.limit + 1;
      this.totalPageIndex = Math.ceil(this.currentPage / this.limit);
      this.totalPageIndex = this.totalPageIndex % 10 ?   this.totalPageIndex - 1 : this.totalPageIndex;
      this.currentPageNum = this.showPageNum;
    },
    methods: {
      setTotalPage () {
        this.totalPageList = [];
        this.totalPage = Math.ceil(this.total / this.limit);
        this.currentPageNum = this.totalPage > this.showPageNum ? this.showPageNum : this.totalPage;
        for (var i = 1; i < this.totalPage + 1; i++) {
          if(!(i % this.limit)) {
            let length = i > this.limit ? i - ((i / this.limit - 1) * this.limit) : i;
            this.totalPageList.push(length);
          }
          if(this.totalPage === i) {
            let length = this.totalPage % this.limit;
            this.totalPageList.push(length);
          }
        }
      },
      changePage (page) {
        this.currentPage = this.totalPageIndex < 1 ? page : page + (this.totalPageIndex * this.showPageNum);
        this.$emit('change-page', this.currentPage);
      },
      prevPageIndex () {
        if(!this.totalPageIndex) {
          return;
        }
        this.totalPageIndex = this.totalPageIndex - 1;
      },
      nextPageIndex () {
        if(this.totalPageList.length - 1 === this.totalPageIndex) {
          return;
        }
        this.totalPageIndex = this.totalPageIndex + 1;
      },
    },
    watch: {
      start () {
        this.currentPage = this.start / this.limit + 1;
        this.totalPageIndex = Math.ceil(this.currentPage / this.limit);
        this.totalPageIndex = this.totalPageIndex % 10 ?   this.totalPageIndex - 1 : this.totalPageIndex;
        this.currentPageNum = this.showPageNum;
      },
      total () {
        this.setTotalPage();
      }
    }
  });

})(Vue)