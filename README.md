# Max-Template

> Vue + Bootstrap project


``` bash

Vue + Bootstrap

<!DOCTYPE html>
<html>
<head>
  <title>Vue_Bootstrap</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="./css/common.css">
</head>
<body>
  <div id="app">
    // 뷰 컴포넌트 공간 
  </div>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="./components/form.js"></script>
<script src="./components/table.js"></script>
<script src="./components/pagination.js"></script>
<script src="./components/menu.js"></script>
<script src="./components/modal.js"></script>
<script src="./components/list.js"></script>
<script>
  new Vue({
    el: '#app'
    ...
  });
</script>
</body>
</html>


```

# max-menu

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **title**     | 타이틀                 | `String` |                  |
| **menus**       | 메뉴                  | `Array`   | [{**name**: `String`, **link**: `String`, **selected**: `Boolean`, subMenus: [{name: `String`, link: `String`, selected: `Boolean`}], dropdownMenus: [{name: `String`, link: `String`, selected: `Boolean`}]}] |
| select-menu | 선택된 메뉴 콜백함수         | `Function` |      |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-menu
  :title="'크라우드소싱 운영툴'"
  :menus="menus"
  @select-menu="selectMenu"
>
</max-menu>

```

# max-dropdown

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **menus**       | 메뉴                  | `Array`   | [{**name**: `String`, **link**: `String`}] |


*(참고: 굵게 표시된 Parameter는 필수입니다.)*


``` bash

<max-dropdown
  :menus="menus"
></max-dropdown>

```


# max-modal

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **title**   | 헤더 타이틀             | `String` |                  |
| size        | 모달 사이즈             | `String` | large, small, normal(defalut) |
| type        | 모달 타입               | `String` | confirm, alert(default)     |
| **isOpen**  | toggle(show, hide)    | `Boolean` |                 |
| isHeightResizing  | 모달바디 height 반응형  | `Boolean` |                 |
| **close-modal** | 모달삭제 콜백         | `Function` |                 |
| confirm-modal  | 모달(type === 'confirm')일때 확인 콜백    | `Function` |                 |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-modal
  :title="'모달'"
  :type="'alert'"
  :size="'large'"
  :is-open="isOpen"
  :is-height-resizing="false"
  @close-modal="isOpen = false"
  @confirm-modal="cofirmModal"
>
  // 모달 바디부분 그려줄 마크업 적용
  ex ) <div>modal-body</div>
</max-modal>

<button type="button" class="btn btn-primary" @click.prevent="isOpen = true">Large modal</button>

```


# max-input

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **inputType**   | 타입              | `String` | email, url, tel, date, text(default).... |
| labelName       | 라벨네임           | `String` |                           |
| placeholder     | 설명문구         | `String` |                             |
| disabled        |    | `Boolean` |                 |
| isValidation    | validation 체크 | `Boolean` |                 |
| **get-input-value** | value 콜백 | `Function` |                 |
| name            | value 콜백 받을시에 object 키값 | `String` |                 |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-input
  :label-name="'이메일'"
  :input-type="'email'"
  :placeholder="'이메일@com'"
  :is-validation="false"
  :name="'email'"
  @get-input-value="getInputValue"
></max-input>

```


# max-radio

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **items**   | 라디오버튼 리스트        | `Array` | [{**label**:`String`,**value**:'String',**checked**:`Boolean`}] |
| labelName      | 라벨 이름           | `String` |                           |
| **groupName**  | 라디오그룹 이름       | `String` |                            |
| isInline       | 가로 or 세로        | `Boolean` |                           |
| isValidation   | validation 체크    | `Boolean` |                 |
| **get-input-value** | value 콜백 | `Function` |                 |
| name                | value 콜백 받을시에 object 키값 | `String` |                 |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-radio
  :label-name="'라디오버튼'"
  :items="radioItems"
  :group-name="'test-radio'"
  :is-inline="true"
  :is-validation="false"
  :name="'radio'"
  @get-input-value="getInputValue"
></max-radio>

let radioItems = [{'label': 'radio', 'value': '라디오', 'checked': false}, {'label': 'video', 'value': '비디오', 'checked': false}, {'label': 'video2', 'value': '비디오2', 'checked': false}];

```


# max-checkbox

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **items**   | 체크박스 리스트        | `Array` | [**name**:`String`,**label**:`String`,**value**:'String',**checked**:`Boolean`}] |
| labelName      | 라벨 이름           | `String` |                           |
| **groupName**  | 체크박스그룹 이름       | `String` |                            |
| isInline       | 가로 or 세로        | `Boolean` |                           |
| isValidation   | validation 체크    | `Boolean` |                 |
| **get-input-value** | value 콜백 | `Function` |                 |
| disabled            |  | `Boolean` |                 |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-checkbox
  :label-name="'체크박스버튼'"
  :items="checkboxItems"
  :group-name="'test-checkbox'"
  :is-inline="true"
  :is-validation="false"
  @get-input-value="getInputValue"
></max-checkbox>

let checkboxItems = [{'name': 'c1', 'label': '체크박스1', 'value': 'checkbox1', 'checked': false}, {'name': 'c2', 'label': '체크박스2', 'value': 'checkbox2', 'checked': false}];

```



# max-select

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **items**   | select 리스트        | `Array` | [**name**:`String`,**value**:'String',**selected**:`Boolean`}] |
| selected    | 현재 선택되어 있는가?   | `Boolean` |                           |
| **get-input-value** | value 콜백 | `Function` |                 |
| name                | value 콜백 받을시에 object 키값 | `String` |                 |
| disabled            |         | `Boolean` |                 |
| defaultSelect       | 디폴트 value값 (전체, 선택 등등) | `String` | |
| isValidation   | validation 체크    | `Boolean` |                 |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-select
  :label-name="'선택'"
  :name="'select'"
  :items="selectItems"
  :is-validation="false"
  @get-input-value="getInputValue"
></max-select>

let selectItems = [{name:'One', value:1, selected:false},{name:'Two', value:2, selected:false},{name:'Three', value:3, selected:false}];

```


# max-form

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| list        | form안에 input태그 리스트        | `Array` |     |
| isValid     | validation 체크    | `Boolean` |                 |
| validLength | validation 체크해야할 갯수    | `Boolean` |                 |
| **on-submit** | form 데이터 전송 콜백    | `Function` |                 |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-form
  :list="list"
  :is-valid="false"
  :valid-length="6"
  class="bg-light"
  @on-submit="onSubmit"
>
  <div class="form-row">
    <max-input
      :label-name="'전화번호'"
      :input-type="'tel'"
      :placeholder="'010-1111-1111'"
      :is-validation="false"
      :name="'test1'"
      @get-input-value="getInputValue"
    ></max-input>
    <max-input
      label-name="이메일"
      input-type="email"
      placeholder="이메일@com"
      is-validation="true"
      name="이메일"
      @get-input-value="getInputValue"
    ></max-input>

    <max-radio
      :label-name="'라디오버튼'"
      :items="radioItems"
      :group-name="'test-radio'"
      :is-inline="true"
      :is-validation="false"
      :name="'radio'"
      @get-input-value="getInputValue"
    ></max-radio>
  </div>

  <div class="form-row">
    <max-input
      :label-name="'전화번호'"
      :input-type="'tel'"
      :placeholder="'010-1111-1111'"
      :is-validation="false"
      :name="'test333'"
      @get-input-value="getInputValue"
    ></max-input>

    <max-select
      :label-name="'선택'"
      :name="'select'"
      :items="selectItems"
      :is-validation="false"
      @get-input-value="getInputValue"
    ></max-select>

    <max-checkbox
      :label-name="'체크박스버튼'"
      :items="checkboxItems"
      :group-name="'test-checkbox'"
      :is-inline="true"
      :is-validation="false"
      @get-input-value="getInputValue"
    ></max-checkbox>
  </div>

</max-form>

```




# max-list

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **list**    | 리스트        | `Array` | |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-list
  :list="list"
></max-list>

let list = ['사자', '호랑이', '강아지', '고양이']

```

# max-image-list

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **list**    | 리스트        | `Array` | [{**url**:`String`, **info**: `Object`}]|

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-image-list
  :list="imageList"
></max-image-list>

let imageList = [{url: '', info: {TAG: '#고양이, #강아지', PRIORITY: 10, 'COUNT/MIN_EXPOSED': '5/10', DESCRIPTION: '비고', CREATE_DATE: '생성일', IMAGE_URL: '', COPY_URL: '', COPY_NAME: '다음위키', UPLOAD_TYPE: '비젼', DETAIL_URL: ''}}],

```

# max-table

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| uniqId      | 테이블 유니크 ID        | `String` | |
| **titles**    | 타이틀 리스트        | `Array` | [{**name**:`String`,**label**:`String`,align:`String`,type:`String`,btnName: `String`,width:`String`}] |
| **contents**    | 컨텐츠 리스트        | `Array` | |
| table-btn-click    | titles type==='button' 경우 콜백함수  | `Function` | |
| table-link-click      | tr 링크 만듬        | `Function` | |

### titles value
| Name        | Description          |
| ----------- | -------------------- |
| **name**        | db데이터값 매칭           |
| **label**       | 실제 table 헤더값           |
| align       | 테이블 글자위치 `left(default), center, right`    |
| type        | 테이블 내용타입 `checkbox, button`          |
| btnName     |  type==='button'일 경우 버튼이름          |
| width       | 가로사이즈 `%작성`|

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-table
  :uniqId="1"
  :titles="tbTitles"
  :contents="tbContents"
  @table-link-click="moveItems"
  @table-btn-click="tableBtnClick"
>
</max-table>

let tbTitles = [
    { name: "DATASETS_SEQ", label: "데이터번호", align: "center", type: "checkbox"},
    { name: "DATASETS_NAME", label: "데이터셋명", align: "center"},
    { name: "CATEGORY_TYPE", label: "카테고리"},
    { name: "IMAGE_URL", label: "이미지", width: '30%'},
    { name: "IMAGE_COUNT", label: "이미지 개수"},
    { name: "MIN_EXPOSE_COUNT", label: "이미지 개수"},
    { name: "CREATE_DATE", label: "생성 일자"},
    { name: "DATASETS_SEQ", label: "", type: "button", btnName: "자세히보기"}
];

let tbContents = [
 {"DATASETS_SEQ":4,"DATASETS_NAME":"꽃","IMAGE_URL":"https://static1.squarespace.com/static/538a4829e4b05b7325cc4e0b/t/58d4cb1bf5e2311226370f4f/1490340644391/","IMAGE_COUNT":1307,"MIN_EXPOSE_COUNT":0,"CREATE_DATE":"2018-05-21T08:27:27Z"},
      {"DATASETS_SEQ":5,"DATASETS_NAME":"나무","IMAGE_URL":"https://scontent-sjc3-1.cdninstagram.com/vp/86380a8d893714da37ac8392e2794b27/5B9227B0/t51.2885-15/s320x320/e35/13735852_1123535434356600_771761495_n.jpg","IMAGE_COUNT":353,"MIN_EXPOSE_COUNT":0,"CREATE_DATE":"2018-05-21T08:27:27Z"}
];
```

# max-pagination

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **start**    | 시작범위        | `Number`, `String`  | |
| **limit**    | 범위(갯수)        | `Number`, `String`  | |
| **total**    | 전체 데이터        | `Number`, `String`  | |
| **showPageNum**    | 페이지에 보여줄 숫자 갯수 | `Number`, `String`  | |
| **changePage**    | 페이징숫자 클릭 콜백     | `Function` | |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash
<max-pagination
  :start="page.start"
  :limit="page.limit"
  :total="page.total"
  :show-page-num="page.showPageNum"
  @change-page="changePage"
></max-pagination>

let page = {
            start: 0,
            limit: 10,
            total: 0,
            showPageNum: 10
          }

```


# max-toast

## Options

| Name        | Description           | Type   |  Value           |
| ----------- | -------------------- | ------ | ---------------- |
| **text**    | toast 메세지        | `String`  | |
| **isOpen**    | 유무      | `Boolean`  | |
| type    | toast 타입       | `String`  | |
| **close-toast** | toast 제거 | 'Function' | |

*(참고: 굵게 표시된 Parameter는 필수입니다.)*

``` bash

<max-toast
  :text="toast.text"
  :is-open="toast.isOpen"
  :type="toast.type"
  @close-toast="toast.isOpen = false"
></max-toast>

let toast = {
            text: '',
            isOpen: true,
            type: 'success'
          }

```