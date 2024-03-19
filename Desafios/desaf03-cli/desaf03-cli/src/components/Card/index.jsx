import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles';
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://s3-alpha-sig.figma.com/img/76dc/2afe/34138bf3e5fa50890ac096b57e9cd9be?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YDCwZMRaqsupx7CHkFXvI0tvZBAQvgHjy37SsLq1i9A3ir9w04MWxwYSntd59uT3cfVfpn-w5nKl~G61e7i0NIMx8m~eEYg2~59BowkNyjRlp6xRvep9tnR1HblAogWbSRp2bNd03qDpABz9SqudZiTHvMxoe1FWDvHvYA9OcypSp1335RibOpLitob0OteqK0WgCJCgi9d9KFCTsHyuwXFvRzk8fHx-VZ8zW7YQ8VpE0vEIpvCXopfIYGw3osoGukNfjAcQz4xbO9hyo3U0nIsmhBm4wy0NALaOamLMIScexzhz5MLKupe7iIcf9rCpN~OofYIvSkcjY8WG7WjMAg__"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
         <div>
          <h4>Pablo Henrique</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }