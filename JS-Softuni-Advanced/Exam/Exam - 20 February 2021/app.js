function solve() {
   let olState = [];
   document.querySelector('.btn').addEventListener('click', (e) => {
      e.preventDefault();
      const author = document.getElementById('creator');
      const title = document.getElementById('title');
      const category = document.getElementById('category');
      const content = document.getElementById('content');


      // I have been 2 hours on this task because of this stupid. IF statement and if you are reading this, 
      // please read your taks description carefully and do not improvise
      // if (author.value == '' || title.value == '' || category.value == '' || content.value == '') {
      //    return;
      // }

      const main = document.querySelector('main > section');
      const article = el('article');
      const h1 = el('h1', title.value);
      const p = el('p', 'Category:  ');
      const strong = el('strong', category.value);
      p.appendChild(strong);
      const p2 = el('p', 'Creator: ');
      const strong2 = el('strong', author.value);
      p2.appendChild(strong2);
      const pText = el('p', content.value);
      const div = el('div', undefined, 'buttons');
      const delBtn = el('button', 'Delete', 'btn delete');
      delBtn.addEventListener('click', del);
      const archiveBtn = el('button', 'Archive', 'btn archive');
      archiveBtn.addEventListener('click', archive);
      div.appendChild(delBtn);
      div.appendChild(archiveBtn);
      article.appendChild(h1);
      article.appendChild(p);
      article.appendChild(p2);
      article.appendChild(pText);
      article.appendChild(div);
      main.appendChild(article);

      author.value = '';
      title.value = '';
      content.value = '';
      category.value = '';

   });

   function del(e) {
      e.target.parentNode.parentNode.remove();
   }

   function archive(e) {
      let section = e.target.parentNode.parentNode;
      section.parentNode.removeChild(section);
      let title = section.querySelector('h1');
      const ol = document.querySelector('ol');
      let li = el('li', title.textContent);

      ol.appendChild(li);
      Array.from(ol.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li));
      section.remove();


   }
   function el(type, content, addClass) {
      const result = document.createElement(type);
      result.textContent = content;

      if (addClass) {
         result.className = addClass;
      }
      return result;
   }
}


