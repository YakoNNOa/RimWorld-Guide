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
,

{
  id:"base",

  icon:"🏠",

  name:"拠点・生活",

  description:"部屋・掃除・電力・温度管理",


  sections:[


    {

      id:"room",

      icon:"🛏️",

      name:"部屋作り",

      description:"快適な生活環境を作る",


      articles:[


        {

          id:"bedroom",

          title:"寝室の作り方",

          description:"心情を安定させる部屋作り",

          tags:[
            "寝室",
            "部屋",
            "心情",
            "ベッド"
          ],


          answer:
          "序盤は個室よりも、まず全員が眠れるベッドを用意することを優先する。",


          content:`

          <h2>
          序盤の寝室
          </h2>

          <p>
          最初は雑な寝床でもいいが、
          長期的には個室を作ると心情が安定する。
          </p>


          <br>


          <h2>
          注意点
          </h2>

          <ul>

          <li>
          屋根を付ける
          </li>

          <li>
          ベッドを置く
          </li>

          <li>
          温度を確認する
          </li>

          <li>
          汚れを減らす
          </li>

          </ul>


          <br>


          <div class="answer">

          💡 良い部屋は精神崩壊の予防になる。

          </div>

          `

        },


        {

          id:"cleaning",

          title:"自動で掃除する方法",

          description:"掃除担当を設定する",

          tags:[
            "掃除",
            "汚れ",
            "自動",
            "ホームエリア"
          ],


          answer:
          "仕事タブで掃除を有効にし、暇な入植者に掃除を担当させる。",


          content:`

          <h2>
          設定方法
          </h2>


          <ol>

          <li>
          仕事タブを開く
          </li>

          <li>
          掃除を有効にする
          </li>

          <li>
          優先度を設定する
          </li>

          </ol>


          <br>


          <h2>
          注意
          </h2>


          <p>
          ホームエリアが広すぎると、
          必要以上に掃除して時間を使う。
          </p>


          <br>


          <div class="answer">

          💡 調理場は特に清潔にする。

          </div>

          `

        }

      ]

    },



    {

      id:"power",

      icon:"⚡",

      name:"電力",

      description:"発電と設備管理",


      articles:[


        {

          id:"electricity",

          title:"電力の基本",

          description:"発電・電線・設備",

          tags:[
            "電力",
            "発電",
            "電線",
            "バッテリー"
          ],


          answer:
          "発電設備から電線をつなぎ、必要な設備へ電力を供給する。",


          content:`

          <h2>
          基本構成
          </h2>


          <ol>

          <li>
          発電設備を作る
          </li>

          <li>
          電線を引く
          </li>

          <li>
          設備を接続する
          </li>

          <li>
          必要ならバッテリー追加
          </li>

          </ol>


          <br>


          <div class="answer">

          ⚠️ 冷凍庫や暖房が止まると危険。

          </div>

          `

        },


        {

          id:"battery",

          title:"バッテリーの使い方",

          description:"停電対策",

          tags:[
            "バッテリー",
            "停電",
            "電力"
          ],


          answer:
          "発電できない時間帯を補うために使う。",


          content:`

          <h2>
          役割
          </h2>


          <p>
          太陽光発電などは夜に止まるため、
          バッテリーがあると安定する。
          </p>


          <br>


          <div class="answer">

          💡 ただし火災リスクには注意。

          </div>

          `

        }

      ]

    },



    {

      id:"corpse",

      icon:"☠️",

      name:"死体処理",

      description:"襲撃者の死体を片付ける",


      articles:[


        {

          id:"corpse-storage",

          title:"死体をどこに置く？",

          description:"序盤の死体処理方法",

          tags:[
            "死体",
            "襲撃者",
            "墓",
            "処理"
          ],


          answer:
          "拠点から離れた場所に死体置き場を作る。",


          content:`

          <h2>
          序盤の方法
          </h2>


          <ol>

          <li>
          拠点から離れた場所を選ぶ
          </li>

          <li>
          備蓄ゾーンを作る
          </li>

          <li>
          人間の死体だけ許可する
          </li>

          </ol>


          <br>


          <div class="answer">

          💡 死体を見ると心情が下がるので生活場所から離す。

          </div>

          `

        }

      ]

    }


  ]

}
