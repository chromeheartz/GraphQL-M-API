/*
  [#2.0] What is an API
  
  ** API 가 대체 무엇일까

  Application Programming Interface
  interface라는 단어를 보면 무언가와 상호작용 하는 방식을 의미한다
  interaction(상호작용) face(얼굴)이라고 생각하면 좋다

  TV을 끄려면 버튼을 누르는데 그 버튼이 TV와 상호작용해주는 인터페이스 같은 개념이다
  리모콘을 보면 만든사람이 기능을 노출시키기 위해 모든 버튼에 커맨드를 지원할것이다

  브라우저에 새 API가 추가되면 개발자들이 누를 수 있는버튼을
  브라우저가 새로 내보인 맥락으로 이해하면 좋다. 

  * API는 어플리케이션, 서버, 웹사이트를 만든사람이
  만들어서 내놓은 것이고, 사람들은 API로 그것들과 상호작용 할 수 있는것이다
*/

/*
  [#2.1] What is REST?

  ** REST API
  REST api와 GraphQL api의 차이점은 버튼(인터페이스)가 어떻게 노출되어 있는지에 있다
  해당 API의 데이터에 어떻게 접근하고 서버와 어떻게 의사소통 하는지

  **** REST의 경우
  서로 다른 서버간의 통신이나 IOS 앱이 서버와 통실할 떄
  REST api를 사용한다면
  그 통신은 URL로 이루어진다. 내가 데이터를 가져오고 싶다면 이런식일것이다

  nomadmovies.co/api/movies 이런 URL로 request를 만들어
  JSON 배열을 받을것이다. 
  리소스나 리소스 목록을 얻을때 URL을 사용하는것. 하지만 그러려면 공개적으로 URL이 노출이 되어야한다.
  ?rating=9 같은 쿼리스트링도 넣어 보낼수있다
  보다시피 버튼들은 그냥 URL로 이루어진다.

  많은사람들이 같은 컨벤션을 쓰기 떄문에 예측이 쉬워진다. 
*/

/*
  #2.2 REST + HTTP

  URL만으로 API의 모든것을 해야하는것은 아니다
  * API에 동사를 넣는 것은 좋지 않다. create를 예로들면 add, upload 사람마다
  쓰는 단어가 다르기 때문에 직관적이지 않다
  이것대신 HTTP 메소드에 의존하는것이다

  ** HTTP 메소드
  기본적으로 웹사이트에 요청을 보낼때 브라우저는 항상
  get 요청을 보낸다. 예를들어
  bibi.co.kr을 입력하고 엔터를 치면 브라우저는 URL로 get 요청을 자동적으로 보낸다

  데이터를 보내거나 form을 보내고 싶을때는 POST라는 HTTP 메소드를 사용한다
  이 단어들은 HTTP의 표준 명세를 가지고있어서 바꾸지 못한다. 
  핵심은 '메소드 + URL'이 API가 더 많은 일을 하게 하는것

  같은 URL이여도 요청한 HTTP메소드에 따라 응답이 달라진다

  GET  /2/users/bibi/bookmarks
  POST /2/users/bibi/bookmarks

  GET으로 하면 북마크되어있는것을 가져오는것이고 POST를하면 새로 북마크를 한다는 뜻이 된다
  PUT 메소드로 보내게 되면 업데이트(수정)할 수 있다

  대체로 GET, POST, PUT, DELETE 4가지를 이용한다
  이렇게 직관적으로 이용할 수 있는게
  REST API가 좋은 점중 하나이다

*/

/*
  #3.0 What is GraphQL?

  GraphQL
  GraphQL은 하나의 specification같은것이다
  누군가 spec을 읽고 GraphQL-js라는 javascript로 구현한 오픈소스가
  첫번쨰 오픈소스이다.   
*/

/*
  #3.1 Overfetching

  어떤 문제들을 GraphQL이 해결했는지 알아볼것이다
  rest API에는 2가지의 문제점이 있다. over-fetching / under-fetching

  - over-fetching 문제점
  JSON으로 데이터를 받아오면 엄청 긴 데이터가 올것이다 이것이 over-fetching이다
  내가 데이터를 쓰던 말던 너무 많은 data를 받는것

  * 하지만 GraphQL은 url로 데이터를 즉시 받지 않는다
  필요한 data를 요청한다. 

*/

/*
  #3.2 Underfetching

  - under-fetching 
  우리가 필요한것보다 덜 받는 under-fetching 문제점이 있다
  예를들어 한가지 영화를 데이터로 받아오는데 
  그 데이터의 카테고리가 액션인지 호러, 코미디인지를 알려면 genre라는 데이터에 받아올것이다
  하지만 genre의 id만 받아오고 comedy이런 정보를 얻지못해서 
  이 카테고리를 보여주고싶다면 한번 더 url에 request를 해야한다

  이런것이 under-fetching이다
  정보를 한번에 보여주고싶은데 어떤 정보를 보여주기 전에
  두가지 request를 해야하는것
  (fetch를 2번해서 영화정보 / 장르정보를 가져와야함)

  추가로 필요하다면 한번 더 요청을 해야한다.

  * GraphQL에서는 한번의 request로 해결해 낼 수 있다.
*/

/*
  #3.3 Try Graph QL

  https://graphql.org/swapi-graphql
  여기서 테스트를 해볼수있다.

  * GraphiQL 은 browser tool인데 graphql query를 쓰고 보낼 수 있게 해준다.
  docs에 root를 눌러보면 요청할 수 있는 데이터들이 나열되어있을것이다
  예를들어 films는
  /api/v1/films처럼 될것이다

  allFilms(
    after: String
    first: Int
    before: String
    last: Int
  ): FilmsConnection

  이것의 데이터를 요청해볼것이다
  {
    allFilms {
      totalCount
      films {
        title,
        episodeID
      }
    }
  }

  이런식으로 allFilms안의 totalCount를 가지고 와보았다
  딱 우리가 원하는것만 요청하고 받아내었다. !! over-fetching 해결

  *** over, under fetching 이외에도 GraphQL의 장점은
  모든 것들이 type을 가지고 있다는 것이고 즉, 자동완성이 가능하다

  allPeople을 예로 들어보면
  people만 써보면 에러가 날것이다 GraphQL에서는 구체적으로 요구해야하기 때문
  allPeople은 object가 있는 array를 줬는데
  그 안에 name, hairColor, eyeColor등이 들어있다

  !! under-fetching 해결
  하나의 request로 우리가 원하는것을 다 받아냈다.
*/