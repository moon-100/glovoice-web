# 공통 Layout

모든 List페이지에서 아래와 같은 형식으로 컴포넌트가 작성되고 있습니다.

```
  <>
    <Nav pageName="" />
    <Container>
      // children
    </Container>
  </>
```

Nav와 Container가 공통되는 부분은 따로 분리를 해서 작성하면 좋을것 같고

pageName의 경우 pathname 에서 가져오면 좋을 것 같아 코드를 추가해보았습니다.

참고용으로만 봐주시면 될것 같습니다.