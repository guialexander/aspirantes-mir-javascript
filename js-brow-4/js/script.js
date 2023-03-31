
const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
  ];

  //solución del ejercicio
 

  

  function crearmenu(menu){

    const elementoul=document.createElement('ul');
   
               
    menu.forEach((item)=>{
        const lista= document.createElement('li');
        lista.innerText=item.name;
        console.log(menu);
        if(item.items.length>0){

         lista.appendChild(crearmenu(item.items));

        }
        elementoul.appendChild(lista);
  });
        
        
     return elementoul;        
    };

    document.body.appendChild(crearmenu(menu));

    function bonus(menu){
      const ulelemento=document.createElement("ul");

      menu.forEach((item)=>{
        const leelemento=document.createElement("li");
        leelemento.textContent=iten.name;

        if (item.items.length>0){
          const buttonElement=document.createElement("button");
          buttonElement.textContent="+";
          buttonElement.addEventListener("click",()=>{
            leelemento.classList.toggle("expandir");
          });
          leelemento.insertBefore(buttonElement,leelemento.firstChild);
          leelemento.appendChild(bonus(item.items));
        };

        ulelemento.appendChild(leelemento);


      });
      return ulelemento;
    };


  

 
 

  


  