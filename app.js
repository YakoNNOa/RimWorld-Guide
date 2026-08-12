const app = document.getElementById("app");


let currentCategory = null;
let currentSection = null;


/* =========================
   ホーム表示
========================= */

function showHome(){

  currentCategory = null;
  currentSection = null;

  app.innerHTML = `

    <input
      class="search"
      placeholder="🔎 例：冬、捕虜、服、研究"
      oninput="searchArticle(this.value)"
    >


    <h2>
      攻略カテゴリ
    </h2>

    <br>


    ${categories.map(category => `

      <div
        class="card"
        onclick="showCategory('${category.id}')"
      >

        <div class="card-title">

          ${category.icon}
          ${category.name}

        </div>


        <div class="card-description">

          ${category.description}

        </div>

      </div>


    `).join("")}


  `;

}


/* =========================
   大カテゴリ
========================= */

function showCategory(id){

  currentCategory =
    categories.find(
      c => c.id === id
    );


  app.innerHTML = `


    <div
      class="back"
      onclick="showHome()"
    >
      ← ホームへ戻る
    </div>


    <h1>

      ${currentCategory.icon}
      ${currentCategory.name}

    </h1>

    <br>


    ${currentCategory.sections.map(section => `


      <div
        class="card"
        onclick="
          showSection('${section.id}')
        "
      >

        <div class="card-title">

          ${section.icon}
          ${section.name}

        </div>


        <div class="card-description">

          ${section.description}

        </div>


      </div>


    `).join("")}


  `;

}



/* =========================
   中カテゴリ
========================= */

function showSection(id){


  currentSection =
    currentCategory.sections.find(
      s => s.id === id
    );



  app.innerHTML = `


    <div
      class="back"
      onclick="
        showCategory('${currentCategory.id}')
      "
    >
      ← ${currentCategory.name}
    </div>



    <h1>

      ${currentSection.icon}
      ${currentSection.name}

    </h1>


    <br>


    ${currentSection.articles.map(article => `


      <div
        class="card"
        onclick="
          showArticle('${article.id}')
        "
      >

        <div class="card-title">

          ${article.title}

        </div>


        <div class="card-description">

          ${article.description}

        </div>


      </div>


    `).join("")}


  `;


}



/* =========================
   記事
========================= */

function showArticle(id){


  const article =
    currentSection.articles.find(
      a => a.id === id
    );



  app.innerHTML = `


    <div
      class="back"
      onclick="
        showSection('${currentSection.id}')
      "
    >
      ← 戻る
    </div>


    <article class="article">


      <h1>

        ${article.title}

      </h1>


      <div class="answer">

        <b>
          まず結論
        </b>

        <br><br>

        ${article.answer}

      </div>


      ${article.content}


    </article>


  `;


}



/* =========================
   検索
========================= */

function searchArticle(word){


  if(!word){

    showHome();

    return;

  }


  const result = [];



  categories.forEach(category => {


    category.sections.forEach(section => {


      section.articles.forEach(article => {


        const text = `

          ${category.name}

          ${section.name}

          ${article.title}

          ${article.description}

          ${article.tags.join(" ")}

        `.toLowerCase();



        if(
          text.includes(
            word.toLowerCase()
          )
        ){

          result.push({

            category,
            section,
            article

          });

        }


      });


    });


  });



  app.innerHTML = `


    <input

      class="search"

      value="${word}"

      oninput="searchArticle(this.value)"

    >


    <h2>

      検索結果 ${result.length}件

    </h2>


    <br>


    ${
      result.length === 0

      ?

      `
      <div class="card">
      見つかりませんでした
      </div>
      `

      :

      result.map(item => `


        <div

          class="card"

          onclick="
          showCategory('${item.category.id}');
          setTimeout(
            ()=>showSection('${item.section.id}'),
            50
          );
          "

        >

          <div class="card-title">

          ${item.article.title}

          </div>


          <div class="card-description">

          ${item.article.description}

          </div>


        </div>


      `).join("")

    }


  `;


}



/* 起動 */

showHome();
