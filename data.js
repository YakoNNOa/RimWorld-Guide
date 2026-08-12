const categories = [

  {
    id: "beginner",

    icon: "🌱",

    name: "初心者ガイド",

    description:
      "ゲーム開始から最初の冬まで",


    sections: [

      {

        id: "start",

        icon: "🚀",

        name: "ゲーム開始",

        description:
          "最初にやることを確認",


        articles: [

          {

            id: "first-day",

            title:
              "ゲーム開始直後にやること",


            description:
              "何を優先すればいい？",


            tags: [
              "初心者",
              "序盤",
              "開始",
              "最初"
            ],


            answer:
              "まずは寝床・食料・備蓄場所を確保する。大きな基地作りは後回しでOK。",


            content:

            `

            <div class="article-section">

            <h2>
            最初の目標
            </h2>


            <p>

            最初から立派な拠点を作る必要はない。

            まずは入植者が生きられる環境を作る。

            </p>


            <br>


            <h2>
            優先順位
            </h2>


            <ol>

            <li>寝床を作る</li>

            <li>食料を確保する</li>

            <li>備蓄場所を作る</li>

            <li>栽培を始める</li>

            <li>調理環境を整える</li>

            </ol>


            <br>


            <div class="answer">

            💡 最初の冬まで生き残ることを目標にする。

            </div>


            </div>

            `

          },


          {

            id:"work-priority",

            title:
            "仕事の優先度",

            description:
            "数字の意味とおすすめ設定",


            tags:[
              "仕事",
              "優先度",
              "作業"
            ],


            answer:
            "数字が小さいほど優先度が高い。重要な仕事を1〜2に設定する。",


            content:

            `

            <h2>
            優先度の意味
            </h2>


            <p>

            1が最優先、4が最低優先。

            </p>


            <br>


            <ul>

            <li>
            医療 → 高優先
            </li>

            <li>
            消火 → 高優先
            </li>

            <li>
            建築 → 拠点作り中は高め
            </li>

            <li>
            掃除・運搬 → 暇な人へ
            </li>


            </ul>


            `

          }


        ]

      }

    ]

  }

];
