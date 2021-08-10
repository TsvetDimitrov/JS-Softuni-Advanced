function solve() {
   let state = [];

   const createBtn = document.querySelector('.create');

   createBtn.addEventListener('click', createPost);


   function createPost(e) {
      e.preventDefault();

      const creator = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;
      const placeToAppend = document.querySelector('main > section');
      const archiveSection = document.querySelector('.archive-section > ol');

      const article = createEle('article');
      const h1 = createEle('h1', title);
      const p = createEle('p', 'Category:');
      const strong = createEle('strong', category);
      p.appendChild(strong);
      const p1 = createEle('p', 'Creator:');
      const strong1 = createEle('strong', creator);
      p1.appendChild(strong1);
      const p2 = createEle('p', content);
      const div = createEle('div', undefined, 'buttons');
      const delBtn = createEle('button', 'Delete', 'btn delete');
      const archiveBtn = createEle('button', 'Archive', 'btn archive');
      archiveBtn.addEventListener('click', archive);
      delBtn.addEventListener('click', del);

      div.appendChild(delBtn);
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(p);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(div);

      placeToAppend.appendChild(article);

      function archive(e) {
         const section = e.target.parentNode.parentNode;
         const title = section.querySelector('h1').textContent;
         archiveSection.innerHTML = '';
         state.push(title);
         state.sort((a, b) => a.localeCompare(b)).forEach((i) => {
            const li = createEle('li', i);
            archiveSection.appendChild(li);
         });

         section.remove();

      }


      function del(e) {
         const section = e.target.parentNode.parentNode;
         section.remove();
      }

   }

   function createEle(type, content, addClass) {
      let result = document.createElement(type);

      if (content) {
         result.textContent = content;
      }

      if (addClass) {
         result.className = addClass;
      }

      return result;
   }
}
