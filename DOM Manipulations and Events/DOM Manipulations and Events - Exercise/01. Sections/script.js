function create(words) {
   const content = document.getElementById('content');


   for (let i = 0; i < words.length; i++) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = words[i];
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      content.appendChild(div);
   }


   content.addEventListener('click', toggle);



   function toggle(e){
      if(e.target.tagName === 'DIV'){
         const p = e.target.children[0] || e.target;
         const isVisible =  p.style.display === 'block';
         p.style.display = isVisible ? 'none' : 'block';
      }
   }
}