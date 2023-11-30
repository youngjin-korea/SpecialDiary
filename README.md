# 일기장 프로젝트 (CRUD기능)

create, read, update, delete 기능이 있는 일기장 프로젝트 입니다.

## 기능 설명

### `CREATE`

최상위 부모 컴포넌트 App.js에 저장할 상태 상태 데이터와 생성 함수를 만들어 편집의 기능을 하는 DiaryEditor.js로 props를 전달하여 이벤트가 일어나면 데이터의 상태가 변경 되도록 구현했습니다.

### `READ`

App.js에서 관리하는 상태 데이터를 DiaryList.js 컴포넌트 내부에 props로 전달하여 내용을 볼 수 있도록 map() 메소드로 아이템들을 리턴하여 랜더링하였습니다.

### `UPDATE`

수정 상태를 알기 위해서 state를 사용하여 수정하지 않을 때 false, 수정중 true로 상태를 저장하여 삼항연산자를 사용해서
수정 할 폼과 그에 맞는 버튼을 랜더링 하고 , 변경된 값은 localContent 라는 상태로 관리하여 App.js 에서 내려 받은 이벤트 핸들러 함수 내부에 값을 변경하여 상태 데이터를 변경 후 다시 랜더링 하는 방식으로 수정 하였습니다.

### `DELETE`

filter() 메소드를 활용하여 해당되는 삭제 할 아이템의 id 와 일치하는 값은 걸러내고 아닌 값 만을 모아서 상태 데이터를 변경하는 방식으로 구현하였습니다.

![화면 기록 2023-11-30 오후 7 47 14](https://github.com/youngjin-korea/SpecialDiary/assets/101031079/9d7344b3-f7ee-40a4-8a53-48a565a23a22)

<img width="50%" src="https://github.com/youngjin-korea/SpecialDiary/assets/101031079/b4811700-69e9-4201-951f-8c1bfc0da0ea"/>
