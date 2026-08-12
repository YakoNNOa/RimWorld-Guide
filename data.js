const categories = [

{
  id:"beginner",
  icon:"🌱",
  name:"初心者ガイド",
  description:"ゲーム開始から最初の冬まで",

  sections:[

    {
      id:"start",
      icon:"🚀",
      name:"ゲーム開始",
      description:"最初にやるべきこと",

      articles:[

        {
          id:"first-day",
          title:"ゲーム開始直後にやること",
          description:"序盤の優先順位",

          tags:[
            "初心者",
            "序盤",
            "開始",
            "基地"
          ],

          answer:
          "最初は寝床・食料・備蓄場所の確保を優先する。立派な基地作りは後回しでいい。",

          content:`

          <h2>最初の目標</h2>

          <p>
          RimWorld序盤は「快適な生活」より
          「死なない環境作り」が重要。
          </p>

          <br>

          <h2>優先順位</h2>

          <ol>
          <li>寝床を作る</li>
          <li>備蓄場所を作る</li>
          <li>食料を確保する</li>
          <li>栽培を始める</li>
          <li>調理設備を作る</li>
          </ol>

          <br>

          <div class="answer">
          💡 最初の目標は「最初の冬を越えること」
          </div>

          `
        },


        {
          id:"priority",

          title:"仕事の優先度",

          description:"入植者の仕事設定",

          tags:[
            "仕事",
            "優先度",
            "設定"
          ],

          answer:
          "数字が小さいほど優先度が高い。重要な仕事は1や2に設定する。",

          content:`

          <h2>基本</h2>

          <ul>
          <li>1 → 最優先</li>
          <li>2 → 優先</li>
          <li>3 → 普通</li>
          <li>4 → 暇なら</li>
          </ul>


          <br>

          <div class="answer">
          💡 医療・消火・建築は高めがおすすめ。
          </div>

          `
        }

      ]
    },


    {
      id:"winter",

      icon:"❄️",

      name:"最初の冬",

      description:"寒さと食料不足対策",

      articles:[

        {
          id:"winter-survive",

          title:"最初の冬を乗り越える",

          description:"初心者が詰まりやすい冬対策",

          tags:[
            "冬",
            "寒い",
            "雪",
            "食料不足"
          ],

          answer:
          "秋までに食料を貯め、防寒着を準備する。冬に農業が止まることを前提にする。",

          content:`

          <h2>冬までに準備</h2>

          <ul>

          <li>
          食料を多めに保存
          </li>

          <li>
          冷凍庫を作る
          </li>

          <li>
          防寒着を作る
          </li>

          <li>
          暖房を準備
          </li>

          </ul>


          <br>

          <div class="answer">
          💡 序盤は冬に無理して農業するより備蓄が安定。
          </div>

          `
        }

      ]

    }

  ]

},



{
  id:"food",

  icon:"🍚",

  name:"食料・農業",

  description:"栽培・狩猟・保存",

  sections:[


    {

      id:"farming",

      icon:"🌱",

      name:"農業",

      description:"作物を育てる基本",

      articles:[


        {

          id:"crops",

          title:"序盤のおすすめ作物",

          description:"何を植えるべき？",

          tags:[
            "農業",
            "栽培",
            "米",
            "ジャガイモ",
            "トウモロコシ"
          ],

          answer:
          "序盤は米やジャガイモが安定。食料不足を防ぐため早めに畑を作る。",

          content:`

          <h2>おすすめ</h2>

          <ul>

          <li>
          米：成長が早い
          </li>

          <li>
          ジャガイモ：悪い土地でも育つ
          </li>

          <li>
          トウモロコシ：大量収穫向き
          </li>

          </ul>


          <br>

          <div class="answer">
          💡 初心者は米＋ジャガイモが安定。
          </div>

          `

        },


        {

          id:"winter-farm",

          title:"冬の農業",

          description:"作物が育たない時の対策",

          tags:[
            "冬",
            "農業",
            "温室",
            "太陽灯"
          ],

          answer:
          "序盤は備蓄と狩猟で冬を越す。温室栽培は余裕ができてから。",

          content:`

          <h2>序盤の冬</h2>

          <ul>

          <li>
          秋までに収穫
          </li>

          <li>
          肉を確保
          </li>

          <li>
          革で防寒着作成
          </li>

          </ul>


          <br>

          <h2>慣れてきたら</h2>

          <p>
          太陽灯＋暖房で屋内農業が可能。
          </p>

          `

        }

      ]

    },


    {

      id:"hunting",

      icon:"🏹",

      name:"狩猟",

      description:"肉と革を確保",

      articles:[

        {

          id:"hunt",

          title:"動物を狩る方法",

          description:"狩猟指定のやり方",

          tags:[
            "狩猟",
            "動物",
            "肉",
            "革"
          ],

          answer:
          "動物一覧から狩猟指定し、狩猟担当者に武器を持たせる。",

          content:`

          <h2>手順</h2>

          <ol>

          <li>
          動物を選択
          </li>

          <li>
          狩猟指定
          </li>

          <li>
          武器確認
          </li>

          <li>
          狩猟担当が実行
          </li>

          </ol>


          <br>

          <div class="answer">
          ⚠️ 序盤は反撃する動物を避ける。
          </div>

          `

        }

      ]

    },


    {

      id:"storage",

      icon:"❄️",

      name:"保存",

      description:"食料を腐らせない",

      articles:[

        {

          id:"freezer",

          title:"冷凍庫の作り方",

          description:"食料保存の基本",

          tags:[
            "冷凍庫",
            "保存",
            "腐る",
            "クーラー"
          ],

          answer:
          "部屋を作り、クーラーで冷却して食料専用の備蓄場所にする。",

          content:`

          <h2>必要なもの</h2>

          <ul>

          <li>
          壁
          </li>

          <li>
          屋根
          </li>

          <li>
          クーラー
          </li>

          <li>
          備蓄ゾーン
          </li>

          </ul>

          `

        }

      ]

    }

  ]

}


];
