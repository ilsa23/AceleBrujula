var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        $('#acelerometro ul.individual li').tap(fn.acTap);
        $('#brujula ul.individual li').tap(fn.brTap);
    },
    acTap: function(){
        if($(this).index()==0)
            ac.iniciar();//Iniciar
        else
            ac.detener();//Detener
    },
    brTap: function(){
        switch($(this).index()){
        case 0:
                br.iniciar();
                break;
        case 1:
                br.detener();
                break;
        }
    }
};
$(fn.ready);