const BREEDS = [
  {
    korean: '래브라도 리트리버', english: 'Labrador Retriever',
    apiPath: 'retriever/labrador', wikiTitle: 'Labrador Retriever',
    description: '다정하고 활발한 성격의 인기 최고 견종이에요! 지능이 높아 안내견·구조견으로 활약하고, 물을 정말 좋아한답니다. 아이들과 잘 놀아주는 든든한 친구예요. 🌊',
  },
  {
    korean: '골든 리트리버', english: 'Golden Retriever',
    apiPath: 'retriever/golden', wikiTitle: 'Golden Retriever',
    description: '온순하고 친근한 성격으로 온 가족의 사랑을 받아요! 인내심이 강하고 공 가져오기를 정말 좋아한답니다. 황금빛 털이 정말 아름다운 견종이에요. 🎾',
  },
  {
    korean: '저먼 셰퍼드', english: 'German Shepherd',
    apiPath: 'germanshepherd', wikiTitle: 'German Shepherd',
    description: '용감하고 충성스러운 경찰견의 대표! 지능이 높아 훈련이 잘 되고, 주인을 위해서라면 무엇이든 하는 헌신적인 성격이에요. 🛡️',
  },
  {
    korean: '프렌치 불독', english: 'French Bulldog',
    apiPath: 'bulldog/french', wikiTitle: 'French Bulldog',
    description: '명랑하고 애교 넘치는 아파트 인기 1위! 운동을 많이 안 해도 되고, 귀여운 박쥐 귀가 특징이에요. 코골이를 하는 걸로도 유명해요. 😴',
  },
  {
    korean: '잉글리시 불독', english: 'English Bulldog',
    apiPath: 'bulldog/english', wikiTitle: 'Bulldog',
    description: '느긋하고 온순한 영국의 대표 견종이에요! 용감하지만 공격적이지 않아 아이들과 잘 어울려요. 주름진 얼굴이 매력 포인트랍니다. 😎',
  },
  {
    korean: '푸들', english: 'Poodle',
    apiPath: 'poodle', wikiTitle: 'Poodle',
    description: '지능이 매우 높은 멋쟁이 견종! 곱슬거리는 털은 알레르기가 적어서 좋아요. 소형·중형·대형 세 가지 크기로 있답니다. 💇',
  },
  {
    korean: '비글', english: 'Beagle',
    apiPath: 'beagle', wikiTitle: 'Beagle',
    description: '호기심 많고 활발한 사냥개 출신이에요! 후각이 아주 뛰어나서 냄새를 잘 맡아요. 커다란 눈과 긴 귀가 정말 귀엽죠? 👃',
  },
  {
    korean: '로트와일러', english: 'Rottweiler',
    apiPath: 'rottweiler', wikiTitle: 'Rottweiler',
    description: '자신감 있고 용감한 수호견이에요! 충성스럽고 보호 본능이 강하지만, 잘 훈련되면 아이들을 지키는 든든한 친구예요. 💪',
  },
  {
    korean: '닥스훈트', english: 'Dachshund',
    apiPath: 'dachshund', wikiTitle: 'Dachshund',
    description: '긴 몸통과 짧은 다리가 트레이드마크! 땅굴 속 오소리를 잡는 사냥개였어요. 호기심 많고 용감한 소시지 강아지예요. 🌭',
  },
  {
    korean: '웰시 코기', english: 'Welsh Corgi',
    apiPath: 'corgi/pembroke', wikiTitle: 'Pembroke Welsh Corgi',
    description: '영국 여왕님이 가장 사랑한 견종! 짧은 다리이지만 목장에서 소를 몰던 용감한 개예요. 복슬복슬한 엉덩이가 인기 포인트예요. 👑',
  },
  {
    korean: '요크셔 테리어', english: 'Yorkshire Terrier',
    apiPath: 'terrier/yorkshire', wikiTitle: 'Yorkshire Terrier',
    description: '작은 몸이지만 용감한 성격의 소형견! 실크처럼 부드러운 긴 털이 특징이에요. 에너지가 넘치고 호기심이 아주 많아요. ✨',
  },
  {
    korean: '복서', english: 'Boxer',
    apiPath: 'boxer', wikiTitle: 'Boxer (dog)',
    description: '장난기 많고 아이들을 사랑하는 견종! 충성스럽고 놀이를 정말 좋아해요. 근육질 몸매이지만 성격은 아주 다정하답니다. 🥊',
  },
  {
    korean: '시베리안 허스키', english: 'Siberian Husky',
    apiPath: 'husky', wikiTitle: 'Siberian Husky',
    description: '썰매를 끄는 강인한 북방의 개! 두꺼운 이중 털로 혹독한 추위를 견뎌요. 늑대처럼 하울링 소리를 내는 것으로 유명해요. 🐺',
  },
  {
    korean: '그레이트 데인', english: 'Great Dane',
    apiPath: 'dane/great', wikiTitle: 'Great Dane',
    description: '세계에서 가장 키가 큰 견종 중 하나! 큰 덩치와 달리 성격은 매우 온순하고 다정해요. 거대한 몸으로 소파를 독차지하기도 해요. 🦕',
  },
  {
    korean: '도베르만', english: 'Doberman',
    apiPath: 'doberman', wikiTitle: 'Dobermann',
    description: '날렵하고 지능이 높은 경비견! 충성스럽고 보호 본능이 강해요. 잘 훈련되면 아주 다정한 가족견이 된답니다. 🔒',
  },
  {
    korean: '시추', english: 'Shih Tzu',
    apiPath: 'shihtzu', wikiTitle: 'Shih Tzu',
    description: '중국 황실에서 사랑받은 귀족 강아지! 온순하고 사교적인 성격이에요. 복슬복슬한 털과 납작한 얼굴이 사랑스러워요. 🏯',
  },
  {
    korean: '보스턴 테리어', english: 'Boston Terrier',
    apiPath: 'terrier/boston', wikiTitle: 'Boston Terrier',
    description: '턱시도를 입은 것처럼 보이는 미국 대표 소형견! 명랑하고 친근한 성격으로 도시 생활에 잘 맞아요. 키우기 쉬운 편이에요. 🎩',
  },
  {
    korean: '포메라니안', english: 'Pomeranian',
    apiPath: 'pomeranian', wikiTitle: 'Pomeranian (dog)',
    description: '폭신폭신한 털뭉치 같은 소형견! 작은 몸이지만 개성이 강하고 용감해요. 활발하고 호기심이 가득하답니다. 🧁',
  },
  {
    korean: '하바네세', english: 'Havanese',
    apiPath: 'havanese', wikiTitle: 'Havanese dog',
    description: '쿠바의 국견으로 쾌활하고 애교쟁이! 사람을 매우 좋아해서 혼자 있는 걸 싫어해요. 실키한 긴 털이 우아하게 흘러내린답니다. 🌺',
  },
  {
    korean: '셔틀랜드 십독', english: 'Shetland Sheepdog',
    apiPath: 'sheepdog/shetland', wikiTitle: 'Shetland Sheepdog',
    description: '스코틀랜드에서 양을 몰던 영리한 목양견! 훈련 능력이 뛰어나 대회에서 자주 우승해요. 유명한 목양견의 소형 버전처럼 귀엽게 생겼어요. 🏅',
  },
  {
    korean: '보더 콜리', english: 'Border Collie',
    apiPath: 'collie/border', wikiTitle: 'Border Collie',
    description: '세계에서 지능이 가장 높은 개로 알려진 견종! 양몰이 본능이 강하고 에너지가 넘쳐요. 프리스비·어질리티 대회의 단골 챔피언이에요. 🧠',
  },
  {
    korean: '말티즈', english: 'Maltese',
    apiPath: 'maltese', wikiTitle: 'Maltese dog',
    description: '순백색 긴 털의 우아한 귀족 강아지! 수천 년의 역사를 가진 오래된 견종이에요. 온순하고 사랑스러운 성격으로 인기가 많아요. 👸',
  },
  {
    korean: '사모예드', english: 'Samoyed',
    apiPath: 'samoyed', wikiTitle: 'Samoyed (dog)',
    description: '항상 웃는 것처럼 보이는 하얀 솜사탕! 시베리아에서 썰매를 끌고 사냥을 돕던 견종이에요. 친근하고 장난기가 많아 인기 최고예요. ☁️',
  },
  {
    korean: '코커 스패니얼', english: 'Cocker Spaniel',
    apiPath: 'spaniel/cocker', wikiTitle: 'Cocker Spaniel',
    description: '아름다운 물결 털과 긴 귀가 매력적인 견종! 명랑하고 온순한 성격이에요. 사냥도 잘하고 가족과 잘 어울리는 만능견이랍니다. 🌊',
  },
  {
    korean: '치와와', english: 'Chihuahua',
    apiPath: 'chihuahua', wikiTitle: 'Chihuahua (dog)',
    description: '세계에서 가장 작은 견종! 작지만 용감하고 자신감이 넘쳐요. 주인에 대한 충성심이 매우 강하고 애교가 많답니다. 💖',
  },
  {
    korean: '달마시안', english: 'Dalmatian',
    apiPath: 'dalmatian', wikiTitle: 'Dalmatian (dog)',
    description: '흰 바탕에 검은 점박이 무늬가 트레이드마크! 영화 101마리 달마시안으로 유명해졌어요. 활발하고 에너지가 넘쳐서 운동을 좋아한답니다. 🐾',
  },
  {
    korean: '퍼그', english: 'Pug',
    apiPath: 'pug', wikiTitle: 'Pug',
    description: '주름진 얼굴과 동그란 눈이 매력적인 소형견! 중국 황실에서 사랑받은 역사가 있어요. 유쾌하고 장난기 많아 웃음을 주는 개예요. 😂',
  },
  {
    korean: '시바 이누', english: 'Shiba Inu',
    apiPath: 'shiba', wikiTitle: 'Shiba Inu',
    description: '일본의 국견으로 자존심 강하고 독립적인 성격! 여우처럼 생긴 얼굴과 도도한 표정이 매력이에요. 인터넷 밈으로도 세계적으로 유명해졌어요. 🦊',
  },
  {
    korean: '아키타', english: 'Akita',
    apiPath: 'akita', wikiTitle: 'Akita (dog)',
    description: '일본의 충견 하치코로 세계에 알려진 견종! 충성심이 강하고 위엄 있는 대형견이에요. 주인을 끝까지 기다리는 헌신적인 성격이랍니다. 🗾',
  },
  {
    korean: '차우차우', english: 'Chow Chow',
    apiPath: 'chow', wikiTitle: 'Chow Chow',
    description: '사자처럼 풍성한 갈기 털과 보라빛 혀가 특징! 중국 고대 왕조부터 함께한 견종이에요. 고양이처럼 독립적이고 고고한 성격이랍니다. 🦁',
  },
  {
    korean: '알래스칸 말라뮤트', english: 'Alaskan Malamute',
    apiPath: 'malamute', wikiTitle: 'Alaskan Malamute',
    description: '썰매를 끄는 강인한 북극 대형견! 허스키보다 더 크고 힘이 세요. 늑대처럼 생겼지만 사람을 잘 따르고 친근하답니다. 🏔️',
  },
  {
    korean: '버니즈 마운틴 독', english: 'Bernese Mountain Dog',
    apiPath: 'mountain/bernese', wikiTitle: 'Bernese Mountain Dog',
    description: '스위스 알프스 출신의 3색 털 대형견! 온순하고 다정한 성격이에요. 아이들과 잘 어울리고 충성심이 강한 가족견이랍니다. ⛰️',
  },
  {
    korean: '세인트 버나드', english: 'Saint Bernard',
    apiPath: 'stbernard', wikiTitle: 'Saint Bernard (dog)',
    description: '눈 속에서 조난자를 구하는 구조견의 전설! 목에 작은 통을 달고 알프스를 누볐어요. 거대한 몸이지만 성격은 온화하고 아이들을 좋아해요. 🏔️',
  },
  {
    korean: '뉴펀들랜드', english: 'Newfoundland',
    apiPath: 'newfoundland', wikiTitle: 'Newfoundland (dog)',
    description: '물속에서 사람을 구하는 수영 실력자! 캐나다 출신의 거대한 검은 개예요. 성격이 온화하고 아이들과 잘 지내는 천사 같은 견종이에요. 🌊',
  },
  {
    korean: '그레이트 피레니즈', english: 'Great Pyrenees',
    apiPath: 'pyrenees', wikiTitle: 'Great Pyrenees',
    description: '눈처럼 새하얀 털의 피레네 산맥 출신 양치기 견종! 양 떼를 늑대로부터 지키던 수호신이에요. 위엄 있고 차분하지만 가족은 끝까지 지킨답니다. 🐑',
  },
  {
    korean: '로디지안 리지백', english: 'Rhodesian Ridgeback',
    apiPath: 'ridgeback/rhodesian', wikiTitle: 'Rhodesian Ridgeback',
    description: '등 중앙에 털이 반대 방향으로 자라는 특이한 견종! 아프리카에서 사자 사냥을 도왔던 용맹한 개예요. 충성스럽고 독립적인 성격이랍니다. 🦁',
  },
  {
    korean: '아이리시 울프하운드', english: 'Irish Wolfhound',
    apiPath: 'wolfhound/irish', wikiTitle: 'Irish Wolfhound',
    description: '세계에서 키가 가장 큰 견종 중 하나! 아일랜드에서 늑대와 사냥하던 고대 견종이에요. 거대한 몸과 달리 온순하고 사람을 매우 좋아한답니다. 🐺',
  },
  {
    korean: '와이마라너', english: 'Weimaraner',
    apiPath: 'weimaraner', wikiTitle: 'Weimaraner',
    description: '은빛 회색 털과 창백한 눈이 신비로운 독일 사냥개! 귀족이 즐기던 사냥에서 활약했어요. 에너지가 넘치고 주인과 함께하기를 좋아한답니다. 🌫️',
  },
  {
    korean: '비즐라', english: 'Vizsla',
    apiPath: 'vizsla', wikiTitle: 'Vizsla',
    description: '황금빛 붉은 털의 헝가리 포인터! 사냥과 가족 사랑을 동시에 잘하는 만능견이에요. 애정이 넘치고 항상 주인 곁에 붙어 있는 달라붙는 견종이랍니다. 🥇',
  },
  {
    korean: '살루키', english: 'Saluki',
    apiPath: 'saluki', wikiTitle: 'Saluki',
    description: '세계에서 가장 오래된 견종 중 하나로 이집트 파라오의 사냥개! 우아하고 날렵한 몸매로 빠르게 달려요. 조용하고 독립적인 고귀한 성격이랍니다. 👑',
  },
  {
    korean: '아프간 하운드', english: 'Afghan Hound',
    apiPath: 'hound/afghan', wikiTitle: 'Afghan Hound',
    description: '길고 우아한 실크 같은 털의 귀족 견종! 아프가니스탄 산악 지대 출신으로 빠르고 민첩해요. 도도한 성격이지만 주인에게는 충성스럽답니다. 💫',
  },
  {
    korean: '벨지안 말리노이즈', english: 'Belgian Malinois',
    apiPath: 'malinois', wikiTitle: 'Belgian Malinois',
    description: '군견·경찰견으로 가장 많이 활약하는 최고의 작업견! 지능과 체력이 뛰어나 어떤 훈련도 빠르게 익혀요. 미 특수부대와 함께 임무를 수행하기도 해요. 🪖',
  },
  {
    korean: '라사 압소', english: 'Lhasa Apso',
    apiPath: 'lhasa', wikiTitle: 'Lhasa Apso',
    description: '티베트 사원을 지키던 신성한 견종! 긴 풍성한 털로 온몸이 덮여 있어요. 작지만 자존심 강하고 경계심이 높아 훌륭한 집 지킴이랍니다. 🏯',
  },
  {
    korean: '비숑 프리제', english: 'Bichon Frise',
    apiPath: 'frise/bichon', wikiTitle: 'Bichon Frise',
    description: '솜사탕처럼 하얗고 폭신한 작은 견종! 명랑하고 애교가 넘쳐서 항상 주인을 웃게 해요. 털이 잘 빠지지 않아 알레르기가 있는 분들에게도 인기예요. 🍬',
  },
  {
    korean: '미니어처 슈나우저', english: 'Miniature Schnauzer',
    apiPath: 'schnauzer/miniature', wikiTitle: 'Miniature Schnauzer',
    description: '수염과 눈썹이 특징적인 독일 소형 테리어! 용감하고 에너지가 넘쳐요. 털이 잘 빠지지 않고 지능이 높아 훈련이 잘 되는 견종이랍니다. 🧔',
  },
  {
    korean: '잭 러셀 테리어', english: 'Jack Russell Terrier',
    apiPath: 'terrier/russell', wikiTitle: 'Jack Russell Terrier',
    description: '작은 몸에 폭발적인 에너지가 담긴 영국 테리어! 호기심이 많고 겁이 없어요. TV 드라마에도 자주 등장하는 사랑스럽고 장난꾸러기 견종이에요. ⚡',
  },
  {
    korean: '스코티시 테리어', english: 'Scottish Terrier',
    apiPath: 'terrier/scottish', wikiTitle: 'Scottish Terrier',
    description: '스코틀랜드 출신의 강인한 소형 테리어! 독립적이고 자존심 강한 개성 있는 성격이에요. 모노폴리 게임 말로도 유명한 사랑스러운 견종이랍니다. 🎩',
  },
  {
    korean: '케언 테리어', english: 'Cairn Terrier',
    apiPath: 'terrier/cairn', wikiTitle: 'Cairn Terrier',
    description: '영화 오즈의 마법사의 토토로 유명한 견종! 스코틀랜드 돌무덤에서 작은 동물을 사냥하던 개예요. 용감하고 호기심 많은 활발한 성격이랍니다. 🌈',
  },
  {
    korean: '오스트레일리안 캐틀 독', english: 'Australian Cattle Dog',
    apiPath: 'cattledog/australian', wikiTitle: 'Australian Cattle Dog',
    description: '오스트레일리아 목장에서 소를 몰던 영리한 견종! 파란빛 털 때문에 블루 힐러라고도 불려요. 에너지가 넘치고 지능이 높아 훈련을 즐긴답니다. 🐄',
  },
  {
    korean: '파피용', english: 'Papillon',
    apiPath: 'papillon', wikiTitle: 'Papillon (dog)',
    description: '나비처럼 생긴 귀여운 귀가 특징인 프랑스 소형견! 파피용은 프랑스어로 나비라는 뜻이에요. 지능이 매우 높고 민첩해 어질리티 대회에서 활약해요. 🦋',
  },
];
