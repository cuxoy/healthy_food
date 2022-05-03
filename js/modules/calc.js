function calc (){
    const result = document.querySelector('.calculating__result span');
    let sex = "female",
    height,
    weight,
    age,
    ratio = 1.375;

    function calcTotal(){
        if(!sex || !height || !weight || !age || !ratio ){
            result.textContent = '____';
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }

        
    }
    calcTotal();

    function getStaticInformation(parentSelector, activeClass){
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem =>{
            elem.addEventListener('click',(event)=>{
                if(event.target.getAttribute('data-ratio')){
                    ratio = +event.target.getAttribute('data-ratio');
                } else{
                    sex = event.target.getAttribute('id');
    
                }
                console.log(ratio,sex);
                
                elements.forEach(elem=>{
                    elem.classList.remove(activeClass);
        
                }); 
                event.target.classList.add(activeClass);
                calcTotal();
        });

        });
        
   
    }
    getStaticInformation('#gender','calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big','calculating__choose-item_active');

    function getDinamicInformation(selector){
            const input = document.querySelector(selector);
            input.addEventListener('input',()=>{
                switch(input.getAttribute('id')){
                    case 'height':
                        height = +input.value;
                        break;
                    case 'weight':
                        weight = +input.value;
                        break;
                    case 'age':
                        age = +input.value;
                        break;

                }
                calcTotal();
            });
            

    }

    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');
}
export default calc;