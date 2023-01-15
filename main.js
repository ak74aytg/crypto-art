document.querySelector('.inus').addEventListener('click', (e)=>
{
    document.querySelector('.in').classList.remove('hidden');
        document.querySelector('.us').classList.remove('hidden');
    document.querySelector('.fa-angle-down').classList.toggle('active');
    if(document.querySelector('.inus').style.height == '60px'){
        document.querySelector('.inus').style.height = '30px';
        if(e.target.classList.contains('in')){
            document.querySelector('.in').classList.remove('hidden');
            document.querySelector('.us').classList.add('hidden');
        }
        else if(e.target.classList.contains('us')){
            document.querySelector('.us').classList.remove('hidden');
            document.querySelector('.in').classList.add('hidden');
        }else{
            document.querySelector('.in').classList.remove('hidden');
            document.querySelector('.us').classList.add('hidden');
        }

    }else{
        document.querySelector('.inus').style.height = '60px';
    }
    // document.querySelector('.inus').style.height = '60px';
})