import Nav from "components/Nav/Nav";
import Container from './styled/container';

type Props = {
  nav: boolean;
  pageName: string;
  styles?: any;
  children: React.ReactNode;
}

/**
 * @description 제 생각에 interface로 props를 지정할때는 
 *              아래와 같이 사용할때 아니면
 *              위와같이 type 으로 주는게 좋을 것 같습니다
 */

// 기본 페이지와 어드민 페이지에서 공통적으로 사용되는 prop
interface IProps {
  propertyA: number;
  propertyB: string;
}

// 기본 페이지에서만 사용하는 속성 추가
interface CommonLayout extends IProps {
  commonPropertyA: number[];
}

// 어드민 페이지에서만 사용하는 속성 추가
interface AdminLayout extends IProps {
  adminPropertyA: string[];
}









/**
 * @description pages가 공통적으로 사용하는 컨테이너
 *              nav가 필요하지 않으면 nav에 false줘서 안보이게 처리 (default = true)
 */
const Layout = (props: Props) => {
  return (
    <>
      {props.nav ? <Nav pageName={props.pageName} /> : ''}
      <Container style={props.styles}>
        {props.children}
      </Container>
    </>
  )
};

Layout.defaultProps = {
  nav: true,
};

export default Layout;