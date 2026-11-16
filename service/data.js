// 接客練習データ。出典: G:\共有ドライブ\Gallery Seek\作家資料\<作家>\ の作家資料ダイジェスト(略歴/作品傾向/FAQ/営業トーク)と制作資料。価格(第5節)は使わない。
// 梅田綾香は本人資料(個展コンセプト)のみ。AI解釈・アニミズム断定はしない。個展/シリーズ名と年を明記し、現行(emerge 2026.11)を先頭に置く。
const ARTISTS = [
  {id:"umeda_emerge", name:"梅田綾香 emerge(2026.11)", en:"Ayaka Umeda - emerge, Nov 2026",
   statement:[
    ["Ayaka Umeda was born in Hiroshima in 1993 and works with batik, the wax-resist dyeing technique.","梅田綾香は1993年広島県生まれで、蝋染めで制作しています。"],
    ["This exhibition is called emerge.","今回の個展のタイトルは「emerge」です。"],
    ["She pursues a world that only wax-resist dyeing can create.","彼女は、蝋染めならではの世界を追求しています。"],
    ["From a phenomenon that appears on a single cloth, to fragments, to a system, and then to a world.","一枚の布に現れる現象から、断片、システム、そして世界へと広がっていきます。"],
    ["She draws on the structuralism of Claude Levi-Strauss and his idea of bricolage.","レヴィ=ストロースの構造主義と「ブリコラージュ」の考え方を参照しています。"],
    ["Dye moves, bleeds, and resists the wax, so the result can never be fully controlled.","染料は動き、にじみ、蝋をはじくので、結果を完全には制御できません。"],
    ["At the end, the wax is removed, so the process leaves no visible trace on the surface.","最後に蝋を落とすので、制作過程の痕跡は表面に残りません。"],
    ["With this show, she starts again from the phenomenon and lets a world emerge.","この展覧会で彼女は再び現象から始め、世界を立ち上がらせます。"]],
   explain:[
    ["Her works are made with wax and dye on cloth.","作品は布に蝋と染料で制作されています。"],
    ["She does not control the color completely. She lets the dye move, and works with that movement.","色を完全には操らず、染料の動きと共に制作しています。"],
    ["Because the wax is removed at the end, you cannot see the process, only the result.","最後に蝋を落とすため、過程は見えず、結果だけが残ります。"]],
   suggest:[
    ["Please look closely at the places where the colors meet. That is where the dye moved by itself.","色が出会う部分をぜひ近くでご覧ください。染料が自ら動いた場所です。"]]},
  {id:"umeda_past", name:"梅田綾香 歴代シリーズ", en:"Ayaka Umeda - past series",
   statement:[
    ["In 2025, she presented Inaudible Orchestra.","2025年に「Inaudible Orchestra」を発表しました。"],
    ["In 2024, she presented Hollow and Blink.","2024年に「空洞と瞬き(Hollow and Blink)」を発表しました。"],
    ["In 2023, she held a solo exhibition called Last Flowers at Gallery Seek in Ginza.","2023年に銀座のGallery Seekで個展「花隠れ(Last Flowers)」を開催しました。"],
    ["In 2022, she presented Multidimensional Biotope.","2022年に「多元的ビオトープ」を発表しました。"],
    ["Her themes have changed with each series over time.","テーマはシリーズごと、時系列で少しずつ変化しています。"]],
   explain:[
    ["She received the ARTIST NEW GATE Gallery Seek Prize in 2021.","2021年にARTIST NEW GATE Gallery Seek賞を受賞しました。"],
    ["She has also shown her work at ART TAIPEI and the Affordable Art Fair Hong Kong.","ART TAIPEIやAffordable Art Fair Hong Kongにも出品しています。"]],
   suggest:[
    ["If you like this piece, I can show you works from her other series too.","この作品がお好きなら、他のシリーズの作品もご紹介できます。"]]},
  {id:"harada", name:"原田武", en:"Takeshi Harada",
   statement:[
    ["Takeshi Harada was born in Aichi in 1984 and lives in Akitakata, Hiroshima.","原田武は1984年愛知県生まれで、広島県安芸高田市に住んでいます。"],
    ["He makes small living things, such as insects, frogs, and plants, out of metal.","虫やカエル、植物などの小さな生き物を金属で作っています。"],
    ["His theme is nostalgia.","テーマは「郷愁」です。"],
    ["He recreates the joy he felt as a child, watching nature with great curiosity.","子供の頃に自然を夢中で観察して感じた喜びを再構築しています。"],
    ["He says realism is not the goal. It comes naturally as he recalls his memories.","写実が目的ではなく、記憶をたどるうちに自然と生まれると語っています。"],
    ["He does not show off technique. He expresses the air of a work through balance and empty space.","技術を見せるのではなく、バランスと余白で空気感を表現します。"]],
   explain:[
    ["He uses no paint. All the colors come from the metal itself, chemical reactions, and heating with a flame.","塗料は使いません。色はすべて金属自体、化学反応、火による着色です。"],
    ["He hammers a metal sheet into shape, and joins the parts with welding or silver solder.","金属板を叩いて成形し、溶接や銀ろうでパーツを接合します。"],
    ["He won the Grand Prize at the Tokyo Midtown Award in 2014.","2014年のTokyo Midtown Awardでグランプリを受賞しました。"],
    ["He holds solo exhibitions at Gallery Seek, such as scenery in 2023.","2023年の「scenery」など、Gallery Seekで個展を開いています。"]],
   suggest:[
    ["Some of his boxes and incense burners are actually usable. The surprise is part of the fun.","箱や香炉の中には実際に使えるものがあります。気づく楽しさも魅力です。"],
    ["You can dust it with a soft cloth, and the color can be restored if it ever changes.","柔らかい布で埃を払えば十分で、色が変わっても元に戻すことができます。"]]},
  {id:"okazaki", name:"岡﨑実央", en:"Mio Okazaki",
   statement:[
    ["Mio Okazaki was born in Sapporo in 1995 and graduated from Musashino Art University.","岡﨑実央は1995年札幌生まれで、武蔵野美術大学を卒業しました。"],
    ["She paints pro wrestling in the style of Cubism.","プロレスをキュビズムの手法で描いています。"],
    ["Fans surround the ring from 360 degrees, and each seat has a different view.","観客はリングを360度取り囲み、席ごとに見え方が違います。"],
    ["She puts all those views into one painting.","そのすべての視点を一枚の絵に収めています。"],
    ["She used to work for Weekly Pro Wrestling magazine.","以前は週刊プロレスの編集部で働いていました。"],
    ["She says it would be a waste to pass by without knowing pro wrestling, so her art is her way of introducing it.","プロレスを知らずに通り過ぎるのはもったいないので、作品でその魅力を紹介したいと語っています。"]],
   explain:[
    ["She uses acrylic paint on canvas, and sometimes changes the shape of the canvas to suit the motif.","アクリル絵具をキャンバスに使い、モチーフに合わせて形を変えることもあります。"],
    ["She paints freehand, without a sketch.","下書きなしでフリーハンドで描きます。"],
    ["She won two prizes at the first ARTIST NEW GATE in 2021.","2021年の第1回ARTIST NEW GATEで2つの賞を受賞しました。"],
    ["Since 2024, she has also painted other sports, such as baseball, rugby, and horse racing.","2024年からは野球、ラグビー、競馬など他のスポーツも描いています。"]],
   suggest:[
    ["You do not need to know pro wrestling to enjoy her work. Please enjoy the energy of the crowd.","プロレスを知らなくても楽しめます。観客の熱気をお楽しみください。"],
    ["If you have a favorite sport, let me check whether a commission is possible.","お好きなスポーツがあれば、オーダーが可能か確認いたします。"]]},
  {id:"sizzle", name:"Sizzle(しずる)", en:"Sizzle",
   statement:[
    ["Sizzle is a painter based in Tokyo. She taught herself to paint and began her career in 2022.","Sizzleは東京在住の画家で、独学で絵を学び2022年に活動を始めました。"],
    ["Her theme is visual language.","主題は「視覚言語」です。"],
    ["She applies the idea of image schema from cognitive science to painting.","認知科学の「イメージスキーマ」の考え方を絵画に応用しています。"],
    ["She also draws on the human tendency to project meaning onto vague information.","あいまいな情報に意味を見出す人間の心理(無意識の投影)も取り入れています。"],
    ["She avoids concrete motifs, so every viewer can have a different experience.","具体的なモチーフを避けるので、鑑賞者ごとに違う体験が生まれます。"]],
   explain:[
    ["Image schema is a concept from cognitive science. It means patterns of thought we naturally gain from bodily experience.","イメージスキーマは認知科学の概念で、身体的経験から自然に得る思考パターンのことです。"],
    ["For example, we understand the phrase 'a full heart' because we know the idea of a container.","たとえば「心が満たされる」という表現は、「容器」のイメージを知っているから感覚的に分かります。"],
    ["She uses tools with physical limits, such as a painting knife and a stapler, and their marks remain on the canvas.","ペインティングナイフやステープラーなど物理的な制約のある道具を使い、その痕跡が画面に残ります。"],
    ["In 2025, she held a solo show called Resonance at Gallery Seek, and won the Gallery Seek Prize at ARTIST NEW GATE.","2025年にGallery Seekで個展「共鳴／残響 Resonance」を開き、ARTIST NEW GATEでGallery Seek賞を受賞しました。"]],
   suggest:[
    ["There is no right answer. Please enjoy what you see in it.","正解はありません。ご自分が感じたものをお楽しみください。"],
    ["The marks of the knife and the stapler look very different in person, so please come closer.","ナイフやステープラーの痕跡は実物だと印象が違いますので、近くでご覧ください。"]]},
  {id:"furukawa", name:"古川千夏", en:"Chinatsu Furukawa",
   statement:[
    ["Chinatsu Furukawa makes cloisonne, called shippo in Japanese, on pure silver.","古川千夏は純銀の素地に七宝を制作しています。"],
    ["Usually, the silver wire is polished away in this technique.","通常この技法では、銀線は研磨で消えてしまいます。"],
    ["She leaves it standing out on purpose, so the line becomes the main subject, not just a border.","彼女はあえて突出させ、線を境界ではなく主役にしています。"],
    ["The slightly raised lines create soft shadows, and the look changes with the light and the angle.","わずかに浮いた線がやわらかな陰影を生み、光や角度で表情が変わります。"]],
   explain:[
    ["Cloisonne is a technique of firing glass-like glaze onto metal at about 800 degrees Celsius.","七宝は、金属にガラス質の釉薬を約800度で焼き付ける技法です。"],
    ["She makes everything herself, from hammering the metal base to the firing.","金属の素地を叩いて作るところから焼成まで、すべて自分で行います。"],
    ["Making a lidded box that fits perfectly is very difficult, because the firing causes distortion.","焼成で歪みが出るため、蓋がぴったり合う蓋物を作るのは非常に難しいです。"],
    ["Her work is in the collection of Ryoko-in Temple in Kyoto, and she has exhibited at KOGEI Art Fair Kanazawa every year since 2022.","作品は京都の龍光院に収蔵され、2022年からKOGEI Art Fair Kanazawaに毎年出品しています。"]],
   suggest:[
    ["Please look at it from different angles. The silver lines and the colors change with the light.","いろいろな角度からご覧ください。光で銀線と色が変わります。"],
    ["Her wall pieces have been installed in apartment and office entrances.","壁掛け作品は、マンションやオフィスのエントランスにも設置されています。"]]}
];

// リスニング: お客様の想定質問(英語を聞き取る)。[カテゴリ, 英語, 日本語]
const QUESTIONS = [
  ["General","Could you tell me about this artwork?","この作品について教えていただけますか？"],
  ["General","Who is the artist?","作家はどなたですか？"],
  ["General","What is the concept behind this piece?","この作品のコンセプトは何ですか？"],
  ["General","What materials did the artist use?","作家は何の素材を使っていますか？"],
  ["General","How long did it take to make this?","制作にどのくらいかかりましたか？"],
  ["General","Is this a one-of-a-kind piece?","これは一点ものですか？"],
  ["General","Is this artwork for sale?","この作品は販売されていますか？"],
  ["General","Does it come with a frame?","額縁は付いていますか？"],
  ["General","What is the size of this piece?","この作品のサイズはどれくらいですか？"],
  ["General","Would it look good in my living room?","リビングに合いますか？"],
  ["General","Can I see more works by this artist?","この作家の他の作品も見られますか？"],
  ["General","Does this artist have an exhibition coming up?","この作家の展覧会は予定されていますか？"],
  ["Price","How much is this?","これはいくらですか？"],
  ["Price","Is there any discount?","割引はありますか？"],
  ["Price","Can I pay by credit card?","クレジットカードで払えますか？"],
  ["Price","Is tax-free shopping available?","免税で買えますか？"],
  ["Delivery","Can you ship it overseas?","海外へ送れますか？"],
  ["Delivery","How long will delivery take?","お届けにどのくらいかかりますか？"],
  ["Delivery","Can I take it with me today?","今日持ち帰れますか？"],
  ["Delivery","Can I hold it while I think about it?","考える間、取り置きできますか？"],
  ["Gallery","Are you open every day?","毎日開いていますか？"],
  ["Gallery","Is photography allowed here?","撮影してもいいですか？"],
  ["Gallery","Do you have a catalog or a business card?","カタログか名刺はありますか？"],
  ["Gallery","Do you take consignment or purchase artworks?","作品の委託や買取はしていますか？"],
  ["Umeda","What is the exhibition emerge about?","個展「emerge」はどんな内容ですか？"],
  ["Umeda","What is batik?","蝋染め(バティック)とは何ですか？"],
  ["Umeda","Can the artist control the colors?","作家は色をコントロールできますか？"],
  ["Harada","Did the artist use paint?","塗料は使っていますか？"],
  ["Harada","How is the metal shaped?","金属はどうやって形づくっていますか？"],
  ["Harada","Can I really use this incense burner?","この香炉は実際に使えますか？"],
  ["Harada","Will the metal change color over time?","金属は経年で色が変わりますか？"],
  ["Okazaki","Do I need to know pro wrestling to enjoy this?","プロレスを知らなくても楽しめますか？"],
  ["Okazaki","Why does she use Cubism?","なぜキュビズムを使うのですか？"],
  ["Okazaki","Does she paint any sports besides wrestling?","プロレス以外のスポーツも描きますか？"],
  ["Okazaki","Can I order a custom piece?","オーダー制作はできますか？"],
  ["Sizzle","Is this an abstract painting?","これは抽象画ですか？"],
  ["Sizzle","What is image schema?","イメージスキーマとは何ですか？"],
  ["Sizzle","What tools did the artist use?","作家はどんな道具を使いましたか？"],
  ["Sizzle","Does the artist do live painting?","作家はライブペイントをしますか？"],
  ["Furukawa","What is cloisonne?","七宝とは何ですか？"],
  ["Furukawa","What is different about her work?","彼女の作品は何が違うのですか？"],
  ["Furukawa","Does the artist make the metal base herself?","素地も作家自身が作っていますか？"],
  ["Furukawa","How should I hang this on my wall?","壁にはどう飾ればいいですか？"]
];

// スピーキング: こちらの答え/提案/説明(日本語を見て英語で言う)。[type, 場面, 英語, 日本語]
const SPEAK = [
  ["答え","作品の説明","Of course. Let me tell you about this piece.","もちろんです。この作品についてご説明します。"],
  ["答え","作家の確認","This work is by one of our artists. Would you like to know more about the artist?","当ギャラリーの作家の作品です。作家についてもお話ししましょうか？"],
  ["答え","販売中か","Yes, this piece is available. Please let me check the details for you.","はい、こちらはご購入いただけます。詳細を確認いたします。"],
  ["答え","価格を聞かれた","Let me check the price for you. One moment, please.","価格を確認いたします。少々お待ちください。"],
  ["答え","割引を聞かれた","I'm afraid I need to ask our staff about that. May I get back to you?","スタッフに確認が必要です。後ほどご連絡してもよろしいですか？"],
  ["答え","支払い方法","Let me confirm the payment methods and get back to you.","お支払い方法を確認して、お答えします。"],
  ["答え","海外発送","Let me check whether we can arrange that for you.","対応できるか確認いたします。"],
  ["答え","取り置き","Let me confirm that with our staff. May I have your name and contact information?","スタッフに確認します。お名前とご連絡先をお伺いできますか？"],
  ["答え","わからない時","That's a good question. Let me find out and tell you.","いい質問ですね。調べてお答えします。"],
  ["答え","撮影","Yes, you may take photos. Please do not use a flash.","はい、撮影できます。フラッシュはご遠慮ください。"],
  ["提案","もう少し見てほしい","Please take your time. If you have any questions, please feel free to ask me.","ごゆっくりご覧ください。ご質問があれば、いつでもお声がけください。"],
  ["提案","他の作品を勧める","If you like this piece, I think you will also like the works over here.","この作品がお好きなら、こちらの作品もお気に召すと思います。"],
  ["提案","空間に合わせる","Could you tell me about the room where you would like to display it?","飾りたいお部屋について教えていただけますか？"],
  ["提案","部屋に飾る提案","If you send me a photo of your wall, I can suggest some works that would suit the space.","壁の写真を送っていただければ、合う作品をご提案できます。"],
  ["提案","メール登録","May I send you information about our next exhibition?","次回の展覧会のご案内をお送りしてもよろしいですか？"],
  ["提案","名刺・連絡先","Please take our card. You can contact us anytime.","こちらが名刺です。いつでもご連絡ください。"],
  ["提案","再来店","Please come again. We change our exhibitions regularly.","またぜひお越しください。展示は定期的に変わります。"],
  ["説明","一点もの","This is an original work, so there is only one in the world.","これは原作ですので、世界に一点だけです。"],
  ["説明","画廊の役割","We are a gallery in Shiodome, Tokyo, and we introduce contemporary Japanese artists.","私たちは東京・汐留のギャラリーで、日本の現代作家を紹介しています。"],
  ["説明","実物の良さ","The texture is very different in person, so please look at it closely.","実物は質感がまったく違いますので、近くでご覧ください。"],
  ["説明","作家との距離","We work directly with the artists, so we can tell you about their background and process.","作家と直接やりとりしているので、背景や制作過程をお話しできます。"]
];
