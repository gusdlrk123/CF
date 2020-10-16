var artistName = {
  artist1 :{
    name : '임하나',
    name_e :
    `
    <span>Im</span>
    <span>Ha</span>
    <span>Na</span>
    `
  },
  artist2 :{
    name : '전두울',
    name_e :
    `
    <span>Jun</span>
    <span>Du</span>
    <span>Ul</span>
    `
  },
  artist3 :{
    name : '김세엣',
    name_e :
    `
    <span>Kim</span>
    <span>Se</span>
    <span>Et</span>
    `
  },
  artist4 :{
    name : '박네엣',
    name_e :
    `
    <span>Park</span>
    <span>Ne</span>
    <span>Et</span>
    `
  },
  artist5 :{
    name : '이다섯',
    name_e :
    `
    <span>Lee</span>
    <span>Da</span>
    <span>Seot</span>
    `
  },
  artist6 :{
    name : '신여섯',
    name_e :
    `
    <span>Sin</span>
    <span>Yeo</span>
    <span>Seot</span>
    `
  }
}

var artist = getPara("artist");

switch (artist) {
  case '1':
  var object = {
    popupUrl : '',
    obj_index : 0,
    artist_index : 1,
    artwork_length : 10,
    title : {
      title0 : 'show me the money',
      title1 : 'sheep wheel'
    },
    year : {
      year0 : 1999,
      year1 : 2020
    },
    genre : {
      genre0 : '회화',
      genre1 : '소묘'
    },
    material : {
      material0 : '캔버스',
      material1 : '흙'
    },
    size : {
      size0 : '11X11',
      size1 : '33X55'
    },
    name : artistName.artist1.name,
    name_e : artistName.artist1.name_e,
    birth : '2018-11-24',
    introduce :
    `
    평면 작품과 가변설치 등의 작품 활동을 하고 있는 박준석입니다.
    이외에도 전시, 프로젝트, 프로그램 등의 기획을 겸하고 있습니다.
     작품으로나마 즐거운 만남이 되길 희망합니다.
     `,
    note :
    `<p>
      흑과 백의 색은 어두움과 빛, 보이는 것과 보이지 않는 것 사이의 간극을 표현한다. 빛과 그림자가 맞닿은 물체의 구조적인 속성을 파악하여 물체가 갖는 물성과 빛의 반사에 대한 표현을 빛에서의 형상과 어둠에서의 형상으로 그려낸다.
캔버스는 그림이 그려지는 공간으로, 평면적인 공간에 시각적인 착각을 통하여 3차원을 보여 줄 수 있는 공간이다. 여기에 두 가지의 공간을 더 사용한다. 전시장의 벽과 가변설치로 존재하게 된 테이블이다.
    </p>
    <p>
작품에서 보이는 관계는 첫 번째는 공간이며 두 번째는 사물이다. 벽의 공간 A, 캔버스 공간 B(공간 속의 사물), 테이블 공간 C로 본다면 A는 그림이 걸리고 B는 캔버스(틀) 사물이지만, C는 화병을 받치고 있는 공간이다. C는 A의 공간과 만나 서로 관계 속에서 공간을 공유하고 환유한다. 서로 다른 공간들은 그것들만의 코드를 가지고 있으며 서로 다른 곳에 존재 하지만 관계와 상호작용을 통해 어울림 또는 공간의 공존으로 변형되어 하나를 이룬다. 평면작업과 가변설치로 물체의 성질과 평면공간의 삼투적인 변화를 나타내고자 하였다.
    </p>
    <p class="last">
      작품 안에서의 체크들은 공간과 사물의 모습을 나타내는데 이것은 그리드로서 캔버스의 가상공간을 나타내어 시각적 질서와 일관성을 보여준다. 단순하고 반복적인 패턴을 의도적으로 깨트리고 물체를 형상화하여 코드를 이루고 있는 패턴을 비코드화하여 가시적인 형태로 나타낸다. 정해진 틀을 깨트리고 부수며 그리고 변형하는 것은 새로움을 발견을 할 수 있는 한가지의 방법으로 대상에 관계없이 본연의 모습을 혹은 본질에 대해 의문을 던져 의미(깨달음)를 찾아보고자한다.
    </p>`,
    edu :
    `<p class="last">
      2015.02 홍익대학교 회화 석사졸업
    </p>`,
    award :
    `<p class="last">
      <span>2019.03	新정물, 시대정물/에코락갤러리</span>
      <span>2019.02	살롱 드 배다리/사진공간배다리</span>
      <span>2018.10	하이유스페스티벌/송도트라이보울</span>
      <span>2018.10	아트마이닝서울/DDP</span>
      <span>2018.10	하이유스페스티벌/송도트라이보울</span>
      <span>2018.07	지브라아트페어/대안공간눈</span>
      <span>2018.06	Translated structure 개인전/대안공간 눈</span>
      <span>2018.05	C-Festival/코엑스A Hall</span>
      <span>2018.01	오산시립미술관 新소장품전/오산시립미술관</span>
      <span>2016.08	Shadow in the morning개인전/대담미술관</span>
      <span>2015.04	Same face different idea개인전/동탄아트스페이스</span>
    </p>`
  };
    break;
  case '2':
  var object = {
    popupUrl : '',
    obj_index : 0,
    artist_index : 2,
    artwork_length : 10,
    title : {
      title0 : 'show me the money',
      title1 : 'sheep wheel'
    },
    year : {
      year0 : 1999,
      year1 : 2020
    },
    genre : {
      genre0 : '회화',
      genre1 : '소묘'
    },
    material : {
      material0 : '캔버스',
      material1 : '흙'
    },
    size : {
      size0 : '11X11',
      size1 : '33X55'
    },
    name : artistName.artist2.name,
    name_e : artistName.artist2.name_e,
    birth : '2018-11-24',
    introduce :
    `
    평면 작품과 가변설치 등의 작품 활동을 하고 있는 박준석입니다.
    이외에도 전시, 프로젝트, 프로그램 등의 기획을 겸하고 있습니다.
     작품으로나마 즐거운 만남이 되길 희망합니다.
     `,
    note :
    `<p>
      흑과 백의 색은 어두움과 빛, 보이는 것과 보이지 않는 것 사이의 간극을 표현한다. 빛과 그림자가 맞닿은 물체의 구조적인 속성을 파악하여 물체가 갖는 물성과 빛의 반사에 대한 표현을 빛에서의 형상과 어둠에서의 형상으로 그려낸다.
캔버스는 그림이 그려지는 공간으로, 평면적인 공간에 시각적인 착각을 통하여 3차원을 보여 줄 수 있는 공간이다. 여기에 두 가지의 공간을 더 사용한다. 전시장의 벽과 가변설치로 존재하게 된 테이블이다.
    </p>
    <p>
작품에서 보이는 관계는 첫 번째는 공간이며 두 번째는 사물이다. 벽의 공간 A, 캔버스 공간 B(공간 속의 사물), 테이블 공간 C로 본다면 A는 그림이 걸리고 B는 캔버스(틀) 사물이지만, C는 화병을 받치고 있는 공간이다. C는 A의 공간과 만나 서로 관계 속에서 공간을 공유하고 환유한다. 서로 다른 공간들은 그것들만의 코드를 가지고 있으며 서로 다른 곳에 존재 하지만 관계와 상호작용을 통해 어울림 또는 공간의 공존으로 변형되어 하나를 이룬다. 평면작업과 가변설치로 물체의 성질과 평면공간의 삼투적인 변화를 나타내고자 하였다.
    </p>
    <p class="last">
      작품 안에서의 체크들은 공간과 사물의 모습을 나타내는데 이것은 그리드로서 캔버스의 가상공간을 나타내어 시각적 질서와 일관성을 보여준다. 단순하고 반복적인 패턴을 의도적으로 깨트리고 물체를 형상화하여 코드를 이루고 있는 패턴을 비코드화하여 가시적인 형태로 나타낸다. 정해진 틀을 깨트리고 부수며 그리고 변형하는 것은 새로움을 발견을 할 수 있는 한가지의 방법으로 대상에 관계없이 본연의 모습을 혹은 본질에 대해 의문을 던져 의미(깨달음)를 찾아보고자한다.
    </p>`,
    edu :
    `<p class="last">
      2015.02 홍익대학교 회화 석사졸업
    </p>`,
    award :
    `<p class="last">
      <span>2019.03	新정물, 시대정물/에코락갤러리</span>
      <span>2019.02	살롱 드 배다리/사진공간배다리</span>
      <span>2018.10	하이유스페스티벌/송도트라이보울</span>
      <span>2018.10	아트마이닝서울/DDP</span>
      <span>2018.10	하이유스페스티벌/송도트라이보울</span>
      <span>2018.07	지브라아트페어/대안공간눈</span>
      <span>2018.06	Translated structure 개인전/대안공간 눈</span>
      <span>2018.05	C-Festival/코엑스A Hall</span>
      <span>2018.01	오산시립미술관 新소장품전/오산시립미술관</span>
      <span>2016.08	Shadow in the morning개인전/대담미술관</span>
      <span>2015.04	Same face different idea개인전/동탄아트스페이스</span>
    </p>`
  };
    break;
  case '3':
  var object = {
    popupUrl : '',
    obj_index : 0,
    artist_index : 3,
    artwork_length : 10,
    title : {
      title0 : 'show me the money',
      title1 : 'sheep wheel'
    },
    year : {
      year0 : 1999,
      year1 : 2020
    },
    genre : {
      genre0 : '회화',
      genre1 : '소묘'
    },
    material : {
      material0 : '캔버스',
      material1 : '흙'
    },
    size : {
      size0 : '11X11',
      size1 : '33X55'
    },
    name : artistName.artist3.name,
    name_e : artistName.artist3.name_e,
    birth : '2018-11-24',
    introduce :
    `
    평면 작품과 가변설치 등의 작품 활동을 하고 있는 박준석입니다.
    이외에도 전시, 프로젝트, 프로그램 등의 기획을 겸하고 있습니다.
     작품으로나마 즐거운 만남이 되길 희망합니다.
     `,
    note :
    `<p>
      흑과 백의 색은 어두움과 빛, 보이는 것과 보이지 않는 것 사이의 간극을 표현한다. 빛과 그림자가 맞닿은 물체의 구조적인 속성을 파악하여 물체가 갖는 물성과 빛의 반사에 대한 표현을 빛에서의 형상과 어둠에서의 형상으로 그려낸다.
캔버스는 그림이 그려지는 공간으로, 평면적인 공간에 시각적인 착각을 통하여 3차원을 보여 줄 수 있는 공간이다. 여기에 두 가지의 공간을 더 사용한다. 전시장의 벽과 가변설치로 존재하게 된 테이블이다.
    </p>
    <p>
작품에서 보이는 관계는 첫 번째는 공간이며 두 번째는 사물이다. 벽의 공간 A, 캔버스 공간 B(공간 속의 사물), 테이블 공간 C로 본다면 A는 그림이 걸리고 B는 캔버스(틀) 사물이지만, C는 화병을 받치고 있는 공간이다. C는 A의 공간과 만나 서로 관계 속에서 공간을 공유하고 환유한다. 서로 다른 공간들은 그것들만의 코드를 가지고 있으며 서로 다른 곳에 존재 하지만 관계와 상호작용을 통해 어울림 또는 공간의 공존으로 변형되어 하나를 이룬다. 평면작업과 가변설치로 물체의 성질과 평면공간의 삼투적인 변화를 나타내고자 하였다.
    </p>
    <p class="last">
      작품 안에서의 체크들은 공간과 사물의 모습을 나타내는데 이것은 그리드로서 캔버스의 가상공간을 나타내어 시각적 질서와 일관성을 보여준다. 단순하고 반복적인 패턴을 의도적으로 깨트리고 물체를 형상화하여 코드를 이루고 있는 패턴을 비코드화하여 가시적인 형태로 나타낸다. 정해진 틀을 깨트리고 부수며 그리고 변형하는 것은 새로움을 발견을 할 수 있는 한가지의 방법으로 대상에 관계없이 본연의 모습을 혹은 본질에 대해 의문을 던져 의미(깨달음)를 찾아보고자한다.
    </p>`,
    edu :
    `<p class="last">
      2015.02 홍익대학교 회화 석사졸업
    </p>`,
    award :
    `<p class="last">
      <span>2019.03	新정물, 시대정물/에코락갤러리</span>
      <span>2019.02	살롱 드 배다리/사진공간배다리</span>
      <span>2018.10	하이유스페스티벌/송도트라이보울</span>
      <span>2018.10	아트마이닝서울/DDP</span>
      <span>2018.10	하이유스페스티벌/송도트라이보울</span>
      <span>2018.07	지브라아트페어/대안공간눈</span>
      <span>2018.06	Translated structure 개인전/대안공간 눈</span>
      <span>2018.05	C-Festival/코엑스A Hall</span>
      <span>2018.01	오산시립미술관 新소장품전/오산시립미술관</span>
      <span>2016.08	Shadow in the morning개인전/대담미술관</span>
      <span>2015.04	Same face different idea개인전/동탄아트스페이스</span>
    </p>`
  };
    break;


}

var objKeys = Object.keys(object);
