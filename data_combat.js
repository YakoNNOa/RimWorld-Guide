const combatData = {

  id:"combat",

  icon:"⚔️",

  name:"戦闘・襲撃",

  description:"武器・防衛・襲撃対策・捕虜管理",

  sections:[


    {

      id:"basic-combat",

      icon:"🔫",

      name:"戦闘の基本",

      description:"武器選びと戦い方",

      articles:[


        {

          id:"weapon",

          title:"序盤の武器選び",

          description:"初心者向け武器の考え方",

          tags:[
            "武器",
            "銃",
            "ライフル",
            "ピストル",
            "戦闘"
          ],


          answer:
          "序盤は射程の長い銃を優先する。近接は強力だが初心者には扱いが難しい。",


          content:`

          <h2>
          序盤おすすめ
          </h2>

          <ul>

          <li>
          ライフル系：距離を取って戦える
          </li>

          <li>
          ピストル：予備武器として便利
          </li>

          <li>
          近接武器：慣れてから使う
          </li>

          </ul>


          <br>


          <div class="answer">
          💡 射撃担当を複数用意すると安定する。
          </div>

          `

        },


        {

          id:"cover",

          title:"遮蔽物を使う",

          description:"銃撃戦の基本",

          tags:[
            "遮蔽物",
            "岩",
            "壁",
            "防衛"
          ],


          answer:
          "何もない場所で撃ち合わず、壁や岩の後ろから戦う。",


          content:`

          <h2>
          良い遮蔽物
          </h2>

          <ul>

          <li>
          厚い壁
          </li>

          <li>
          岩
          </li>

          <li>
          建物の角
          </li>

          </ul>


          <br>


          <div class="answer">
          ⚠️ 開けた場所での戦闘は被害が大きい。
          </div>

          `

        }


      ]

    },



    {

      id:"raid",

      icon:"🚨",

      name:"襲撃対策",

      description:"敵から拠点を守る",

      articles:[


        {

          id:"first-raid",

          title:"最初の襲撃への対応",

          description:"初心者がやるべきこと",

          tags:[
            "襲撃",
            "敵",
            "防衛",
            "序盤"
          ],


          answer:
          "焦って外に出ず、入植者を集めて有利な場所で迎撃する。",


          content:`

          <h2>
          襲撃されたら
          </h2>


          <ol>

          <li>
          全員の武器確認
          </li>

          <li>
          遮蔽物へ移動
          </li>

          <li>
          敵を分散させる
          </li>

          <li>
          負傷者を治療
          </li>

          </ol>


          <br>


          <div class="answer">
          💡 序盤は豪華な防衛設備より位置取りが重要。
          </div>

          `

        },


        {

          id:"killzone",

          title:"簡単な防衛ライン",

          description:"初心者向け防衛",

          tags:[
            "キルゾーン",
            "壁",
            "防衛ライン"
          ],


          answer:
          "壁やドアを使って敵の進行方向を制御する。",


          content:`

          <h2>
          基本
          </h2>

          <p>
          敵が好き勝手に侵入できないよう、
          拠点入口を管理する。
          </p>


          <br>


          <div class="answer">
          💡 最初は小さな防衛地点だけで十分。
          </div>

          `

        }


      ]

    },



    {

      id:"prisoner",

      icon:"⛓️",

      name:"捕虜・勧誘",

      description:"敵を仲間にする方法",

      articles:[


        {

          id:"capture",

          title:"敵を捕虜にする",

          description:"倒した敵を仲間候補にする",

          tags:[
            "捕虜",
            "勧誘",
            "襲撃者",
            "仲間"
          ],


          answer:
          "敵を殺さずダウンさせ、ベッドを捕虜用に変更して収容する。",


          content:`

          <h2>
          手順
          </h2>


          <ol>

          <li>
          敵をダウンさせる
          </li>

          <li>
          捕虜用ベッドを作る
          </li>

          <li>
          看病する
          </li>

          <li>
          社交から勧誘する
          </li>

          </ol>


          <br>


          <div class="answer">
          💡 優秀なスキル持ちの敵は積極的に勧誘候補。
          </div>

          `

        }


      ]

    }


  ]

};
