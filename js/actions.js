var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        $('#acelerometro ul.individual li').tap(fn.acTap);
    },
    acTap: function(){
        if($(this).index()==0)
            ac.iniciar();//Iniciar
        else
            ac.detener();//Detener
    }
};
$(fn.ready);