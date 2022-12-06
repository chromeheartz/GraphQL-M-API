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

/*
  #4.0 Set up

  GraphQL API를 Apollo server라는것을 써볼것이다
  오픈소스인데 spec-compliant GraphQL server라고 써있는것이 graphql의 spec을 구현하고있는것이다
  exporess로 만들어진 rest API를 graph ql 로 바꾸고 싶다면
  server를 그렇게 많이 수정안하고 middleware만 추가해주면 된다

  npm init -y로 node repo를 초기화시켜준다

  또 설치할것이 몇가지 있다 apollo=server , graphql, nodemon
  nodemon은 -D(devDependencies로 설치)
  npm i nodemon -D

  server.js, git ignore도 만들어준다

  package.json에서 test script를 dev로 바꾸고 명령어를 지정해준다

  sever.js에 import { ApolloServeer, gql } from "apollo-server" 임포트해주고
  package.json에 type을 module이라고 해야하는 이유는
  그렇게 하지 않으면 import가 아닌 const { ApolloServer, gql } = require('apollo-server)
  이런식으로 작성해야 했기 때문이다.

  const server = new ApolloServer({})
  서버를 만들어주고
  listen() promise
  then을 하면 onfullfilled argument가 있는데 그것은 value가 있고
  그 타입은 listen을 찍어서 들어가보면 나온다

  server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
  })
  이런식으로 작성하고 보게되면 오류가나는데

  APollo server는 존재하는 schema나 modules또는 typeDefs를 가져야한다.
  이것은 다음영상에서 해볼것.

  중요한건 
  throw Error('Apollo Server requires either an existing schema, modules or typeDefs');
  이 에러가 떴다는건 잘 진행되고 있다는뜻이고, 이 에러로인해서 무언가를 배워볼것이다

*/

/*
  #4.1 Query Type

  현재 에러가 뜨는 이유는 graphql이 data의 shapq을 미리 알고잇어야하기 때문
  graphql api는 많은 type들의 집합이다.

  * return 하려하는 data나 사용자가 쓸수있는 query 등등은
  server가 실행하기 전에 graphql에게 설명해야하는 부분이다

  const typeDefs = gql``
  graphql function을 사용할것인데
  ``안에 작성해야하는것은 chema definition language이다
  그래서 여기서 data의 shapq을 설명해줄것이다

  graphql SDL을 쓰는데 이건 schema definition language라는 것이고,
  query data, data의 shapq을 설명하는데에도 같은 언어를 쓴다는것은 좋다

  typeDefs를 ApolloServer에 적어주면
  GraphQLError: Syntax Error: Unexpected <EOF>. 이런에러가 출력되는데
  예상치못한 EDF(end of file)이다.

  type이 비어있기 때문에 그렇다.
  우리가 '의무적으로' 써야하는것은 Query라는 type을 작성해야한다.

  그냥 다른것부터 써버리면 Query root type은 제공되어야한다고 에러가 뜬다.
  이 Query type없이는 서버가 시작하지 않을것이다

  Query type에 뭘 넣던지간에 그것들은 모두 사용자가 request할 수 있게 된다

  *** 
  만약 Query 안에
  hello: String을 만들면
  rest API 에서
  /hello URL을 만든것이랑 같다

  * 
  type Root {...} 이런식으로 작성후 상단에
  schema {
    query: Root
  }
  이런식으로 alias(별칭)으로 작성해주어도 된다.

  ****
  사용자가 request할 수 있도록 하고싶은 모든것은
  type Query안에 있어야한다.
*/

/*
  #4.2 Scalar and Root Types

  polar studio라고 Apollo가 자체적인 studio를 가지고있는데
  이것이 graphql api를 explore할 수 있게 해준다

  explorer에서 text, hello라고 요청을 해보면 null이라고 나올것인데
  얘는 String을 return해야하는데 null이 나오는건이상하다

  error가 안뜨는것과 null이 나오고 누가 null이라고 하는것인지가 
  알아야할 조각중 하나다

  *** 첫번째 해야할것은 API가 생긴모양을 graphql에게 설명해주어야한다
  그리고 나서 사용자가 원하는 data를 만들어 낼 수 있도록 실제코드를 작성한다

  일단은 API의 shape을 설명하는것에 집중

  * Scalar type, non-Scalar type, root type이 있다.
  Scalar type은 built-in되어있다
  String, Int, Boolean, ID ...

  allTweets같은 모든 트윗을 주는것을 예로 들어보면 Scalar type을 쓸 수 없다
  db에 있는 모든 트윗을 유저에게 전달하고 싶기때문에 
  우리만의 type을 만들것

  Tweet type이 user에 의해 만들어졌다고해보겠다

  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweets: [Tweet]
  }

  누군가 allTweets를 request하면 all Tweets field가 Tweet의
  list type을 return하도록한다.

  이렇게하면 내가 어떤 타입을 정의하던지 상관없고 연결도 가능해진다

  Tweet의 list로 [Tweet]을 쓰는것과 그냥 User하나를 쓰는것은 엄청나게 다르다
  이것은 database관계에 따라 결정된다
  지금 말하는것은 Tweet이 하나의 author를 갖는다는것이고
  allTweets은 여러개의 Tweet을 준다는것
  하나의 tweet도 받을수있게하고

  query Tweet {
    tweet {
      text
    }
  }
  이렇게하면 문제가 생기는데 무슨 tweet인지 모르는것이다
  rest API에서 하는 api/v1/tweet/:id처럼
  id를 받고싶은데 이것을 하려면
  argument를 받으면 된다

  하나의 tweet을 request하는 사람은 db에서 찾을 수 있도록 id를 말해줄것이다
  tweet(id: ID): Tweet
  이렇게 말해주게되면 request를 받는데 tweet의 id를 함께 받을것이다
  * 실행되는코드가 아닌 타입에대한 설명
*/

/*
  #4.3 Mutation Type

  Query에 넣은 field들은 user에 의해 request되는것을 알게 되었다

  * Mutation
  query type에 넣는것은 rest API 에서 get URL이 될것이다
  graphql에서 POST request같은 모든 것들은
  Mutation type에 넣어줄것이다
  특별한 타입인데

  **** user가 보낸 data로 mutate하는 동작들을 모두 넣는것이다 ****
  
  type Mutation {
    postTweet(text: String): Tweet
  }

  user가 tweet을 post하려면 tweet의 내용을 주어야하고 그것은 문자열이다.
  그 mutation이 끝나면 user한테 새로운 Tweet을 줄것인데
  authentication이 없기 때문에 user한테 userId를 받아와서 Tweet을 만들것

  backend를 mutate한다면 그것이 mutation이다.

  mutation {
    postTweet(text: "hello First Tweet", userId: "1") {
      text
    }
  }

  기본적으로 query로 되어있어서 mutate를 하려면
  mutation이라고 명시적으로 써주어야한다
  이것은 그냥 url에 POST request를 쓸 수 있도록 해주는것임.

  user가 나한테 data를 보내서 그 data가 database로 가거나 무언가를 
  지우거나 업데이트를 하거나 하면 그건 mutation이 되어야한다.
*/

/*
  #4.4 Non Nullable Fields

  Type을 그냥 Tweet이런식으로 저장하면 이게 Tweet이 될수도 있고 null이될 수도 있다
  Tweet | null 같이 됨 기본값인데 nullable field라고 한다

  필수로 만들어주고싶으면 ! 를 붙이면 된다
  tweet(id: ID!) tweet Query를 쓰려면 ID를 보내야 한다는것이다
  반환하는값에 확신한다면 ! 를 붙여주면된다.

  tweet(id: ID!): Tweet!
  이것은 맞지 않을 수 있다 예를들어 9112라고 현재 없는 ID의 번호를 보내는데도
  Tweet이 반환되는것은 말이 되지 않기 떄문

  [Tweet]! 이런식으로 하게되면
  allTweets가 항상 list를 반환할것인데
  [Tweet, null, Tweet] 이런식으로 들어갈 수도있다

  [Tweet!]! 와 [Tweet]!
  Tweet과 Tweet!
  의 차이점을 잘 알고 null을 이해하는것이 중요하다
*/

/*
  #4.5 Recap

  graphql의 포인트는 무엇인지 의도는 뭔지를 명확히 하는것이 좋다
  Query field들의 의도는 db에서 data를 얻고자 할 것이고
  Mutation field의 의도는 db를 수정하려고 하는것이다

  !
  느낌표를 쓰지 않는다면 기본적으로 'nullable field'가 된다
  id: ID면 ID도 될수 있고 null도 될 수 있다는 뜻

  만약 user가 id로 null을 가지고 있어도 문제가 없다는 뜻
  !를 뒤에 써주게되면 null이면 안된다는것을 알려준다
  만약 이 field들이 널이면 error가 나온다

  무엇이 필수인지 구체화 할 수 있는것
  이것은 argument에도 적용이 된다

  * nullable & non nullable
  allTweets: [Tweet!]!
  이 부분에서 서버를 방금 시작할수도있고 db에 Tweet이 없을 수 있어서
  []! 는 괜찮다 하지만 list안에 null이 있는것은 괜찮지 않다
  
*/

/*
  #4.6 Query Resolvers

  이제 data를 만들어낼 코드를 만들어볼것이다

  * 현재까지 한것은 GraphQL schema definition language였다
  모든 GraphQL 실행에서 이 언어를 이해할것이다
  하지만 어떤 프로그래밍 언어를 사용하느냐에 따라 후에 할 작업이 달라질것

  로직은 같다 로직은 resolvers라고 한다

  * resolvers
  하나의 객체가 될것이고, 우리의 타입 정의와 같은 형태를 가진다

  이름이 같아야 하는게 중요하다 Apollo가 누군가 query의 tweet을 요청하는것을 보면
  resolvers의 query로 갈것이고 function을 실행시킬것이기 때문

  resolvers에 tweet함수를 만들어 return을 null로 해주고 
  콘솔을 찍어보면 콘솔이 출력될것이다.

  ping, pong으로 예를들어서 해보아도 제대로 pong이 return이 되고있다

  **** 우리가 사용할 단어들을 외우는게 중요하다
  type query 안에 allTweets라는 field를 가지고있고
  우리가 이제 allTweets를 위한 resolver를 작성해볼것이다

  가짜 db를 만들었다 tweets의 list를 위해
  여기서는 GraphQl에 우리가 알려줬던 형태를 따라야한다.

  allTweets는 간단히 정리가 되었는데
  이제 두번째 tweet(id)를 실행해볼것이다

  arguments에 대해 알아볼것. 왜냐면 우리는 user에게 그들이 요청한 id의 tweet을
  return해야하기때문

  사실 Apollo 서버가 resolver function을 부를때 어떤 argument를 준다
  첫번째것은 root, 두번째것은 내가 원하는 arguments
  console.log로 찍어서 확인해보면 내가 요청한 id가 인자로 
  잘 들어온것을 볼 수 있다

  *** user가 보낸 argument가 항상 resolver function의 두번째 args가 된다 ***
  두번째 인자에서 풀어서 {id}로 받아와볼수도있다

  이제 Tweets 배열안에 있는 Tweet을 .find 메서드로 찾아볼것
*/

/*
  #4.7 Mutation Resolvers

  우선 query resolver의 로직을 따라가볼것이다
  만약 mutation type에 대한 resolver를 만들려면
  resolver안에 Mutation이라고 쓰기만 하면된다

  Mutation에 postTweet을 구현해보았는데 
  이것은 항상 우리가 만든 새 tweet을 주어야한다.

  resolver함수는 root, argument순서로 받는다는것만 기억하자

  ** Apollo studio

  지금까지 했던것처럼 variables를 써서 동작시키는것이 아니라
  자동완성을 이용할 수 있다

  사실 Query에 tweet.push를 해도 되지만
  머리속에서 코드를 더 잘 정리하기 위해 개념적으로 나눈것이다. 
  
  deleteTweet을 만들어볼것인데 id를 받아와서 내가 지우려고하는
  tweet을 찾아볼것이다

  filter로 database array를 정리할것인데
  tweet의 id가 삭제하려는 id와 같지 않는 tweet들로 filter를 거치면 새로운 array를 반환할것이다

  * db를 mutate한다면 Mutation
  * db를 그냥 fetching한다면 Query
*/

/*
  #4.8 Type Resolvers

  어떤 type 내부의 어떤 field든 resolver function을 만들어볼것이다
  Query, Mutation안에 있는 field들만 얘기하는것이 아니다.

  users의 db를 만들어보고 해봄.
  
  ** dynamic field
  지금 id, firstName, lastName은 db로 부터온다
  기본적으로 Apollo server는 
  내가 return하는 객체안에 lastName이 있을것이란것을 알고 있다.

  만약 user가 fullName이라는 field를 가지게하고
  non-nullable String으로 해보면 어떻게 될까

  그렇게 하면 작동하지 않는다 우리의 data안에 fullName field가 존재하지 않기 때문
  이제 fullName의 resolver를 만들때가 된것이다

  * 만약 type Query가 allUsers를 가지고있다면
  이것에 대한 resolver의 이름도 allUsers여야 하고 Query안에 있어야한다

  **** 이런 로직에 의하면 type User의 fullName에 대한
  resolver를 만들 수 있다는것이다

  Query, allUsers에 콘솔을 나눠서 찍어보면
  allUsers가 먼저 호출된것을 볼 수 잇다
  일단 allUsers resolver에 먼저 갔다는 뜻이고 거기 있는 모든 data를 가지고왔다는것이다
  그리고 graphQL은 allUsers가 return하는 data에 
  fullName field가 없다는것을 알게되었는데 우리의 request에는 있었다
  그래서 resolver를 찾으려 할것이고 type User의 field이름이 fullName인것을 찾아서
  그 resolver를 실행하는것이다

  이제 root argument안을 봐볼것이다

  * root *
  여기에는 fullName을 호출하는 User object가 있을것이다
  root를 가져오면 fullName을 호출하는 User를 보게될것

  콘솔을 열어보면 allUsers는 한번만 호출되고 fullName은 두번 호출되었다
  user들의 fullName들을 graphQL이 찾으려고했기때문에 
  이 resolver가 처음 호출되었을때는 id가 1인것을 받아오고 두번째로 id가 2인것을 받은것이다
*/