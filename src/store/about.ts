import { Store } from "../core/heropy";

//https://transform.tools/json-to-typescript에서 인터페이스 내용을 타이핑 없이 한 번에 정돈할 수 있다.
interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

//여기서 정보를 바꿔주면 다른 페이지에 한 번에 반영된다.

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'HEROPY / ParkYoungWoong',
  email: 'thesecon@gmail.com',
  blog: 'https://heropy.blog',
  github: 'https://github.com/ParkYoungWoong',
  repository: 'https://github.com/ParkYoungWoong/vanillajs-movie-app',  
})