function solve() {
   // using local state is always a good practice. 
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

      ol.innerHTML = '';
      olState.push(title.textContent)
      olState.sort((a, b) => a.localeCompare(b)).forEach((element) => {
         let li = el('li', element);
         ol.appendChild(li);
      });

      section.remove();
      //Or use this. 
      /*
      ol.appendChild(li);
      Array.from(ol.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li));
      section.remove();
      */
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


//Another solution.
//If you uncomment this solution it will ovewrite the previous one. 
//document is a property of window, so i can use this: 

/*function solve() {
   const inputFiels = Array.from(window.document.querySelectorAll('p input'));
   const author = inputFiels[0];
   const title = inputFiels[1];
   const category = inputFiels[2];
   const content = window.document.getElementById('content');
   const section = window.document.querySelector('main > section');

   window.document.querySelector('.btn').addEventListener('click', appendText);

   function appendText(e){
      e.preventDefault();

      const article = el('article');
      // We take the input values after the function invocation
      const h1 = el('h1', title.value);
      const p = el('p', 'Category:');
      const strong = el('strong', category.value);
      p.appendChild(strong);
      const p2 = el('p', 'Creator:');
      const strong2 = el('strong', author.value);
      p2.appendChild(strong2);
      const p3 = el('p', content.value);
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
      article.appendChild(p3);
      article.appendChild(div);
      section.appendChild(article);
   }

   function del(e){
      e.target.parentNode.parentNode.remove();
   }

   function archive(e){
      const section = e.target.parentNode.parentNode;
      const textToAppend = section.querySelector('h1').textContent;
      const ol = document.querySelector('ol');
      let li = el('li', textToAppend);
      ol.appendChild(li);
      Array.from(ol.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach((e) => ol.appendChild(e));
      section.remove();
   }
   //This is standart create element function.
   function el(type, content, addClass) {
      const result = document.createElement(type);
      result.textContent = content;

      if (addClass) {
         result.className = addClass;
      }
      return result;
   }
}
*/


